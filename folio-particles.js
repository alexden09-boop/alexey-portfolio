import * as THREE from 'three';

// Three silhouettes per edition, on one small atlas and in one draw call.
function makeAtlas(edition) {
  const cell = 96;
  const canvas = document.createElement('canvas');
  canvas.width = cell * 3;
  canvas.height = cell;
  const ink = canvas.getContext('2d');
  function stroke(points) {
    ink.beginPath();
    ink.moveTo(...points[0]);
    for (const point of points.slice(1)) ink.lineTo(...point);
    ink.stroke();
  }
  for (let variant = 0; variant < 3; variant++) {
    ink.save();
    ink.translate(cell * (variant + 0.5), cell / 2);
    if (edition === '3d') {
      ink.strokeStyle = ['#f0f9ff', '#cae1f6', '#fffaff'][variant];
      ink.lineWidth = variant === 2 ? 6 : 4.4;
      ink.lineCap = 'round';
      for (let arm = 0; arm < 6; arm++) {
        stroke([
          [0, 0],
          [0, -34],
        ]);
        stroke([
          [-8, -26],
          [0, -17],
          [8, -26],
        ]);
        if (variant === 0)
          stroke([
            [-6, -32],
            [0, -26],
            [6, -32],
          ]);
        ink.rotate(Math.PI / 3);
      }
    } else if (edition === 'sites') {
      ink.strokeStyle = ['#a8d6da', '#efe2bf', '#a3bfcf'][variant];
      ink.lineWidth = 6;
      if (variant === 0) {
        stroke([
          [-22, 0],
          [22, 0],
        ]);
        stroke([
          [0, -22],
          [0, 22],
        ]);
      } else if (variant === 1)
        stroke([
          [-21, -19],
          [-21, 18],
          [20, 18],
        ]);
      else {
        stroke([
          [-31, 0],
          [28, 0],
        ]);
        stroke([
          [18, -9],
          [18, 9],
        ]);
      }
    } else if (edition === 'ads') {
      ink.fillStyle = ['#efcb91', '#b45d43', '#66392f'][variant];
      ink.beginPath();
      ink.moveTo(-24, 5);
      ink.lineTo(-7, -14 - variant * 2);
      ink.lineTo(27, -7);
      ink.lineTo(10, 11);
      ink.lineTo(-21, 16);
      ink.fill();
    } else {
      ink.fillStyle = ['#b7e1cd', '#eadfb7', '#7ca89c'][variant];
      if (variant === 0) {
        ink.strokeStyle = ink.fillStyle;
        ink.lineWidth = 7;
        ink.strokeRect(-19, -19, 38, 38);
      } else {
        ink.fillRect(-17, -17, 34, 34);
        if (variant === 2) ink.clearRect(2, -17, 15, 13);
      }
    }
    ink.restore();
  }
  const atlas = new THREE.CanvasTexture(canvas);
  atlas.colorSpace = THREE.SRGBColorSpace;
  return atlas;
}

