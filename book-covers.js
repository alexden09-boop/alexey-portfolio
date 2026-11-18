import * as THREE from 'three';

function line(c, x, y, ex, ey) {
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(ex, ey);
  c.stroke();
}
function ellipse(c, x, y, rx, ry) {
  c.beginPath();
  c.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
  c.stroke();
}

// Recessed arch with cut stone joints, fluted columns and a tiled floor.
function arcade(c) {
  const center = 320,
    spring = 293,
    foot = 411;
  for (let i = 0; i < 7; i++) {
    const r = 83 + i * 8;
    c.lineWidth = i === 6 ? 3 : 1.7;
    c.beginPath();
    c.moveTo(center - r, foot);
    c.lineTo(center - r, spring);
    c.arc(center, spring, r, Math.PI, Math.PI * 2);
    c.lineTo(center + r, foot);
    c.stroke();
  }
  for (let i = 1; i < 16; i++) {
    const a = Math.PI + (i * Math.PI) / 16,
      x = Math.cos(a),
      y = Math.sin(a);
    line(c, center + 96 * x, spring + 96 * y, center + 130 * x, spring + 130 * y);
  }
  for (const side of [-1, 1]) {
    const x = center + side * 108;
    for (const [y, w] of [
      [289, 61],
      [296, 56],
      [304, 50],
      [407, 52],
      [414, 61],
      [422, 69],
    ])
      line(c, x - w / 2, y, x + w / 2, y);
    for (let n = -2; n <= 2; n++) line(c, x + n * 6, 310, x + n * 6, 401);
  }
  c.lineWidth = 1.5;
  for (let n = -3; n <= 3; n++) line(c, center + n * 14, 378, center + n * 52, 451);
  for (const y of [381, 388, 398, 411, 428, 450])
    line(c, center - (y - 354) * 1.6, y, center + (y - 354) * 1.6, y);
}

// An engraved rosette. Alternating satin and polished facets catch the key light.
function rosette(c) {
  c.save();
  c.translate(320, 302);
  for (let i = 0; i < 32; i++) {
    c.rotate(Math.PI / 16);
    const reach = i % 4 === 0 ? 148 : i % 2 === 0 ? 127 : 108;
    c.fillStyle = i % 2 === 0 ? '#dedede' : '#909090';
    c.beginPath();
    c.moveTo(22, 0);
    c.quadraticCurveTo(61, -15, reach, 0);
    c.lineTo(65, 6);
    c.closePath();
    c.fill();
    c.strokeStyle = '#fafafa';
    c.lineWidth = 1.5;
    c.beginPath();
    c.moveTo(25, 0);
    c.quadraticCurveTo(68, 10, reach, 0);
    c.stroke();
  }
  c.strokeStyle = '#fff';
  c.lineWidth = 2;
  for (const r of [21, 27, 68, 88, 153]) ellipse(c, 0, 0, r, r);
  c.lineWidth = 1;
  for (let i = 0; i < 144; i++) {
    c.rotate(Math.PI / 72);
    line(c, 157, 0, i % 6 ? 161 : 165, 0);
  }
  c.restore();
}

function plates(c) {
  c.save();
  c.translate(320, 313);
  const diamond = (y, dy) => {
    c.beginPath();
    c.moveTo(-137, y - 4);
    c.lineTo(-4, y - 64);
    c.lineTo(137, y - 7);
    c.lineTo(7, y + 58 + dy);
    c.closePath();
  };
  for (let n = 0; n < 4; n++) {
    const y = 77 - n * 50;
    c.fillStyle = '#000';
    diamond(y, 7);
    c.fill();
    c.lineWidth = 2.8;
    c.stroke();
    diamond(y, 0);
    c.fill();
    c.stroke();
    c.lineWidth = 1.2;
    for (let j = 1; j < 21; j++) {
      const t = j / 21;
      line(c, -137 + 144 * t, y - 4 + 62 * t, -137 + 144 * t, y - 1 + 63 * t);
    }
    for (const [x, z] of [
      [-99, -4],
      [-4, -45],
      [100, -7],
      [7, 39],
    ])
      ellipse(c, x, y + z, 5, 2.3);
    if (n === 3) {
      for (let j = 0; j < 4; j++) {
        c.beginPath();
        c.moveTo(-80 + j * 14, y + 1 + j * 5);
        c.lineTo(-2 + j * 7, y - 33 + j * 9);
        c.lineTo(76 - j * 11, y - 2 + j * 6);
        c.stroke();
      }
    }
  }
  c.restore();
}

function torus(c) {
  const facets = [];
  function point(a, b) {
    const ca = Math.cos(a),
      sa = Math.sin(a),
      cb = Math.cos(b),
      sb = Math.sin(b);
    const x = (102 + 46 * cb) * ca,
      y = (102 + 46 * cb) * sa,
      z = 46 * sb;
    const v = 0.56 * y - 0.83 * z;
    return [320 + x * 0.91 - v * 0.42, 306 + x * 0.42 + v * 0.91, 0.83 * y + 0.56 * z];
  }
  for (let i = 0; i < 54; i++)
    for (let j = 0; j < 18; j++) {
      const a = (2 * Math.PI * i) / 54,
        b = (2 * Math.PI * j) / 18;
      const points = [
        point(a, b),
        point(a + (2 * Math.PI) / 54, b),
        point(a + (2 * Math.PI) / 54, b + (2 * Math.PI) / 18),
        point(a, b + (2 * Math.PI) / 18),
      ];
      facets.push({ points, depth: points.reduce((sum, p) => sum + p[2], 0) / 4 });
    }
  facets.sort((a, b) => a.depth - b.depth);
  c.fillStyle = '#000';
  c.lineJoin = 'round';
  for (const { points, depth } of facets) {
    c.beginPath();
    c.moveTo(...points[0].slice(0, 2));
    for (const v of points.slice(1)) c.lineTo(v[0], v[1]);
    c.closePath();
    c.fill();
    c.lineWidth = depth > 45 ? 2.5 : 1.65;
    c.strokeStyle = depth > 15 ? '#fff' : '#aaa';
    c.stroke();
  }
}

