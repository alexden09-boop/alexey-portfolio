import * as THREE from 'three';

// Real sheets share the sculpture's camera and depth buffer. DOM anchors only
// provide native navigation, touch hit areas and keyboard access to those meshes.
export function createDocuments(scene, camera, letter, state, container, plates) {
  const width = 1.24, height = .80;
  const specs = [
    { key: 'sites', title: 'Сайты', x: .34, y: 1.12, z: 1.65, roll: -.09, seamY: .87, delay: .24, duration: 2.08 },
    { key: 'ads', title: 'Реклама', x: .90, y: .04, z: 1.80, roll: .075, seamY: .17, delay: .65, duration: 2.27 },
    { key: 'apps', title: 'Приложения', x: .48, y: -1.05, z: 1.95, roll: -.055, seamY: -.68, delay: 1.00, duration: 2.24 },
    { key: '3d', title: '3D', x: -1.04, y: -1.32, compactY: .05, z: 1.70, roll: .065, seamY: -.47, delay: 1.29, duration: 2.31 },
  ];
  // Subdivide both the backing and edges so the silhouette follows the printed face.
  const positions = [], indices = [];
  const segments = 32, thickness = .012, notch = .126;
  for (let i = 0; i <= segments; i++) {
    const x = width * (i / segments - .5);
    const lo = -height / 2, hi = height / 2 - Math.max(0, x - (width / 2 - notch));
    positions.push(x,lo,0, x,hi,0, x,lo,thickness, x,hi,thickness);
    if (!i) continue;
    const j = 4 * (i - 1);
    indices.push(j,j+1,j+4, j+1,j+5,j+4,
                 j,j+4,j+2, j+2,j+4,j+6,
                 j+1,j+3,j+5, j+3,j+7,j+5);
  }
  const last = 4 * segments;
  indices.push(0,2,1, 1,2,3, last,last+1,last+2, last+1,last+3,last+2);
  const edgeGeometry = new THREE.BufferGeometry();
  edgeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions,3));
  edgeGeometry.setIndex(indices);
  edgeGeometry.computeVertexNormals();
  const faceGeometry = new THREE.PlaneGeometry(width,height,segments,8);
  const sheets = specs.map((spec, index) => {
    const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 496;
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    const faceMaterial = new THREE.MeshStandardMaterial({ map: texture, color: 0xeeeeef, emissive: 0xffffff, emissiveMap: texture, emissiveIntensity: .17, roughness: .76, metalness: .04, transparent: true, alphaTest: .5, side: THREE.DoubleSide });
    const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0x686572, metalness: .23, roughness: .58, side: THREE.DoubleSide, emissive: 0xd4a883, emissiveIntensity: 0 });
    const release = { value: 0 }, flex = { value: 0 }, twist = { value: 0 };
    const side = spec.key === '3d' ? -1 : 1;
    for (const material of [edgeMaterial, faceMaterial]) {
      material.onBeforeCompile = shader => {
        shader.uniforms.sheetRelease = release;
        shader.uniforms.sheetFlex = flex;
        shader.uniforms.sheetTwist = twist;
        shader.uniforms.sheetSide = { value: side };
        shader.vertexShader = 'uniform float sheetSide, sheetFlex, sheetTwist; varying float sheetEdge;\n' + shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
          float trailing = clamp(.5 - position.x * sheetSide / 1.24, 0., 1.);
          float slopeX = -2. * trailing * sheetSide * sheetFlex / 1.24 + sheetTwist * position.y;
          objectNormal.xy -= objectNormal.z * vec2(slopeX, sheetTwist * position.x);`);
        shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
          sheetEdge = clamp(.5 + position.x * sheetSide / 1.24, 0., 1.);
          transformed.z += sheetFlex * (1.-sheetEdge) * (1.-sheetEdge) + sheetTwist * position.x * position.y;`);
        shader.fragmentShader = 'uniform float sheetRelease; varying float sheetEdge;\n' + shader.fragmentShader;
        shader.fragmentShader = shader.fragmentShader.replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
          if (sheetEdge < 1. - sheetRelease) discard;`);
      };
    }
    const object = new THREE.Group();
    const face = new THREE.Mesh(faceGeometry, faceMaterial); face.position.z = thickness + .001;
    object.add(new THREE.Mesh(edgeGeometry, edgeMaterial), face); scene.add(object);
    const link = container.querySelector(`[data-document="${spec.key}"]`);
    const sheet = { ...spec, index, side, release, flex, twist, plate: plates.get(spec.key), canvas, texture, faceMaterial, edgeMaterial, object, rest: new THREE.Object3D(), link, progress: 0, hover: 0, screen: null };
    paint(sheet);
    return sheet;
  });
  let disposed = false;
  document.fonts.ready.then(() => { if (!disposed) for (const sheet of sheets) paint(sheet); });

  function paint(sheet) {
    const c = sheet.canvas.getContext('2d');
    c.clearRect(0, 0, 768, 496);
    c.beginPath(); c.moveTo(3, 3); c.lineTo(687, 3); c.lineTo(765, 81); c.lineTo(765, 493); c.lineTo(3, 493); c.closePath();
    c.fillStyle = '#24252a'; c.fill(); c.strokeStyle = '#696870'; c.lineWidth = 3; c.stroke();
    c.beginPath(); c.moveTo(687, 3); c.lineTo(687, 81); c.lineTo(765, 81); c.closePath(); c.fillStyle = '#55515b'; c.fill();
    c.fillStyle = '#f1ece5'; c.font = "500 65px 'Manrope Variable', sans-serif"; c.fillText(sheet.title, 47, 115);
    c.strokeStyle = '#d6ad91'; c.lineWidth = 5; c.beginPath(); c.moveTo(638, 108); c.lineTo(670, 76); c.moveTo(641, 76); c.lineTo(670, 76); c.lineTo(670, 105); c.stroke();
    c.fillStyle = '#a69eac'; c.fillRect(48, 150, 670, 2);
    c.strokeStyle = '#77717f'; c.lineWidth = 3;
    if (sheet.key === 'sites') {
      c.strokeRect(48, 192, 670, 249); c.fillStyle = '#34343b'; c.fillRect(49, 193, 668, 30);
      c.fillStyle = '#b1a8bc'; [67, 83, 99].forEach(x => { c.beginPath(); c.arc(x, 207, 3, 0, Math.PI * 2); c.fill(); });
      c.fillStyle = '#c3b9cb'; c.fillRect(80, 256, 233, 16); c.fillRect(80, 286, 179, 16);
      c.fillStyle = '#77717f'; c.fillRect(80, 326, 206, 7); c.fillRect(80, 345, 171, 7);
      c.fillStyle = '#b78e77'; c.fillRect(80, 382, 98, 22);
      c.fillStyle = '#46434d'; c.fillRect(432, 248, 254, 166);
      c.strokeStyle = '#aaa0b5'; c.strokeRect(480, 273, 158, 115);
    } else if (sheet.key === 'ads') {
      c.fillStyle = '#34303a'; c.fillRect(48, 192, 670, 188);
      c.strokeStyle = '#b4a3be'; c.strokeRect(82, 220, 174, 128);
      c.fillStyle = '#b49a86'; c.fillRect(111, 242, 116, 84);
      c.fillStyle = '#c0b7c8'; c.fillRect(308, 233, 260, 17); c.fillRect(308, 269, 182, 17);
      c.fillStyle = '#77717f'; c.fillRect(308, 315, 330, 7);
      c.fillStyle = '#a88a78'; c.fillRect(48, 405, 199, 35);
      c.fillStyle = '#675b73'; c.fillRect(255, 405, 308, 35); c.fillRect(571, 405, 147, 35);
    } else if (sheet.key === '3d') {
      c.fillStyle = '#34303a'; c.fillRect(48, 192, 670, 249);
      const faces = [
        ['M383 204 498 255 383 310 268 255Z', '#82798b'],
        ['M268 255 383 310 383 429 268 375Z', '#47444e'],
        ['M383 310 498 255 498 375 383 429Z', '#635563'],
      ];
      for (const [outline, fill] of faces) {
        const face = new Path2D(outline);
        c.fillStyle = fill; c.fill(face);
        c.strokeStyle = '#d8c5bd'; c.lineWidth = 4; c.stroke(face);
      }
    } else {
      c.strokeRect(48, 192, 670, 249); c.fillStyle = '#34343b'; c.fillRect(49, 193, 111, 247);
      c.fillStyle = '#a69eac'; for (let n = 0; n < 4; n++) c.fillRect(70, 228 + n * 39, 62, 6);
      for (let n = 0; n < 3; n++) {
        c.fillStyle = '#38363f'; c.fillRect(189, 220 + n * 67, 495, 49);
        c.strokeStyle = '#b3a6bf'; c.strokeRect(208, 237 + n * 67, 16, 16);
        c.fillStyle = '#afa5b8'; c.fillRect(248, 241 + n * 67, 176 - n * 27, 8);
        c.fillStyle = '#aa8e7b'; c.fillRect(596, 239 + n * 67, 62, 12);
      }
    }
    sheet.texture.needsUpdate = true;
  }

  const rail = new THREE.Vector3(), target = new THREE.Vector3();
  function update(dt) {
    const t = state.time;
    const compact = innerWidth <= 1000;
    letter.updateWorldMatrix(true, true);
    for (const sheet of sheets) {
      sheet.progress = Math.max(sheet.progress, state.paused ? 1 : THREE.MathUtils.clamp((t - sheet.delay) / sheet.duration, 0, 1));
      const phase = sheet.progress;
      const slide = THREE.MathUtils.smootherstep(phase, 0, .50);
      const flight = THREE.MathUtils.smootherstep(phase, .29, .91);
      const brake = THREE.MathUtils.smoothstep(phase, .62, 1);
      const recoil = Math.sin(brake * Math.PI * 2) * (1 - brake);
      const lift = Math.sin(flight * Math.PI);
      // The stock clears a real layer seam before its centre of mass turns forward.
      const outerEdge = 1.52 - (sheet.seamY + 1.65) * 1.18 / 3.30;
      rail.set(sheet.side * (outerEdge - width * .5 + slide * (width + .04)),
        sheet.seamY, .061).applyMatrix4(sheet.plate.matrixWorld);
      const drift = Math.sin(t * (.74 + sheet.index * .09) + sheet.index * 1.9) * .037;
      target.set(sheet.x * (compact ? (innerWidth < 380 ? .60 : .80) : 1),
        (compact ? sheet.compactY ?? sheet.y : sheet.y) + drift, sheet.z);
      sheet.object.position.lerpVectors(rail, target, flight);
      sheet.object.position.y += lift * (.25 + .06 * sheet.index) - .055 * recoil;
      sheet.object.position.z += lift * .34 + .095 * recoil;
      sheet.release.value = Math.min(1, slide * 1.04);
      sheet.flex.value = -.27 * lift + .095 * recoil;
      sheet.twist.value = sheet.side * (.53 * lift - .22 * recoil);
      const turn = THREE.MathUtils.smootherstep(phase, .35, .94);
      sheet.object.rotation.set(
        THREE.MathUtils.lerp(letter.rotation.x, .08, turn) - .23 * lift + .08 * recoil
          + Math.sin(t * .63 + sheet.index) * .018 * turn,
        THREE.MathUtils.lerp(letter.rotation.y, -.11, turn) - sheet.side * (.58 * lift - .10 * recoil),
        THREE.MathUtils.lerp(letter.rotation.z, sheet.roll, turn) + sheet.side * .21 * lift
          + Math.sin(t * .52 + sheet.index * 2) * .014 * turn
      );
      const selected = state.heroFocus === sheet.key ? 1 : 0;
      sheet.hover += (selected - sheet.hover) * (state.paused ? 1 : 1 - Math.exp(-dt * 14));
      sheet.object.scale.setScalar(1);
      sheet.rest.position.copy(sheet.object.position); sheet.rest.quaternion.copy(sheet.object.quaternion); sheet.rest.scale.copy(sheet.object.scale); sheet.rest.updateMatrix();
      sheet.object.position.y += sheet.hover * .12 * flight; sheet.object.position.z += sheet.hover * .18 * flight;
      sheet.object.rotation.y += sheet.hover * .035; sheet.object.rotation.z -= sheet.hover * .025;
      sheet.object.scale.multiplyScalar(1 + sheet.hover * .035);
      sheet.object.visible = sheet.progress > 0;
      sheet.edgeMaterial.emissiveIntensity = sheet.hover * .65;
    }
  }

  const corner = new THREE.Vector3();
  function project() {
    camera.updateMatrixWorld();
    for (const sheet of sheets) {
      sheet.object.updateWorldMatrix(true, false);
      let left = Infinity, top = Infinity, right = -Infinity, bottom = -Infinity;
      for (const matrix of [sheet.object.matrixWorld, sheet.rest.matrix]) for (const x of [-width / 2, width / 2]) for (const y of [-height / 2, height / 2]) {
        corner.set(x, y, .025).applyMatrix4(matrix).project(camera);
        const px = (corner.x + 1) * container.clientWidth / 2;
        const py = (1 - corner.y) * container.clientHeight / 2;
        left = Math.min(left, px); right = Math.max(right, px); top = Math.min(top, py); bottom = Math.max(bottom, py);
      }
      sheet.screen = { left, top, right, bottom };
      // A small buffer keeps hover stable as the physical paper lifts.
      sheet.link.style.setProperty('--doc-x', `${left - 7}px`);
      sheet.link.style.setProperty('--doc-y', `${top - 7}px`);
      sheet.link.style.setProperty('--doc-w', `${right - left + 14}px`);
      sheet.link.style.setProperty('--doc-h', `${bottom - top + 14}px`);
      sheet.link.style.setProperty('--doc-visibility', sheet.release.value > .95 ? 'visible' : 'hidden');
    }
  }

  return { update, project,
    status: () => sheets.map(s => ({ key: s.key, progress: s.progress, hover: s.hover, position: s.object.position.toArray(), screen: s.screen })),
    dispose() { disposed = true; edgeGeometry.dispose(); faceGeometry.dispose(); for (const sheet of sheets) { scene.remove(sheet.object); sheet.texture.dispose(); sheet.faceMaterial.dispose(); sheet.edgeMaterial.dispose(); } },
  };
}
