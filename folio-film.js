import * as THREE from 'three';
import { createImprint, primeIce } from './folio-print.js';
import { createLeafParticles } from './folio-particles.js';

const { smoothstep, smootherstep, lerp } = THREE.MathUtils;
const divisions = 32;
const turnAt = (second, t) => (second ? smoothstep(t, 0.34, 0.68) : smoothstep(t, 0.24, 0.56));
const curlAt = (turn) => 0.98 * Math.sin(Math.PI * turn);

// Integrate the sheet tangent across its width. The fore edge follows the spine
// without stretching; the arc peaks midway through the turn and relaxes flat.
function traceLeaf(width, angle, curl, visit) {
  let x = 0,
    z = 0;
  const tangent = (u) => angle + curl * (0.32 + 0.84 * Math.sin(Math.PI * u) - u);
  for (let i = 0; i <= divisions; i++) {
    if (i) {
      const mid = tangent((i - 0.5) / divisions);
      x += (Math.cos(mid) * width) / divisions;
      z += (Math.sin(mid) * width) / divisions;
    }
    visit?.(i, x, z, tangent(i / divisions));
  }
  return { x, z };
}

function makeLeaf(width, height, material) {
  const geometry = new THREE.PlaneGeometry(width, height, divisions, 1);
  const pos = geometry.attributes.position,
    norm = geometry.attributes.normal;
  pos.setUsage(THREE.DynamicDrawUsage);
  norm.setUsage(THREE.DynamicDrawUsage);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  function bend(angle, curl) {
    traceLeaf(width, angle, curl, (i, x, z, theta) => {
      for (let row = 0; row < 2; row++) {
        const j = i + row * (divisions + 1);
        pos.setXYZ(j, x, (0.5 - row) * height, z);
        norm.setXYZ(j, -Math.sin(theta), 0, Math.cos(theta));
      }
    });
    pos.needsUpdate = norm.needsUpdate = true;
  }
  return { mesh, bend, dispose: () => geometry.dispose() };
}