const engravings = { sites: arcade, ads: rosette, apps: plates, '3d': torus };
const foils = { sites: 0xe6cc9b, ads: 0xf3bd88, apps: 0xe7d6a6, '3d': 0xebd4bb };

function foilMask(title, key) {
  const canvas = document.createElement('canvas');
  canvas.width = 1280;
  canvas.height = 1712;
  const c = canvas.getContext('2d', { alpha: false });
  c.scale(2, 2);
  c.fillStyle = '#000';
  c.fillRect(0, 0, 640, 856);
  c.strokeStyle = '#e9e9e9';
  c.lineWidth = 2.8;
  c.strokeRect(46, 39, 548, 778);
  c.lineWidth = 1.2;
  c.strokeRect(54, 47, 532, 762);
  for (const [x, y, angle] of [
    [61, 54, 0],
    [579, 54, Math.PI / 2],
    [579, 802, Math.PI],
    [61, 802, -Math.PI / 2],
  ]) {
    c.save();
    c.translate(x, y);
    c.rotate(angle);
    c.lineWidth = 1.8;
    c.beginPath();
    c.moveTo(0, 54);
    c.bezierCurveTo(8, 37, 2, 10, 42, 8);
    c.quadraticCurveTo(26, 24, 16, 16);
    c.stroke();
    c.beginPath();
    c.moveTo(6, 6);
    c.quadraticCurveTo(22, 1, 53, 0);
    c.stroke();
    c.restore();
  }
  c.save();
  engravings[key](c);
  c.restore();
  c.fillStyle = '#fff';
  c.strokeStyle = '#cacaca';
  c.lineWidth = 1.75;
  line(c, 139, 494, 302, 494);
  line(c, 338, 494, 501, 494);
  c.save();
  c.translate(320, 494);
  c.rotate(Math.PI / 4);
  c.strokeRect(-3.5, -3.5, 7, 7);
  c.restore();
  c.textAlign = 'center';
  c.font = '600 ' + (key === 'apps' ? 90 : 113) + 'px Georgia, serif';
  c.fillText(title, 320, 618, 520);
  c.lineWidth = 1.8;
  for (const offset of [-1, 1]) {
    c.beginPath();
    c.moveTo(320, 710);
    c.bezierCurveTo(320 + offset * 15, 710, 320 + offset * 24, 694, 320 + offset * 51, 702);
    c.stroke();
  }
  const map = new THREE.CanvasTexture(canvas);
  map.anisotropy = 8;
  return map;
}

export function stampVolume(mesh, bounds, spec, bindingGrain) {
  const map = foilMask(spec.title, spec.key);
  const material = mesh.material.clone();
  const size = bounds.getSize(new THREE.Vector3());
  material.onBeforeCompile = (shader) => {
    shader.uniforms.foilMask = { value: map };
    shader.uniforms.bindingGrain = { value: bindingGrain };
    shader.uniforms.coverExtent = { value: new THREE.Vector4(bounds.max.z, bounds.min.y, size.z, size.y) };
    shader.uniforms.coverDye = { value: new THREE.Vector3(...spec.dye) };
    shader.uniforms.foilColor = { value: new THREE.Color(foils[spec.key]) };
    shader.vertexShader =
      'varying vec2 foilUV; varying float coverFace; uniform vec4 coverExtent;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      foilUV=vec2((coverExtent.x-position.z)/coverExtent.z,(position.y-coverExtent.y)/coverExtent.w);
      coverFace=normal.x;`
    );
    shader.fragmentShader =
      'varying vec2 foilUV; varying float coverFace; uniform sampler2D foilMask,bindingGrain; uniform vec3 coverDye,foilColor;\n' +
      shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
      float foil=texture2D(foilMask,foilUV).r*smoothstep(.55,.95,coverFace);
      float grain=dot(diffuseColor.rgb,vec3(.24,.56,.20));
      vec3 leather=texture2D(bindingGrain,foilUV*vec2(1.02,1.36)).rgb;
      float board=smoothstep(.35,.9,abs(coverFace));
      diffuseColor.rgb=mix(diffuseColor.rgb,grain*coverDye*(.74+.56*leather.r),board*.97);
      diffuseColor.rgb=mix(diffuseColor.rgb,foilColor*(.91+min(.09,grain)),foil);`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <roughnessmap_fragment>',
      '#include <roughnessmap_fragment>\nroughnessFactor=mix(mix(roughnessFactor,.39+.29*leather.g,board*.75),.31,foil);'
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <metalnessmap_fragment>',
      '#include <metalnessmap_fragment>\nmetalnessFactor=mix(metalnessFactor,.56,foil);'
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <normal_fragment_maps>',
      `#include <normal_fragment_maps>
      vec3 stampX=dFdx(-vViewPosition), stampY=dFdy(-vViewPosition);
      vec3 edgeX=cross(stampY,normal), edgeY=cross(normal,stampX);
      float det=dot(stampX,edgeX);
      float relief=.0009*foil+.0024*leather.b*board*(1.-foil);
      vec3 emboss=(edgeX*dFdx(relief)+edgeY*dFdy(relief))*sign(det)/max(abs(det),1.e-7);
      normal=normalize(normal-clamp(emboss,vec3(-.20),vec3(.20)));`
    );
  };
  material.customProgramCacheKey = () => 'archive-engraving';
  mesh.material = material;
  return () => {
    material.dispose();
    map.dispose();
  };
}
