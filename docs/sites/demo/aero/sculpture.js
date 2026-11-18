(() => {
  'use strict';
  const canvas = document.querySelector('#sculpture');
  const stage = document.querySelector('#sculpture-stage');
  const toggle = document.querySelector('#motion-toggle');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power', premultipliedAlpha: false });
  if (!gl) { toggle.hidden = true; return; }
  const vertexSource = `attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }`;
  const fragmentSource = `precision highp float;
    uniform vec2 resolution;
    uniform float time;
    uniform vec2 pointer;
    mat2 rotate(float angle) { float s=sin(angle), c=cos(angle); return mat2(c,-s,s,c); }
    float sculpture(vec3 p) {
      p.xy = rotate(-0.3 + 0.04*sin(time*0.28)) * p.xy;
      p.yz = rotate(0.48 + pointer.y*0.12 + 0.10*sin(time*0.25)) * p.yz;
      p.xz = rotate(-0.44 + pointer.x*0.16 + time*0.065) * p.xz;
      float angle = atan(p.y,p.x);
      float ring = 1.02 + 0.13*cos(3.0*angle + 0.7);
      vec2 tube = vec2(length(p.xy)-ring,p.z);
      tube = rotate(angle*1.5 + 0.4) * tube;
      return (length(tube / vec2(0.37,0.49))-1.0)*0.35;
    }
    vec3 normalAt(vec3 p) {
      vec2 e=vec2(0.0012,0.0);
      return normalize(vec3(sculpture(p+e.xyy)-sculpture(p-e.xyy),sculpture(p+e.yxy)-sculpture(p-e.yxy),sculpture(p+e.yyx)-sculpture(p-e.yyx)));
    }
    vec3 environment(vec3 d) {
      vec3 c=mix(vec3(0.018,0.028,0.026),vec3(0.24,0.31,0.29),smoothstep(-0.8,1.0,d.y));
      float strip=exp(-pow((d.x+0.34)/0.22, 8.0));
      float upper=smoothstep(-0.05,0.20,d.y)*(1.0-smoothstep(0.87,0.98,d.y));
      c+=vec3(1.65,1.82,1.72)*strip*upper;
      float broad=exp(-pow((d.y-0.65)/0.15,4.0))*smoothstep(-0.1,0.5,d.x);
      c+=vec3(2.0,2.05,1.94)*broad;
      float edge=exp(-pow((d.x-0.87)/0.14,2.0));
      c+=vec3(0.32,0.72,0.60)*edge;
      float softbox=exp(-pow((d.y+0.42)/0.10,4.0))*smoothstep(0.65,-0.4,d.x);
      c+=vec3(0.73,0.91,0.82)*softbox;
      c*=0.65+0.35*smoothstep(-0.7,0.3,d.z);
      return c;
    }
    void main() {
      vec2 uv=(2.0*gl_FragCoord.xy-resolution)/min(resolution.x,resolution.y);
      vec3 origin=vec3(0.0,0.0,4.7);
      vec3 ray=normalize(vec3(uv, -2.6));
      float travel=0.0;
      float distance=1.0;
      vec3 p=origin;
      for(int i=0;i<90;i++) {
        p=origin+ray*travel;
        distance=sculpture(p);
        if(distance<0.0013 || travel>7.0) break;
        travel+=distance*0.85;
      }
      if(distance>0.004 || travel>7.0) { gl_FragColor=vec4(0.0); return; }
      vec3 n=normalAt(p);
      vec3 reflection=reflect(ray,n);
      vec3 color=environment(reflection);
      color=mix(color,environment(normalize(reflection+n*0.12)),0.22);
      float fresnel=pow(1.0-max(dot(n,-ray),0.0),3.0);
      float occlusion=clamp(sculpture(p+n*0.2)/0.2,0.35,1.0);
      color*=mix(0.63,1.04,fresnel)*occlusion;
      color+=vec3(0.045,0.073,0.062)*max(n.y+0.3,0.0);
      color=color/(color+vec3(0.72));
      color=pow(color,vec3(0.82));
      gl_FragColor=vec4(color,1.0);
    }`;
  let program;
  let buffer;
  let vertex;
  let fragment;
  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const message = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(message);
    }
    return shader;
  }
  try {
    vertex = compile(gl.VERTEX_SHADER, vertexSource);
    fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
    gl.useProgram(program);
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const location = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
  } catch (error) {
    console.warn('AERO: static sculpture fallback.', error.message);
    if (buffer) gl.deleteBuffer(buffer);
    if (program) gl.deleteProgram(program);
    if (vertex) gl.deleteShader(vertex);
    if (fragment) gl.deleteShader(fragment);
    toggle.hidden = true;
    return;
  }
  const uniforms = { resolution: gl.getUniformLocation(program, 'resolution'), time: gl.getUniformLocation(program, 'time'), pointer: gl.getUniformLocation(program, 'pointer') };
  let paused = reducedMotion.matches;
  let visible = true;
  let lost = false;
  let frame = 0;
  let lastFrame = 0;
  let elapsed = 0;
  let previous = 0;
  let px = 0, py = 0, targetX = 0, targetY = 0;
  function syncButton() {
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? 'Включить анимацию' : 'Приостановить анимацию');
  }
  function draw() {
    if (lost) return;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(uniforms.time, elapsed);
    gl.uniform2f(uniforms.pointer, px, py);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
  function tick(now) {
    frame = 0;
    if (paused || !visible || document.hidden || lost) { previous = 0; return; }
    if (now - lastFrame > 32) {
      if (previous) elapsed += Math.min((now - previous) / 1000, 0.07);
      previous = now;
      lastFrame = now;
      px += (targetX-px)*0.055;
      py += (targetY-py)*0.055;
      draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function start() { if (!frame && !paused && visible && !document.hidden && !lost) frame = requestAnimationFrame(tick); }
  function stop() { cancelAnimationFrame(frame); frame = 0; previous = 0; }
  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(devicePixelRatio || 1, 1.35, 820 / Math.max(rect.width,rect.height,1));
    canvas.width = Math.max(1, Math.round(rect.width*ratio));
    canvas.height = Math.max(1, Math.round(rect.height*ratio));
    draw();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  const intersectionObserver = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) start(); else stop(); });
  intersectionObserver.observe(stage);
  stage.addEventListener('pointermove', event => {
    if (paused || event.pointerType === 'touch') return;
    const rect = stage.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width - 0.5)*2;
    targetY = ((event.clientY - rect.top) / rect.height - 0.5)*2;
  }, { passive: true });
  stage.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; });
  toggle.addEventListener('click', () => { paused = !paused; syncButton(); if (paused) stop(); else start(); });
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; syncButton(); if (paused) stop(); else start(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
  canvas.addEventListener('webglcontextlost', () => {
    lost = true;
    stop();
    stage.classList.remove('has-webgl');
    canvas.classList.remove('ready');
    toggle.hidden = true;
  });
  addEventListener('pagehide', event => {
    stop();
    if (event.persisted) return;
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    gl.deleteBuffer(buffer);
    gl.deleteProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
  });
  addEventListener('pageshow', start);
  syncButton();
  resize();
  stage.classList.add('has-webgl');
  canvas.classList.add('ready');
  start();
})();