export function createLeafParticles(edition, width, height, surfaceZ, edgeAt) {
  const snow = edition === '3d',
    pixels = edition === 'apps',
    foil = edition === 'ads';
  const count = snow ? 49 : pixels ? 30 : 36;
  const geometry = new THREE.BufferGeometry();
  const origin = [],
    drift = [],
    grid = [],
    life = [],
    style = [];
  let seed = 271 + edition.charCodeAt(0);
  const random = () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < count; i++) {
    const second = i % 3 !== 0;
    // The first wave rides the two turning leaves. A second wave lifts directly
    // from the newly exposed print, where the frost or coloured ink develops.
    const fromPrint = i % 5 < 3;
    const birth = fromPrint ? 0.44 + random() * 0.27 : (second ? 0.39 : 0.27) + random() * 0.2;
    const edge = edgeAt(second, birth);
    const phase = THREE.MathUtils.smoothstep(birth, 0.4, 0.81);
    const printX = snow ? Math.min(0.94, Math.max(0.03, phase * 1.55 - 0.09)) : 0.25 + 0.54 * random();
    const x = fromPrint ? width * (printX - 0.5) : edge.x - width / 2;
    const y =
      (random() - (foil && fromPrint ? 0.27 : 0.46)) * height * (fromPrint && !snow ? 0.6 : 0.92);
    origin.push(x, y, surfaceZ + (fromPrint ? 0.014 : edge.z + 0.009));
    const side = Math.sign(x) || 1;
    drift.push(
      side * width * (fromPrint ? 0.08 + 0.23 * random() : 0.22 + 0.52 * random()),
      height * ((snow ? 0.22 : 0.04) + 0.45 * random()),
      0.065 + random() * 0.19
    );
    grid.push(
      width * (0.03 + (i % 6) * 0.07),
      height * (0.27 + Math.floor(i / 6) * 0.048),
      surfaceZ + 0.15
    );
    life.push(birth, (snow ? 0.37 : 0.29) + random() * 0.13);
    const diameter = (snow ? 0.038 : 0.031) + random() ** 2 * (snow ? 0.032 : 0.027);
    style.push(diameter, random() * Math.PI * 2, i % 3, random());
  }
  for (const [name, values, size] of [
    ['position', origin, 3],
    ['drift', drift, 3],
    ['socket', grid, 3],
    ['life', life, 2],
    ['style', style, 4],
  ])
    geometry.setAttribute(name, new THREE.Float32BufferAttribute(values, size));
  const atlas = makeAtlas(edition);
  const uniforms = {
    atlas: { value: atlas },
    time: { value: 0 },
    focal: { value: 1 },
    dpr: { value: 1 },
    snow: { value: Number(snow) },
    pixels: { value: Number(pixels) },
    foil: { value: Number(foil) },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    toneMapped: false,
    vertexShader: `
      attribute vec3 drift, socket;
      attribute vec2 life;
      attribute vec4 style;
      uniform float time, focal, dpr, snow, pixels, foil;
      varying float alpha, angle, tile, glint;
      void main() {
        float age = clamp((time - life.x) / life.y, 0., 1.);
        float arc = sin(3.14159 * age);
        vec3 p = position + drift * (age * (1.65 - .65 * age));
        p.x += sin(age * 5. + style.y) * arc * (.035 + snow * .06);
        p.y -= age * age * (.18 + snow * .42);
        p.z += .12 * arc;
        float snap = pixels * smoothstep(.36, .76, age);
        p = mix(p, socket, snap);
        angle = (style.y + age * (style.w - .5) * (3. + foil * 8.)) * (1. - snap);
        tile = style.z;
        glint = .75 + .25 * cos(style.y + age * (2. + foil * 8.));
        alpha = smoothstep(0., .17, age) * (1. - smoothstep(.68, 1., age));
        vec4 view = modelViewMatrix * vec4(p, 1.);
        gl_Position = projectionMatrix * view;
        gl_PointSize = dpr * clamp(style.x * focal / max(.09, -view.z), 5., 23.);
      }`,
    fragmentShader: `
      uniform sampler2D atlas;
      varying float alpha, angle, tile, glint;
      void main() {
        vec2 uv = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * (gl_PointCoord - .5) + .5;
        if (min(uv.x,uv.y) < 0. || max(uv.x,uv.y) > 1.) discard;
        vec4 ink = texture2D(atlas, vec2((tile + uv.x) / 3., uv.y));
        if (ink.a * alpha < .015) discard;
        gl_FragColor = vec4(ink.rgb * glint, ink.a * alpha * .94);
        #include <colorspace_fragment>
      }`,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  return {
    points,
    update(t, focal, dpr) {
      uniforms.time.value = t;
      uniforms.focal.value = focal;
      uniforms.dpr.value = dpr;
    },
    dispose() {
      geometry.dispose();
      material.dispose();
      atlas.dispose();
    },
  };
}
