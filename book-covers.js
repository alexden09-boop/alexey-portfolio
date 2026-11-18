import * as THREE from 'three';

// This transparent stamp changes the albedo and roughness of the existing cloth.
// The measured relief, worn corners and spine lettering remain on the volume.
function foilMask(title, key) {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 856;
  const c = canvas.getContext('2d');
  c.strokeStyle = c.fillStyle = '#fff';
  c.lineWidth = 2.3;
  c.strokeRect(41, 35, 558, 785);
  c.strokeRect(49, 43, 542, 769);
  for (const [x, y, angle] of [
    [54, 48, 0],
    [586, 48, Math.PI / 2],
    [586, 808, Math.PI],
    [54, 808, -Math.PI / 2],
  ]) {
    c.save();
    c.translate(x, y);
    c.rotate(angle);
    c.beginPath();
    c.moveTo(0, 40);
    c.quadraticCurveTo(3, 3, 40, 0);
    c.moveTo(0, 26);
    c.quadraticCurveTo(12, 14, 26, 0);
    c.stroke();
    c.restore();
  }
  c.save();
  c.translate(320, 300);
  c.lineWidth = 3.5;
  c.beginPath();
  c.arc(0, 0, 100, 0, Math.PI * 2);
  c.stroke();
  c.lineWidth = 1.8;
  c.beginPath();
  c.arc(0, 0, 93, 0, Math.PI * 2);
  c.stroke();
  if (key === 'sites') {
    for (let n = 0; n < 5; n++) {
      const r = 22 + n * 9;
      c.beginPath();
      c.moveTo(-r, 52);
      c.lineTo(-r, 1);
      c.arc(0, 1, r, Math.PI, 2 * Math.PI);
      c.lineTo(r, 52);
      c.stroke();
    }
    c.fillRect(-66, 52, 132, 3);
  } else if (key === 'ads') {
    for (let n = 0; n < 32; n++) {
      c.rotate(Math.PI / 16);
      c.beginPath();
      c.moveTo(23, 0);
      c.quadraticCurveTo(43, -8, 72, 0);
      c.lineTo(66, 3);
      c.stroke();
    }
    c.beginPath();
    c.arc(0, 0, 18, 0, 2 * Math.PI);
    c.stroke();
  } else if (key === 'apps') {
    for (let i = 0; i < 4; i++) {
      const y = i * 17 - 29;
      c.beginPath();
      c.moveTo(-62, y);
      c.lineTo(0, y - 26);
      c.lineTo(62, y);
      c.lineTo(0, y + 26);
      c.closePath();
      c.stroke();
    }
  } else {
    c.rotate(-0.35);
    for (let i = 1; i <= 5; i++) {
      c.beginPath();
      c.ellipse(0, 0, 12 * i, 64, 0, 0, Math.PI * 2);
      c.stroke();
    }
    for (const y of [-38, -18, 0, 18, 38]) {
      c.beginPath();
      c.ellipse(0, y, Math.sqrt(64 ** 2 - y ** 2), 9, 0, 0, Math.PI * 2);
      c.stroke();
    }
  }
  c.restore();
  c.textAlign = 'center';
  let size = 115;
  do {
    c.font = 'bold ' + size + 'px Georgia, serif';
    size--;
  } while (size > 90 && c.measureText(title).width > 526);
  c.fillText(title, 320, 554, 526);
  c.fillRect(217, 615, 206, 2);
  c.beginPath();
  c.moveTo(320, 643);
  c.lineTo(325, 650);
  c.lineTo(320, 657);
  c.lineTo(315, 650);
  c.closePath();
  c.fill();
  const map = new THREE.CanvasTexture(canvas);
  map.anisotropy = 6;
  return map;
}

export function stampVolume(mesh, bounds, spec) {
  const map = foilMask(spec.title, spec.key);
  const material = mesh.material.clone();
  const size = bounds.getSize(new THREE.Vector3());
  material.onBeforeCompile = (shader) => {
    shader.uniforms.foilMask = { value: map };
    shader.uniforms.coverExtent = { value: new THREE.Vector4(bounds.max.z, bounds.min.y, size.z, size.y) };
    shader.uniforms.coverDye = { value: new THREE.Vector3(...spec.dye) };
    shader.vertexShader =
      'varying vec2 foilUV; varying float coverFace; uniform vec4 coverExtent;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      foilUV=vec2((coverExtent.x-position.z)/coverExtent.z,(position.y-coverExtent.y)/coverExtent.w);
      coverFace=normal.x;`
    );
    shader.fragmentShader =
      'varying vec2 foilUV; varying float coverFace; uniform sampler2D foilMask; uniform vec3 coverDye;\n' +
      shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
      float front=smoothstep(.55,.95,coverFace);
      float foil=texture2D(foilMask,foilUV).a*front;
      float grain=dot(diffuseColor.rgb,vec3(.24,.56,.20));
      diffuseColor.rgb=mix(diffuseColor.rgb,grain*coverDye,smoothstep(.35,.9,abs(coverFace))*.96);
      diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.91,.69,.37),foil);`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <roughnessmap_fragment>',
      '#include <roughnessmap_fragment>\nroughnessFactor=mix(roughnessFactor,.37,foil);'
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <metalnessmap_fragment>',
      '#include <metalnessmap_fragment>\nmetalnessFactor=mix(metalnessFactor,.39,foil);'
    );
  };
  material.customProgramCacheKey = () => 'archive-foil';
  mesh.material = material;
  return () => {
    material.dispose();
    map.dispose();
  };
}
