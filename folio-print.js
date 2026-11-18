import * as THREE from 'three';

const W = 720,
  H = 960;
const clamp = THREE.MathUtils.clamp;
export const iceImage = () => (matchMedia('(orientation: portrait)').matches ? 'portrait' : 'wide');
const iceFrames = new Map();
export function primeIce() {
  const key = iceImage();
  if (!iceFrames.has(key)) {
    const img = new Image();
    img.decoding = 'async';
    img.src = '3d/assets/images/entrance-' + key + '.webp';
    iceFrames.set(key, img);
  }
  return iceFrames.get(key);
}

function line(c, x, y, ex, ey) {
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(ex, ey);
  c.stroke();
}
function paperStock() {
  const tile = document.createElement('canvas');
  tile.width = tile.height = 160;
  const ctx = tile.getContext('2d'),
    pixels = ctx.createImageData(160, 160);
  let seed = 321;
  for (let i = 0; i < pixels.data.length; i += 4) {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    const tone = (seed / 4294967296 - 0.5) * 13;
    pixels.data[i] = 233 + tone;
    pixels.data[i + 1] = 224 + tone;
    pixels.data[i + 2] = 202 + tone;
    pixels.data[i + 3] = 255;
  }
  ctx.putImageData(pixels, 0, 0);
  return tile;
}
function spread(c, tile) {
  c.fillStyle = c.createPattern(tile, 'repeat');
  c.fillRect(0, 0, W, H);
  const fold = c.createLinearGradient(0, 0, W, 0);
  fold.addColorStop(0, '#62472844');
  fold.addColorStop(0.035, '#fff4cd22');
  fold.addColorStop(0.13, '#fff0');
  fold.addColorStop(1, '#66563f17');
  c.fillStyle = fold;
  c.fillRect(0, 0, W, H);
}
function web(c, t) {
  c.fillStyle = '#193345';
  c.fillRect(30, 34, 660, 892);
  c.save();
  c.translate(60, 85);
  c.strokeStyle = '#92adac80';
  c.lineWidth = 1;
  for (let x = 0; x <= 600; x += 24) line(c, x, 0, x, 675);
  for (let y = 0; y <= 675; y += 24) line(c, 0, y, 600, y);
  c.strokeStyle = '#e3dcbf';
  c.lineWidth = 2.5;
  for (let i = 0; i < 6; i++) {
    const r = 73 + i * 17,
      open = 1 - t;
    const half = r + t * (116 + i * 20 - r),
      base = 541;
    c.beginPath();
    c.moveTo(300 - half, base);
    c.lineTo(300 - half, 240);
    c.bezierCurveTo(
      300 - half,
      240 - open * r * 0.55 - t * 100,
      300 - open * r * 0.55,
      240 - r,
      300,
      240 - r
    );
    c.bezierCurveTo(
      300 + open * r * 0.55,
      240 - r,
      300 + half,
      240 - open * r * 0.55 - t * 100,
      300 + half,
      240
    );
    c.lineTo(300 + half, base);
    c.stroke();
  }
  c.globalAlpha = t;
  c.fillStyle = '#152932';
  c.fillRect(10, 275, 580, 391);
  c.strokeStyle = '#ccb68e';
  for (const x of [10, 198, 390, 590]) line(c, x, 257, x, 667);
  for (const y of [271, 362, 570, 666]) line(c, 10, y, 590, y);
  c.fillStyle = '#cdc8af';
  c.fillRect(32, 302, 119, 8);
  c.fillRect(32, 324, 88, 4);
  c.strokeRect(218, 386, 151, 150);
  c.strokeRect(411, 386, 151, 150);
  c.restore();
}
function press(c, t) {
  c.fillStyle = '#c87856';
  c.fillRect(28, 32, 664, 896);
  c.save();
  c.translate(360, 370);
  for (const [color, offset] of [
    ['#edba8e', 11],
    ['#672e2b', -4],
  ]) {
    c.save();
    c.translate(offset * (1.5 - t), 0);
    c.rotate((1 - t) * 0.17);
    c.fillStyle = color;
    c.globalAlpha = color === '#672e2b' ? t : 1;
    for (let i = 0; i < 40; i++) {
      c.rotate(Math.PI / 20);
      c.beginPath();
      c.moveTo(32, 0);
      c.bezierCurveTo(110, -9, 193, -72, 242, -16);
      c.quadraticCurveTo(158, -9, 32, 2);
      c.fill();
    }
    c.restore();
  }
  c.restore();
  c.strokeStyle = '#512f29';
  c.lineWidth = 2;
  for (const [x, y] of [
    [65, 72],
    [650, 72],
    [65, 880],
    [650, 880],
  ]) {
    line(c, x - 10, y, x + 10, y);
    line(c, x, y - 10, x, y + 10);
  }
  c.fillStyle = '#5b2e2b';
  for (let i = 0; i < 5; i++) c.fillRect(68 + i * 39, 796, 28, 31);
}
function interfaces(c, t) {
  c.fillStyle = '#24423e';
  c.fillRect(30, 34, 660, 892);
  for (let i = 0; i < 3; i++) {
    c.save();
    const offset = (i - 1) * (1 - t);
    c.translate(87 + offset * 43, 208 - offset * 76);
    c.transform(1, -0.22 * (1 - t), 0.28 * (1 - t), 1, 0, 0);
    c.fillStyle = i === 2 ? '#d9dcc6' : 'rgba(149,188,165,.72)';
    c.strokeStyle = '#e4dcb6';
    c.lineWidth = 3;
    c.fillRect(0, 0, 525, 370);
    c.strokeRect(0, 0, 525, 370);
    c.fillStyle = '#395950';
    c.fillRect(0, 0, 525, 48);
    for (let j = 0; j < 3; j++) {
      c.beginPath();
      c.arc(22 + j * 14, 24, 3, 0, 2 * Math.PI);
      c.fillStyle = '#d7d2b7';
      c.fill();
    }
    c.fillStyle = '#a5b4a0';
    c.fillRect(18, 69, 91, 279);
    for (let j = 0; j < 3; j++) {
      c.strokeStyle = '#819786';
      c.strokeRect(134, 80 + j * 80, 364, 54);
      c.fillStyle = '#829884';
      c.fillRect(156, 101 + j * 80, 181 - j * 24, 7);
    }
    c.restore();
  }
}
function ice(c, img, t) {
  const width = W * (t * 1.55 - 0.09),
    edge = (y) => width + 17 * Math.sin(y * 0.031) + 9 * Math.sin(y * 0.089);
  if (img?.complete && img.naturalWidth) {
    c.save();
    c.beginPath();
    c.moveTo(0, 0);
    for (let y = 0; y <= H; y += 8) c.lineTo(edge(y), y);
    c.lineTo(0, H);
    c.closePath();
    c.clip();
    const scale = Math.max(W / img.width, H / img.height);
    c.drawImage(
      img,
      (W - img.width * scale) / 2,
      (H - img.height * scale) / 2,
      img.width * scale,
      img.height * scale
    );
    c.restore();
  }
  c.save();
  c.lineCap = 'round';
  for (let i = 0; i < 19; i++) {
    const y = 23 + i * 51,
      x = edge(y),
      len = 25 + 24 * Math.sin(i * 7.1) ** 2;
    c.strokeStyle = '#c2e1e7';
    c.lineWidth = 1.8;
    line(c, x - 22, y, x + len, y - len * 0.55);
    for (let j = 1; j < 5; j++) {
      const a = x + (len * j) / 6,
        b = y - ((len * j) / 6) * 0.55;
      line(c, a, b, a + 2, b - 10);
      line(c, a, b, a + 10, b + 2);
    }
  }
  const glow = c.createLinearGradient(width - 52, 0, width + 50, 0);
  glow.addColorStop(0, '#c6e5ef00');
  glow.addColorStop(0.48, '#e3f7ff88');
  glow.addColorStop(1, '#efffff00');
  c.fillStyle = glow;
  c.fillRect(width - 52, 0, 102, H);
  c.restore();
}

export function createImprint(key) {
  const stock = paperStock();
  function surface() {
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    spread(ctx, stock);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    return { ctx, texture };
  }
  const lining = surface(),
    face = surface();
  // Endpapers carry a restrained printer's lattice that remains visible as each leaf bends.
  const c = lining.ctx;
  c.strokeStyle = '#9f927655';
  c.lineWidth = 1.6;
  for (let x = -H; x < W + H; x += 30) {
    line(c, x, 0, x + H, H);
    line(c, x, 0, x - H, H);
  }
  c.strokeStyle = '#a39579';
  c.strokeRect(34, 32, W - 68, H - 64);
  const img = key === '3d' ? primeIce() : null;
  const draw = { sites: web, ads: press, apps: interfaces };
  let last = -1;
  function update(value) {
    const step = Math.round(clamp(value, 0, 1) * 30);
    if (last === step) return;
    last = step;
    spread(face.ctx, stock);
    if (key === '3d') ice(face.ctx, img, step / 30);
    else draw[key](face.ctx, step / 30);
    face.texture.needsUpdate = true;
  }
  update(0);
  return {
    lining: lining.texture,
    face: face.texture,
    update,
    dispose() {
      lining.texture.dispose();
      face.texture.dispose();
    },
  };
}
