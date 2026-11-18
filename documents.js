import * as THREE from 'three';
import { stampVolume } from './book-covers.js';

const editions = [
  {
    key: 'sites',
    title: 'Сайты',
    dye: [0.76, 1.05, 1.5],
    height: 1.24,
    slot: -0.32,
    floor: 1.32,
    x: -1.89,
    y: 1.04,
    yaw: -0.27,
    roll: 0.085,
    delay: 0.97,
  },
  {
    key: 'ads',
    title: 'Реклама',
    dye: [2.03, 0.77, 0.62],
    height: 1.2,
    slot: 0.32,
    floor: 1.32,
    x: 1.9,
    y: 0.89,
    yaw: 0.42,
    roll: -0.105,
    delay: 1.19,
  },
  {
    key: 'apps',
    title: 'Приложения',
    dye: [0.68, 1.34, 1.03],
    height: 1.22,
    slot: -0.34,
    floor: 0.32,
    x: -1.92,
    y: -0.66,
    yaw: -0.15,
    roll: -0.064,
    delay: 1.48,
  },
  {
    key: '3d',
    title: '3D',
    dye: [1.55, 0.97, 1.48],
    height: 1.17,
    slot: 0.32,
    floor: 0.32,
    x: 1.85,
    y: -0.82,
    yaw: 0.52,
    roll: 0.069,
    delay: 1.72,
  },
];
const { smootherstep, lerp, clamp } = THREE.MathUtils;

