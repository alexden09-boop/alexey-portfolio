import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// A self-authored product concept, reused across all three applications.
export function createProduct() {
  const container = document.querySelector('#study-scene');
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('webgl2', { antialias: true, alpha: true, powerPreference: 'low-power' });
  if (!context) { container.dataset.renderer = 'fallback'; return null; }
  const renderer = new THREE.WebGLRenderer({ canvas, context, antialias: true, alpha: true });
  // The assembly close-up magnifies this canvas before it settles into the miniature page.
  renderer.setPixelRatio(Math.min(2.5, Math.max(1.72, devicePixelRatio)));
  renderer.setClearColor(0, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .92;
  container.append(canvas);
  canvas.setAttribute('aria-hidden', 'true');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(33, 1, .1, 30);
  camera.position.set(0, .8, 6.7);
  camera.lookAt(0, 0, 0);
  const environment = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromScene(environment, .04);
  scene.environment = env.texture;
  scene.environmentIntensity = .65;
  environment.dispose();
  pmrem.dispose();
  const key = new THREE.DirectionalLight(0xffeadb, 3.5);
  key.position.set(-3, 5, 5);
  scene.add(key, new THREE.HemisphereLight(0xd8d5ec, 0x18151d, .85));
  const rim = new THREE.DirectionalLight(0xc1b4db, 4.5);
  rim.position.set(4, 2, -1);
  scene.add(rim);
  const product = new THREE.Group();
  scene.add(product);
  const aluminium = new THREE.MeshPhysicalMaterial({ color: 0x77747d, metalness: .88, roughness: .23, clearcoat: .35 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x343038, roughness: .55, metalness: .35 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x202024, roughness: .85 });
  const woven = document.createElement('canvas');
  woven.width = woven.height = 64;
  const ctx = woven.getContext('2d');
  ctx.fillStyle = '#414047'; ctx.fillRect(0, 0, 64, 64);
  for (let y = 0; y < 64; y += 8) for (let x = 0; x < 64; x += 8) {
    ctx.fillStyle = '#222126'; ctx.fillRect(x, y, 3, 4);
    ctx.fillStyle = '#64616a'; ctx.fillRect(x + 4, y + 4, 2, 3);
  }
  const weave = new THREE.CanvasTexture(woven);
  weave.wrapS = weave.wrapT = THREE.RepeatWrapping;
  weave.repeat.set(7, 11);
  const cloth = new THREE.MeshStandardMaterial({ color: 0x55515b, map: weave, bumpMap: weave, bumpScale: .025, roughness: .92 });
  function mesh(geometry, material, x = 0, y = 0, z = 0) {
    const object = new THREE.Mesh(geometry, material);
    object.position.set(x, y, z); product.add(object); return object;
  }
  // Each assembly travels along its real mounting axis. All coordinates are in product space.
  const assemblies = [];
  function movingPart(object, delta, start, end, turn = 0, axis = 'z') {
    assemblies.push({ object, home: object.position.clone(), delta, start, end, turn, axis, angle: object.rotation[axis] });
    return object;
  }
  const offset = (x, y, z) => new THREE.Vector3(x, y, z);
  const shell = mesh(new RoundedBoxGeometry(1.64, 2.56, 1.08, 6, .18), aluminium);
  movingPart(shell, offset(-.14, 0, -.34), .03, .35);
  const baffle = mesh(new RoundedBoxGeometry(1.48, 2.36, .13, 5, .14), darkMetal, 0, 0, .51);
  movingPart(baffle, offset(0, 0, .46), .18, .42);

  const graphite = new THREE.MeshStandardMaterial({ color: 0x252429, roughness: .71, metalness: .2, side: THREE.DoubleSide });
  const fasteners = new THREE.MeshStandardMaterial({ color: 0x87818a, roughness: .32, metalness: .85 });
  function frontPart(geometry, material, parent, x, y, z) {
    const object = new THREE.Mesh(geometry, material);
    object.position.set(x, y, z);
    parent.add(object);
    return object;
  }
  for (const [y, radius, start] of [[.52, .27, .22], [-.30, .45, .27]]) {
    const driver = new THREE.Group();
    driver.position.set(0, y, .568);
    product.add(driver);
    const diaphragm = frontPart(new THREE.ConeGeometry(radius, .15, 48, 1, true), graphite, driver, 0, 0, -.055);
    diaphragm.rotation.x = -Math.PI / 2;
    frontPart(new THREE.TorusGeometry(radius, .035, 8, 48), rubber, driver, 0, 0, .008);
    const cap = frontPart(new THREE.SphereGeometry(radius * .29, 24, 12), darkMetal, driver, 0, 0, -.022);
    cap.scale.z = .35;
    movingPart(driver, offset(0, .03, .85), start, start + .24);
  }
  for (const [index, [x, y]] of [[-.58, .96], [.58, .96], [-.58, -.96], [.58, -.96]].entries()) {
    const screw = new THREE.Group();
    screw.position.set(x, y, .567);
    product.add(screw);
    const head = frontPart(new THREE.CylinderGeometry(.04, .035, .024, 14), fasteners, screw, 0, 0, 0);
    head.rotation.x = Math.PI / 2;
    frontPart(new THREE.BoxGeometry(.043, .009, .004), rubber, screw, 0, 0, .013);
    movingPart(screw, offset(0, 0, 1.18), .35 + index * .025, .55 + index * .02, Math.PI * 2);
  }
  const grille = mesh(new RoundedBoxGeometry(1.36, 2.24, .06, 4, .12), cloth, 0, 0, .607);
  frontPart(new RoundedBoxGeometry(.18, .025, .012, 2, .006), fasteners, grille, 0, -.88, .034);
  movingPart(grille, offset(.04, .07, 1.66), .47, .72, .055);

  const knob = new THREE.Group();
  knob.position.set(.44, 1.315, .08);
  product.add(knob);
  frontPart(new THREE.CylinderGeometry(.22, .22, .105, 56), aluminium, knob, 0, 0, 0);
  const groove = frontPart(new THREE.TorusGeometry(.19, .009, 8, 48), darkMetal, knob, 0, .056, 0);
  groove.rotation.x = Math.PI / 2;
  frontPart(new THREE.BoxGeometry(.025, .007, .08), rubber, knob, 0, .057, .12);
  movingPart(knob, offset(0, .61, 0), .55, .77, 1.1, 'y');
  for (const x of [-.52, .52]) {
    const foot = mesh(new THREE.CylinderGeometry(.12, .12, .07, 24), rubber, x, -1.305, .19);
    movingPart(foot, offset(0, -.24, 0), .19, .43);
  }

  const wireMaterial = new THREE.LineBasicMaterial({ color: 0xc5afc5, transparent: true, opacity: .75, depthWrite: false });
  for (const object of [shell, baffle, grille]) {
    object.add(new THREE.LineSegments(new THREE.EdgesGeometry(object.geometry, 16), wireMaterial));
  }
  const materials = [aluminium, darkMetal, rubber, cloth, graphite, fasteners];
  for (const material of materials) material.transparent = true;
  const shadowCanvas = document.createElement('canvas'); shadowCanvas.width = shadowCanvas.height = 128;
  const shadowCtx = shadowCanvas.getContext('2d');
  const gradient = shadowCtx.createRadialGradient(64, 64, 2, 64, 64, 64);
  gradient.addColorStop(0, '#21152560'); gradient.addColorStop(1, '#21152500');
  shadowCtx.fillStyle = gradient; shadowCtx.fillRect(0, 0, 128, 128);
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 3), new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = -1.34; scene.add(shadow);
  let lost = false, previous = -1, current = 0, frames = 0;
  function frame(progress = current, force = false) {
    current = progress;
    if (lost || (!force && Math.abs(previous - progress) < .00005)) return;
    previous = progress;
    const smooth = (start, end) => THREE.MathUtils.smoothstep(progress, start, end);
    const materialAmount = smooth(.03, .24);
    wireMaterial.opacity = (1 - smooth(.12, .41)) * .72;
    for (const material of materials) {
      material.opacity = materialAmount;
      material.depthWrite = materialAmount > .5;
    }
    for (const part of assemblies) {
      const remaining = 1 - smooth(part.start, part.end);
      part.object.position.copy(part.home).addScaledVector(part.delta, remaining);
      part.object.rotation[part.axis] = part.angle + part.turn * remaining;
    }
    shadow.material.opacity = .8 * materialAmount;
    const finalAngle = smooth(.48, .93);
    product.rotation.set(.07 - .045 * finalAngle, -1.02 + .59 * finalAngle, -.025 + .014 * finalAngle);
    const lightPass = smooth(.54, .91);
    key.position.set(-3.4 + lightPass * 2.1, 5, 4.6);
    camera.position.set(0, 1.08 - .34 * finalAngle, 8.0 - 1.3 * finalAngle);
    camera.lookAt(0, .04, .46 * (1 - finalAngle));
    renderer.render(scene, camera); frames++;
  }
  function resize() {
    const width = container.clientWidth, height = container.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height; camera.updateProjectionMatrix();
    frame(current, true);
  }
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); lost = true; container.classList.remove('ready'); container.dataset.renderer = 'fallback'; });
  canvas.addEventListener('webglcontextrestored', () => { lost = false; container.classList.add('ready'); container.dataset.renderer = 'webgl'; frame(current, true); });
  const observer = new ResizeObserver(resize); observer.observe(container);
  container.classList.add('ready'); container.dataset.renderer = 'webgl'; resize();
  return { frame, resize, get frames() { return frames; }, dispose() { observer.disconnect(); product.traverse(object => object.geometry?.dispose()); for (const material of [...materials, wireMaterial]) material.dispose(); shadow.geometry.dispose(); shadow.material.dispose(); shadowTexture.dispose(); weave.dispose(); env.dispose(); renderer.dispose(); } };
}
