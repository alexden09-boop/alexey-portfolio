import * as THREE from 'three';

// Several lights near the spines, others behind the doors and above the cornice.
// Depth testing lets the oak and the circulating volumes occlude each light.
export function createFireflies() {
  const anchors = [
    [-2.3, 1.1, 1.85],
    [-1.56, 1.64, 1.45],
    [-0.72, 1.82, 0.75],
    [0.36, 1.66, 0.96],
    [1.34, 1.41, 1.67],
    [2.17, 1.09, 2.18],
    [2.23, 0.28, 1.77],
    [1.62, -0.05, 2.31],
    [2.16, -0.96, 1.96],
    [1.28, -1.32, 1.35],
    [0.34, -1.46, 0.97],
    [-1.31, -1.28, 1.63],
    [-2.17, -0.82, 2.15],
    [-1.55, -0.2, 2.35],
    [-2.08, 0.29, 1.65],
    [-0.58, 0.34, 1.12],
    [0.64, 0.65, 1.29],
    [-0.41, 1.12, 1.28],
  ];
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(anchors.flat(), 3));
  geometry.setAttribute(
    'seed',
    new THREE.Float32BufferAttribute(
      anchors.map((_, i) => i * 2.39996),
      1
    )
  );
  const uniforms = { time: { value: 0 }, pixelScale: { value: 1 } };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
    vertexShader: `
      attribute float seed;
      uniform float time, pixelScale;
      varying float glow;
      void main() {
        float phase = seed + time * (.38 + .11 * sin(seed));
        vec3 p = position + vec3(.16*sin(phase)+.045*cos(1.7*phase), .12*cos(phase*1.3), .11*sin(.8*phase));
        vec4 view = modelViewMatrix * vec4(p, 1.);
        glow = .28 + .72 * smoothstep(-.70, .9, sin(seed*3. + time*(.72+.25*cos(seed))));
        gl_Position = projectionMatrix * view;
        gl_PointSize = pixelScale * (12. + 6.*glow + 2.*sin(seed)) * clamp(8. / -view.z, .8, 1.2);
      }`,
    fragmentShader: `
      varying float glow;
      void main() {
        vec2 p = gl_PointCoord * 2. - 1.;
        float r = dot(p,p);
        float core = exp(-r*64.);
        float halo = exp(-r*5.5);
        gl_FragColor = vec4(mix(vec3(.92,.49,.19),vec3(1.,.91,.64),core),
          glow * (.96*core + .23*halo) * (1.-smoothstep(.70,1.,r)));
      }`,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  return {
    points,
    update(time, pixelScale) {
      uniforms.time.value = time;
      uniforms.pixelScale.value = pixelScale;
    },
    dispose() {
      geometry.dispose();
      material.dispose();
    },
  };
}