export function makeFolioFilm({ renderer, scene, camera, container, book, host }) {
  const canvas = renderer.domElement;
  const snapshot = document.createElement('canvas');
  snapshot.className = 'folio-snapshot';
  snapshot.width = canvas.width;
  snapshot.height = canvas.height;
  snapshot.setAttribute('aria-hidden', 'true');
  // Snapshot the shelf with the selected volume removed before handing its renderer to the film.
  book.body.visible = false;
  renderer.render(scene, camera);
  snapshot.getContext('2d').drawImage(canvas, 0, 0);
  container.append(snapshot);
  const stage = new THREE.Scene();
  stage.environment = scene.environment;
  stage.environmentIntensity = scene.environmentIntensity;
  stage.environmentRotation.copy(scene.environmentRotation);
  const cameraFilm = new THREE.PerspectiveCamera(40, 1, 0.025, 50);
  const volume = book.body.clone(true);
  volume.visible = true;
  stage.add(volume);
  const clipping = new THREE.Matrix4().multiplyMatrices(
    camera.matrixWorldInverse,
    book.body.matrixWorld
  );
  const start = new THREE.Vector3(),
    rotation = new THREE.Quaternion(),
    scale = new THREE.Vector3();
  clipping.decompose(start, rotation, scale);
  const key = new THREE.DirectionalLight(0xffebd2, 1.85);
  key.position.set(-3, 4, 5);
  const fill = new THREE.DirectionalLight(0xd7d9f1, 0.85);
  fill.position.set(3, 1, 4);
  stage.add(key, fill);
  const imprint = createImprint(book.key);
  const lining = new THREE.MeshStandardMaterial({
    map: imprint.lining,
    roughness: 0.9,
    side: THREE.DoubleSide,
  });
  const print = new THREE.MeshBasicMaterial({ map: imprint.face, toneMapped: false });
  // As the camera passes through the icy paper, its image adopts the destination camera's framing.
  let iceTexture;
  const screenSize = new THREE.Vector2(1, 1),
    iceAspect = { value: 1 },
    iceMix = { value: 0 };
  if (book.key === '3d') {
    iceTexture = new THREE.Texture(primeIce());
    iceTexture.colorSpace = THREE.SRGBColorSpace;
    print.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, {
        iceFrame: { value: iceTexture },
        screenSize: { value: screenSize },
        iceAspect,
        iceMix,
      });
      shader.fragmentShader =
        'uniform sampler2D iceFrame; uniform vec2 screenSize; uniform float iceAspect,iceMix;\n' +
        shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <map_fragment>',
        `#include <map_fragment>
        vec2 uvScreen=gl_FragCoord.xy/screenSize;
        float ratio=screenSize.x/(screenSize.y*iceAspect);
        vec2 uvPhoto=(uvScreen-.5)*vec2(min(1.,ratio),min(1.,1./ratio))+.5;
        diffuseColor.rgb=mix(diffuseColor.rgb,texture2D(iceFrame,uvPhoto).rgb,iceMix);`
      );
    };
  }
  const blank = new THREE.MeshStandardMaterial({
    color: 0xeee5d0,
    roughness: 0.91,
    side: THREE.DoubleSide,
  });
  const { width: w, height: h, depth } = book;
  const leafWidth = w * 0.95,
    leafHeight = h * 0.97;
  const liningLeaf = makeLeaf(leafWidth, leafHeight, lining);
  const first = makeLeaf(leafWidth, leafHeight, lining),
    second = makeLeaf(leafWidth, leafHeight, blank);
  const base = new THREE.Mesh(new THREE.PlaneGeometry(leafWidth, leafHeight), print);
  base.position.set(0.008, 0, depth * 0.51 + 0.0007);
  volume.add(base);
  for (const [i, l] of [second, first, liningLeaf].entries()) {
    l.mesh.position.set(base.position.x - leafWidth / 2, 0, depth * 0.51 + 0.002 + i * 0.0025);
    volume.add(l.mesh);
  }
  const motes = createLeafParticles(book.key, leafWidth, leafHeight, base.position.z, (second, t) => {
    const turn = turnAt(second, t);
    return traceLeaf(leafWidth, 2.96 * turn, curlAt(turn));
  });
  motes.points.position.x = base.position.x;
  volume.add(motes.points);
  volume.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = false;
      o.receiveShadow = false;
    }
  });
  const oldShadows = renderer.shadowMap.enabled;
  const originalRatio = renderer.getPixelRatio();
  renderer.shadowMap.enabled = false;
  host.append(canvas);
  const originalBox = container.getBoundingClientRect();
  const focal = originalBox.height / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
  let vw = 0,
    vh = 0;
  const viewTarget = new THREE.Vector3(),
    finalRotation = new THREE.Quaternion(),
    artPoint = new THREE.Vector3();
  const slant = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.07, -0.1, 0.024));
  function frame(t) {
    const width = host.clientWidth,
      height = host.clientHeight;
    if (width !== vw || height !== vh) {
      vw = width;
      vh = height;
      const ratio = Math.min(originalRatio, Math.max(1, Math.sqrt(2400000 / (vw * vh))));
      if (renderer.getPixelRatio() !== ratio) renderer.setPixelRatio(ratio);
      renderer.setSize(vw, vh, false);
    }
    const approach = smootherstep(t, 0, 0.52),
      dive = smootherstep(t, 0.59, 0.91);
    cameraFilm.aspect = vw / vh;
    cameraFilm.fov = THREE.MathUtils.radToDeg(2 * Math.atan(vh / (2 * focal)));
    cameraFilm.updateProjectionMatrix();
    // Reproduce the original camera's principal point in viewport coordinates.
    cameraFilm.projectionMatrix.elements[8] =
      (1 - (2 * (originalBox.left + originalBox.width / 2)) / vw) * (1 - approach);
    cameraFilm.projectionMatrix.elements[9] =
      ((2 * (originalBox.top + originalBox.height / 2)) / vh - 1) * (1 - approach);
    const spreadScale = Math.min((vw * 0.8) / (2 * w), (vh * 0.67) / h);
    const close = focal / spreadScale,
      through = (focal / Math.max(vw / leafWidth, vh / leafHeight)) * 0.91 + base.position.z;
    viewTarget.set(lerp(w * 0.43, 0, dive), lerp(0.015, 0, dive), -lerp(close, through, dive));
    volume.position.lerpVectors(start, viewTarget, approach);
    volume.quaternion.slerpQuaternions(rotation, slant, approach).slerp(finalRotation, dive);
    volume.scale.copy(scale);
    const lid = 2.98 * smootherstep(t, 0.1, 0.51);
    book.hinge.value = lid;
    volume.updateMatrixWorld(true);
    base.visible = t > 0.13;
    liningLeaf.mesh.visible = t > 0.19;
    liningLeaf.bend(lid, 0);
    for (const l of [first, second]) {
      const turn = turnAt(l === second, t);
      l.mesh.visible = t > 0.16 && turn < 0.999;
      l.bend(turn * 2.96, curlAt(turn));
    }
    motes.update(t, focal, renderer.getPixelRatio());
    imprint.update(smoothstep(t, 0.4, 0.81));
    if (iceTexture?.image.naturalWidth) {
      if (iceTexture.version === 0) iceTexture.needsUpdate = true;
      renderer.getDrawingBufferSize(screenSize);
      iceAspect.value = iceTexture.image.naturalWidth / iceTexture.image.naturalHeight;
      iceMix.value = smootherstep(t, 0.66, 0.87);
    }
    renderer.render(stage, cameraFilm);
    artPoint
      .set(-w * 0.32, -h * 0.17, base.position.z + 0.008)
      .applyMatrix4(volume.matrixWorld)
      .project(cameraFilm);
    return {
      x: ((1 + artPoint.x) * vw) / 2,
      y: ((1 - artPoint.y) * vh) / 2,
      scale: Math.min(1.25, (focal * w) / Math.max(0.1, -volume.position.z) / 440),
    };
  }
  function dispose() {
    book.hinge.value = 0;
    book.body.visible = true;
    renderer.shadowMap.enabled = oldShadows;
    renderer.shadowMap.needsUpdate = true;
    if (renderer.getPixelRatio() !== originalRatio) renderer.setPixelRatio(originalRatio);
    container.append(canvas);
    snapshot.remove();
    for (const l of [first, second, liningLeaf]) l.dispose();
    base.geometry.dispose();
    lining.dispose();
    print.dispose();
    blank.dispose();
    imprint.dispose();
    iceTexture?.dispose();
    motes.dispose();
  }
  return { frame, dispose };
}
