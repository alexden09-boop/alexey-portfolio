import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { createCabinet } from './cabinet.js';
import { createBooks } from './documents.js';
import { makeFolioFilm } from './folio-film.js';

export async function createSculpture(state, choreography) {
  const container = document.querySelector('#scene');
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('webgl2', {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  if (!context) {
    container.dataset.renderer = 'fallback';
    return null;
  }
  container.classList.toggle('archive-loading', !state.paused);
  const loader = new GLTFLoader();
  const [furniture, library, studio, bindingGrain] = await Promise.all([
    loader.loadAsync('assets/archive/cabinet.glb'),
    loader.loadAsync('assets/archive/volumes.glb?v=2'),
    new HDRLoader().loadAsync('assets/archive/studio.hdr'),
    new THREE.TextureLoader().loadAsync('assets/archive/binding-grain.webp'),
  ]);
  const renderer = new THREE.WebGLRenderer({ canvas, context, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.03;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  container.append(canvas);
  canvas.setAttribute('aria-hidden', 'true');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(29, 1, 0.1, 36);
  camera.position.set(0, 0.64, 10.5);
  camera.lookAt(0, -0.06, 0);
  const generator = new THREE.PMREMGenerator(renderer);
  const environment = generator.fromEquirectangular(studio);
  scene.environment = environment.texture;
  scene.environmentIntensity = 0.76;
  scene.environmentRotation.y = -0.65;
  studio.dispose();
  generator.dispose();

  const key = new THREE.DirectionalLight(0xffead7, 2.1);
  key.position.set(-3.8, 6, 4.2);
  key.castShadow = true;
  key.shadow.mapSize.setScalar(container.clientWidth > 600 ? 1024 : 512);
  Object.assign(key.shadow.camera, { left: -3.3, right: 3.3, top: 3.3, bottom: -3.3, near: 0.5, far: 16 });
  key.shadow.camera.updateProjectionMatrix();
  key.shadow.bias = -0.00045;
  key.shadow.normalBias = 0.018;
  key.shadow.radius = 2.8;
  const fill = new THREE.DirectionalLight(0xd8d9fa, 0.79);
  fill.position.set(4, 1.5, 2.6);
  const rim = new THREE.DirectionalLight(0xffce9a, 1.45);
  rim.position.set(2, 3, -3);
  scene.add(key, fill, rim);

  const group = new THREE.Group();
  scene.add(group);
  const stock = library.scene.children;
  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  bindingGrain.anisotropy = anisotropy;
  bindingGrain.wrapS = bindingGrain.wrapT = THREE.RepeatWrapping;
  library.scene.traverse((mesh) => {
    if (!mesh.isMesh) return;
    for (const texture of [mesh.material.map, mesh.material.normalMap, mesh.material.roughnessMap]) {
      if (texture) texture.anisotropy = anisotropy;
    }
  });
  const paper = stock[0].children.find((mesh) => mesh.material?.name.endsWith('_paper'))?.material;
  if (paper) {
    paper.color.setHex(0xdecda9);
    paper.onBeforeCompile = (shader) => {
      shader.vertexShader =
        'varying vec3 paperPoint;\n' +
        shader.vertexShader.replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\npaperPoint=position;'
        );
      shader.fragmentShader =
        'varying vec3 paperPoint;\n' +
        shader.fragmentShader.replace(
          '#include <color_fragment>',
          `#include <color_fragment>
        float layer = paperPoint.x * 9500. + .25 * sin(paperPoint.z * 148. + paperPoint.y * 41.);
        float fiber = .5 + .5*cos(layer);
        float lod = 1.-smoothstep(.6,3.,fwidth(layer));
        diffuseColor.rgb *= .93 - .19*fiber*lod - .045*cos(paperPoint.x*830.);
      `
        );
    };
  }
  const cabinet = createCabinet(furniture.scene, stock);
  group.add(cabinet.object);
  const shelfLight = new THREE.PointLight(0xffca8c, .42, 2.9, 2);
  shelfLight.position.set(0, .24, .94);
  group.add(shelfLight);
  const books = createBooks(group, camera, state, container, stock, bindingGrain);
  group.traverse((m) => {
    if (m.isMesh) {
      m.castShadow = true;
      m.receiveShadow = true;
    }
  });

  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = shadowCanvas.height = 128;
  const brush = shadowCanvas.getContext('2d');
  const fade = brush.createRadialGradient(64, 64, 2, 64, 64, 63);
  fade.addColorStop(0, '#000b');
  fade.addColorStop(0.42, '#0008');
  fade.addColorStop(1, '#0000');
  brush.fillStyle = fade;
  brush.fillRect(0, 0, 128, 128);
  const shadowMap = new THREE.CanvasTexture(shadowCanvas);
  const shadowGeometry = new THREE.PlaneGeometry(4.5, 2.2);
  const shadowMaterial = new THREE.MeshBasicMaterial({
    map: shadowMap,
    transparent: true,
    depthWrite: false,
  });
  const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
  shadow.position.set(0, -1.795, 0);
  shadow.rotation.x = -Math.PI / 2;
  scene.add(shadow);

  let filming = false;
  let lost = false,
    drag = 0;
  const entranceStart = state.time;
  let lastRender = -1;
  let elapsed = 0,
    lastInput = -10,
    oldX = 0,
    oldY = 0,
    oldDrag = 0,
    oldFocus = null;
  function render() {
    if (lost || filming) return;
    renderer.render(scene, camera);
    books.project();
    state.frames++;
  }
  function frame(dt) {
    if (lost || filming) return;
    if (
      state.tx !== oldX ||
      state.ty !== oldY ||
      state.dragRotation !== oldDrag ||
      state.heroFocus !== oldFocus
    ) {
      oldX = state.tx;
      oldY = state.ty;
      oldDrag = state.dragRotation;
      oldFocus = state.heroFocus;
      lastInput = state.time;
    }
    elapsed = Math.max(elapsed, state.paused ? 5.7 : state.time - entranceStart);
    // Only the gentle idle drift runs at half rate. Input and the flight use the normal render cadence.
    if (dt > 0 && elapsed > 5.65 && state.time - lastInput > 2.3 && state.time - lastRender < 1 / 30 - 0.001)
      return;
    lastRender = state.time;
    const ease = 1 - Math.exp(-dt * 2.8);
    state.x = THREE.MathUtils.lerp(state.x, state.tx, ease);
    state.y = THREE.MathUtils.lerp(state.y, state.ty, ease);
    drag = THREE.MathUtils.lerp(drag, state.dragRotation, ease);
    group.rotation.set(
      0.025 - state.y * 0.023,
      -0.2 + drag + state.x * 0.045 - (1 - choreography.arrival) * 0.07,
      -0.008
    );
    group.position.set(0, 0, 0);
    cabinet.update(elapsed, state.paused);
    books.update(elapsed, dt);
    render();
  }
  function resize() {
    if (filming) return;
    const width = container.clientWidth,
      height = container.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    const aspect = width / height;
    const span = Math.max(4.3, 6.35 / aspect);
    camera.aspect = aspect;
    camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(span / (2 * camera.position.z)));
    camera.updateProjectionMatrix();
    frame(0);
  }
  function bounds() {
    const box = new THREE.Box3().setFromObject(cabinet.object);
    const corner = new THREE.Vector3();
    let left = Infinity,
      right = -Infinity,
      top = -Infinity,
      bottom = Infinity;
    for (const x of [box.min.x, box.max.x])
      for (const y of [box.min.y, box.max.y])
        for (const z of [box.min.z, box.max.z]) {
          corner.set(x, y, z).project(camera);
          left = Math.min(left, corner.x);
          right = Math.max(right, corner.x);
          top = Math.max(top, corner.y);
          bottom = Math.min(bottom, corner.y);
        }
    return { left, right, top, bottom };
  }
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    lost = true;
    container.classList.remove('ready');
    container.dataset.renderer = 'fallback';
  });
  canvas.addEventListener('webglcontextrestored', () => {
    lost = false;
    resize();
    container.classList.add('ready');
    container.dataset.renderer = 'webgl';
  });
  const observer = new ResizeObserver(resize);
  observer.observe(container);
  container.addEventListener('pointerdown', (event) => {
    if (state.paused || event.pointerType === 'touch' || event.target.closest('a')) return;
    state.dragging = true;
    state.dragStart = event.clientX;
    container.setPointerCapture(event.pointerId);
  });
  container.addEventListener('pointermove', (event) => {
    if (!state.dragging) return;
    state.dragRotation = THREE.MathUtils.clamp(
      state.dragRotation + (event.clientX - state.dragStart) * 0.0015,
      -0.17,
      0.22
    );
    state.dragStart = event.clientX;
  });
  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture'])
    container.addEventListener(event, () => {
      state.dragging = false;
    });
  resize();
  container.classList.remove('archive-loading');
  container.classList.add('ready');
  container.dataset.renderer = 'webgl';
  return {
    resize,
    render,
    frame,
    bounds,
    documentStatus: books.status,
    openFolio(key, host) {
      const book = books.find(key);
      if (filming || lost || !book || book.progress < .5) return null;
      filming = true;
      try {
        const film = makeFolioFilm({ renderer, scene, camera, container, book, host });
        return {
          frame: film.frame,
          dispose() {
            film.dispose();
            filming = false;
            resize();
          },
        };
      } catch (error) {
        book.body.visible = true;
        book.hinge.value = 0;
        renderer.shadowMap.enabled = true;
        container.append(canvas);
        container.querySelector('.folio-snapshot')?.remove();
        filming = false;
        resize();
        throw error;
      }
    },
    dispose() {
      observer.disconnect();
      books.dispose();
      bindingGrain.dispose();
      key.shadow.dispose();
      const materials = new Set(),
        geometries = new Set(),
        textures = new Set();
      for (const root of [furniture.scene, library.scene])
        root.traverse((mesh) => {
          if (!mesh.isMesh) return;
          geometries.add(mesh.geometry);
          materials.add(mesh.material);
        });
      for (const material of materials) {
        for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
        material.dispose();
      }
      for (const geometry of geometries) geometry.dispose();
      for (const texture of textures) texture.dispose();
      shadowMap.dispose();
      shadowGeometry.dispose();
      shadowMaterial.dispose();
      environment.dispose();
      renderer.dispose();
    },
  };
}
