import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createDocuments } from './documents.js';
const $ = s => document.querySelector(s);

export function createSculpture(state, choreography) {
  const container = $('#scene');
  let renderer;
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2', { antialias: true, alpha: true, powerPreference: 'high-performance' });
    if (!context) { container.dataset.renderer = 'fallback'; return null; }
    renderer = new THREE.WebGLRenderer({ canvas, context, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    container.dataset.renderer = 'fallback';
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.append(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 40);
  camera.position.set(0, .15, 8.8);
  camera.lookAt(0, 0, 0);
  const environment = new RoomEnvironment();
  const lilacPanel = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color('#867398').multiplyScalar(2.3), side: THREE.DoubleSide }));
  lilacPanel.position.set(-6, 3, -3);
  lilacPanel.rotation.y = Math.PI / 3;
  environment.add(lilacPanel);
  const warmPanel = new THREE.Mesh(new THREE.PlaneGeometry(5, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffb58d').multiplyScalar(1.8), side: THREE.DoubleSide }));
  warmPanel.position.set(6, 1, 0);
  warmPanel.rotation.y = -Math.PI / 2;
  environment.add(warmPanel);
  const generator = new THREE.PMREMGenerator(renderer);
  const envTarget = generator.fromScene(environment, .04);
  scene.environment = envTarget.texture;
  scene.environmentIntensity = .85;
  environment.dispose();
  generator.dispose();

  const keyLight = new THREE.DirectionalLight(0xf8edff, 3.4);
  keyLight.position.set(-3, 5, 4);
  scene.add(keyLight);
  const rim = new THREE.DirectionalLight(0xc4b9df, 3.2);
  rim.position.set(4, -1, -4);
  scene.add(rim);

  const group = new THREE.Group();
  scene.add(group);
  // Alexey's initial, built as a machined stack rather than a stock primitive.
  const shape = new THREE.Shape();
  shape.moveTo(-1.52, -1.65); shape.lineTo(-.34, 1.65); shape.lineTo(.34, 1.65);
  shape.lineTo(1.52, -1.65); shape.lineTo(.8, -1.65); shape.lineTo(.49, -.72);
  shape.lineTo(-.49, -.72); shape.lineTo(-.8, -1.65); shape.closePath();
  const aperture = new THREE.Path();
  aperture.moveTo(-.35, -.08); aperture.lineTo(.35, -.08); aperture.lineTo(0, 1.02); aperture.closePath();
  shape.holes.push(aperture);
  const brushedCanvas = document.createElement('canvas');
  brushedCanvas.width = 512; brushedCanvas.height = 256;
  const brush = brushedCanvas.getContext('2d');
  brush.fillStyle = '#888'; brush.fillRect(0, 0, 512, 256);
  for (let y = 0; y < 256; y++) {
    const shade = 115 + ((y * 37 + y * y) % 35);
    brush.fillStyle = `rgb(${shade},${shade},${shade})`; brush.fillRect(0, y, 512, 1);
  }
  const brushed = new THREE.CanvasTexture(brushedCanvas);
  brushed.wrapS = brushed.wrapT = THREE.RepeatWrapping; brushed.repeat.set(1, 3);
  const silver = new THREE.MeshPhysicalMaterial({ color: 0xb8bec5, metalness: .9, roughness: .3, clearcoat: .22, bumpMap: brushed, bumpScale: .006 });
  const graphite = new THREE.MeshStandardMaterial({ color: 0x34333a, metalness: .78, roughness: .32 });
  const copper = new THREE.MeshStandardMaterial({ color: 0xc58a69, metalness: .83, roughness: .26 });
  const edges = new THREE.MeshStandardMaterial({ color: 0xc9cbd0, metalness: 1, roughness: .18 });
  const capGeometry = new THREE.ExtrudeGeometry(shape, { depth: .13, bevelEnabled: true, bevelSegments: 4, steps: 1, bevelSize: .045, bevelThickness: .04, curveSegments: 8 });
  const plateGeometry = new THREE.ExtrudeGeometry(shape, { depth: .036, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: .012, bevelThickness: .01, curveSegments: 8 });
  const layers = [];
  const accentMaterials = [];
  const layerModes = { 2: '3d', 4: 'sites', 8: 'ads', 12: 'apps' };
  for (let index = 0; index < 16; index++) {
    const cap = index === 0 || index === 15;
    let surface = index === 15 ? silver : index === 0 ? copper : graphite;
    if (layerModes[index]) { surface = copper.clone(); surface.emissive.setHex(0xe5a880); surface.emissiveIntensity = 0; accentMaterials.push(surface); }
    const mesh = new THREE.Mesh(cap ? capGeometry : plateGeometry, [surface, cap ? edges : surface]);
    const depth = (index - 7.5) * .085;
    mesh.position.z = depth;
    group.add(mesh); layers.push({ mesh, depth, index, surface, mode: layerModes[index], highlight: 0 });
  }
  const shadowCanvas = document.createElement('canvas'); shadowCanvas.width = shadowCanvas.height = 128;
  const shadowContext = shadowCanvas.getContext('2d');
  const gradient = shadowContext.createRadialGradient(64, 64, 1, 64, 64, 64);
  gradient.addColorStop(0, '#0009'); gradient.addColorStop(1, '#0000');
  shadowContext.fillStyle = gradient; shadowContext.fillRect(0, 0, 128, 128);
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  const shadowMaterial = new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false, opacity: .55 });
  const shadowGeometry = new THREE.PlaneGeometry(5, 3.3);
  const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = -2.05; scene.add(shadow);
  const documents = createDocuments(scene, camera, group, state, container,
    new Map(layers.filter(layer => layer.mode).map(layer => [layer.mode, layer.mesh])));

  let contextLost = false;
  let baseScale = 1.1;
  const view = { drag: 0 };
  renderer.domElement.addEventListener('webglcontextlost', event => {
    event.preventDefault();
    contextLost = true;
    container.classList.remove('ready');
    container.dataset.renderer = 'fallback';
  });
  renderer.domElement.addEventListener('webglcontextrestored', () => {
    contextLost = false;
    container.classList.add('ready');
    container.dataset.renderer = 'webgl';
    render();
  });

  function resize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    baseScale = (width < 650 ? .82 : .96) * Math.min(1, camera.aspect);
    camera.position.z = width < 650 ? 7.6 : 8.8;
    frame(0);
  }
  function render() {
    if (contextLost || state.concept === 'impulse') return;
    renderer.render(scene, camera);
    documents.project();
    state.frames++;
  }
  function bounds() {
    group.updateWorldMatrix(true, true);
    camera.updateMatrixWorld();
    const box = new THREE.Box3().setFromObject(group);
    const points = [];
    for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) points.push(new THREE.Vector3(x, y, z).project(camera));
    return { left: Math.min(...points.map(p => p.x)), right: Math.max(...points.map(p => p.x)), top: Math.max(...points.map(p => p.y)), bottom: Math.min(...points.map(p => p.y)) };
  }
  function frame(dt) {
    const t = state.time;
    const combined = state.concept === 'hybrid';
    const arrival = combined ? choreography.arrival : 1;
    const smooth = 1 - Math.exp(-dt * 1.8);
    state.x += (state.tx - state.x) * smooth;
    state.y += (state.ty - state.y) * smooth;
    // Damped inputs and a capped drag speed keep sudden pointer/scroll changes gentle.
    view.drag += THREE.MathUtils.clamp((state.dragRotation - view.drag) * smooth, -dt * .6, dt * .6);
    const breathing = (1 - Math.cos(t * .48)) * .5;
    group.rotation.y = -.48 + state.x * .1 + view.drag + Math.sin(t * .19) * .09 + (1 - arrival) * -.16;
    group.rotation.x = .10 - state.y * .065 + Math.sin(t * .23) * .025;
    group.rotation.z = -.10 + Math.sin(t * .16) * .018;
    for (const layer of layers) {
      const target = layer.mode && layer.mode === state.heroFocus ? 1 : 0;
      layer.highlight += (target - layer.highlight) * (state.paused ? 1 : 1 - Math.exp(-dt * 5));
      layer.mesh.position.z = layer.depth * (1 + breathing * .42 + (1 - arrival) * 1.5) + layer.highlight * .28;
      layer.mesh.position.x = Math.sin(layer.index * .4) * (1 - arrival) * .3 + layer.highlight * .22;
      if (layer.mode) layer.surface.emissiveIntensity = layer.highlight * .5;
      layer.mesh.rotation.z = (layer.index - 7.5) * (1 - arrival) * .012;
    }
    group.scale.setScalar(baseScale * (.9 + arrival * .1));
    group.position.y = Math.sin(t * .3) * .045 - (1 - arrival) * .1;
    group.position.x = -.25;
    documents.update(dt);
    render();
  }

  const observer = new ResizeObserver(resize);
  observer.observe(container);
  container.addEventListener('pointerdown', event => {
    if (state.paused || event.pointerType === 'touch' || event.target.closest('a')) return;
    state.dragging = true;
    state.dragStart = event.clientX;
    container.setPointerCapture(event.pointerId);
  });
  container.addEventListener('pointermove', event => {
    if (!state.dragging) return;
    state.dragRotation = THREE.MathUtils.clamp(state.dragRotation + (event.clientX - state.dragStart) * .002, -.4, .65);
    state.dragStart = event.clientX;
  });
  for (const eventName of ['pointerup', 'pointercancel', 'lostpointercapture']) container.addEventListener(eventName, () => { state.dragging = false; });
  container.classList.add('ready');
  container.dataset.renderer = 'webgl';
  resize();
  frame(0);
  return { resize, render, frame, bounds, documentStatus: documents.status, dispose() { observer.disconnect(); documents.dispose(); capGeometry.dispose(); plateGeometry.dispose(); shadowGeometry.dispose(); for (const material of [silver, graphite, copper, edges, shadowMaterial, ...accentMaterials]) material.dispose(); brushed.dispose(); shadowTexture.dispose(); envTarget.dispose(); renderer.dispose(); } };
}