export function createBooks(group, camera, state, container, stock, bindingGrain) {
  const books = editions.map((spec, index) => {
    const body = new THREE.Group();
    const model = stock[index].clone(true);
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const scale = spec.height / size.y;
    // Keep individual binding shapes and make these four editions large-format folios.
    model.scale.set(scale * 1.1, scale, scale * 1.22);
    model.position.copy(center).multiply(model.scale).negate();
    const cover = model.getObjectByProperty('isMesh', true);
    const releaseStamp = stampVolume(cover, bounds, spec, bindingGrain);
    const mount = new THREE.Group();
    mount.rotation.y = -Math.PI / 2;
    mount.add(model);
    body.add(mount);
    group.add(body);
    return {
      ...spec,
      index,
      body,
      releaseStamp,
      width: size.z * model.scale.z,
      depth: size.x * model.scale.x,
      link: container.querySelector('[data-document="' + spec.key + '"]'),
      progress: 0,
      hover: 0,
      screen: null,
      rest: new THREE.Object3D(),
      restWorld: new THREE.Matrix4(),
    };
  });

  const restingPoint = new THREE.Vector3();
  const inverseTurn = new THREE.Quaternion();
  function update(t, dt) {
    inverseTurn.copy(group.quaternion).invert();
    for (const b of books) {
      const p = Math.max(b.progress, state.paused ? 1 : clamp((t - b.delay) / 1.94, 0, 1));
      b.progress = p;
      const pull = smootherstep(p, 0, 0.5);
      const travel = smootherstep(p, 0.43, 0.98);
      const turn = smootherstep(p, 0.48, 0.96);
      const arc = Math.sin(travel * Math.PI);
      const brake = smootherstep(p, 0.79, 1);
      const settle = Math.sin(brake * Math.PI * 2) * (1 - brake);
      const sign = Math.sign(b.slot);
      const hover = state.heroFocus === b.key ? 1 : 0;
      b.hover = lerp(b.hover, hover, state.paused ? 1 : 1 - Math.exp(-dt * 9));
      const storedY = b.floor * 1.54 - 1.78 + b.height / 2 + 0.009;
      // The spine moves along the shelf until the trailing fore edge clears the open doors.
      const storedZ = 0.58 - b.width / 2;
      // Anchor the airborne composition in front of the cabinet, even while it is dragged.
      const air = state.paused ? 0 : smootherstep(p, 0.8, 1);
      const phase = t * (0.83 + 0.055 * b.index) + b.index * 1.79;
      restingPoint.set(
        b.x + air * 0.009 * Math.sin(phase * 0.72),
        b.y + air * 0.026 * Math.sin(phase),
        2.04 + air * 0.013 * Math.cos(phase * 0.87)
      );
      restingPoint.applyQuaternion(inverseTurn);
      b.body.position.set(
        lerp(b.slot, restingPoint.x, travel) + sign * 0.055 * arc,
        lerp(storedY, restingPoint.y, travel) + 0.031 * pull + 0.112 * arc,
        lerp(lerp(storedZ, 1.92, pull), restingPoint.z, travel) + 0.21 * arc + 0.032 * settle
      );
      b.body.rotation.set(
        -0.085 * turn - 0.105 * arc,
        lerp(Math.PI / 2, b.yaw, turn) + air * 0.011 * Math.sin(phase * 0.75),
        b.roll * turn + sign * (0.069 * arc - 0.018 * settle) + air * 0.009 * Math.cos(phase)
      );
      b.rest.position.copy(b.body.position);
      b.rest.quaternion.copy(b.body.quaternion);
      b.rest.updateMatrix();
      const lift = b.hover * travel;
      b.body.position.y += lift * 0.065;
      b.body.position.z += lift * 0.1;
      b.body.rotation.y -= sign * 0.08 * lift;
      b.body.rotation.z -= sign * 0.025 * lift;
    }
    container.classList.toggle('books-presented', books[books.length - 1].progress >= 0.9);
  }

  const corner = new THREE.Vector3();
  function project() {
    const w = container.clientWidth,
      h = container.clientHeight;
    for (const b of books) {
      b.restWorld.multiplyMatrices(group.matrixWorld, b.rest.matrix);
      let left = Infinity,
        top = Infinity,
        right = -Infinity,
        bottom = -Infinity;
      for (const matrix of [b.body.matrixWorld, b.restWorld]) {
        for (const x of [-b.width / 2, b.width / 2])
          for (const y of [-b.height / 2, b.height / 2]) {
            corner
              .set(x, y, b.depth / 2)
              .applyMatrix4(matrix)
              .project(camera);
            const px = ((corner.x + 1) * w) / 2,
              py = ((1 - corner.y) * h) / 2;
            left = Math.min(left, px);
            right = Math.max(right, px);
            top = Math.min(top, py);
            bottom = Math.max(bottom, py);
          }
      }
      const old = b.screen;
      const rect = {
        left: Math.round(left) - 2,
        top: Math.round(top) - 2,
        right: Math.round(right) + 2,
        bottom: Math.round(bottom) + 2,
      };
      if (
        !old ||
        b.viewWidth !== w ||
        b.viewHeight !== h ||
        rect.left !== old.left ||
        rect.top !== old.top ||
        rect.right !== old.right ||
        rect.bottom !== old.bottom
      ) {
        const style = b.link.style;
        style.setProperty('--doc-x', (100 * rect.left) / w + '%');
        style.setProperty('--doc-y', (100 * rect.top) / h + '%');
        style.setProperty('--doc-w', (100 * (rect.right - rect.left)) / w + '%');
        style.setProperty('--doc-h', (100 * (rect.bottom - rect.top)) / h + '%');
        b.screen = rect;
        b.viewWidth = w;
        b.viewHeight = h;
      }
      // A closed oak door is solid: activate the projected link after the volume emerges.
      b.link.classList.toggle('book-in-cabinet', b.progress <= 0.5);
    }
  }
  return {
    update,
    project,
    status: () =>
      books.map((b) => ({
        key: b.key,
        progress: b.progress,
        hover: b.hover,
        position: b.body.position.toArray(),
        screen: b.screen,
      })),
    dispose() {
      for (const b of books) {
        group.remove(b.body);
        b.releaseStamp();
      }
    },
  };
}
