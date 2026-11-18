const embedded = window !== parent && window.name === 'portfolio-ice';
const hint = document.querySelector('.ice-scroll-hint');
const back = document.querySelector('.scene-back');
let ready = false;
let rendering;
function notify(type) {
  if (embedded) parent.postMessage({ type }, location.origin);
}

// Both conditions matter. The loader fades while the camera is still entering;
// the engine enables scrolling only after its opening camera move completes.
function checkReady() {
  if (ready || document.getElementById('loader')) return;
  const playable = document.documentElement.dataset.icePlayable === 'true';
  const unsupported = document.querySelector('#app')?.textContent.includes('нужен WebGL 2');
  if (!playable && !unsupported) return;
  ready = true;
  observer.disconnect();
  requestAnimationFrame(() =>
    requestAnimationFrame(async () => {
      if (playable) hint.hidden = false;
      if (embedded && playable) {
        const engine = await import('./assets/App3D-d68cb154.js');
        rendering = engine.setPortfolioRendering;
        rendering(false);
      }
      document.documentElement.dataset.iceReady = 'true';
      notify('portfolio-ice-ready');
    })
  );
}
const observer = new MutationObserver(checkReady);
observer.observe(document.body, { childList: true, subtree: true });
window.addEventListener('iceplayable', checkReady, { once: true });
checkReady();
if (embedded) {
  window.addEventListener('message', (event) => {
    if (
      event.source === parent &&
      event.origin === location.origin &&
      event.data?.type === 'portfolio-ice-active'
    ) {
      rendering?.(event.data.active === true);
    }
  });
  back.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    notify('portfolio-ice-back');
  });
  window.addEventListener(
    'error',
    (event) => {
      if (event.target?.tagName === 'SCRIPT') notify('portfolio-ice-error');
    },
    true
  );
}
function dismiss() {
  if (ready) hint.classList.add('dismissed');
}
let touchY;
window.addEventListener(
  'wheel',
  (event) => {
    if (event.deltaY > 0) dismiss();
  },
  { passive: true, capture: true }
);
window.addEventListener(
  'keydown',
  (event) => {
    if (event.key === 'ArrowDown') dismiss();
  },
  true
);
window.addEventListener(
  'touchstart',
  (event) => {
    touchY = event.touches[0]?.clientY;
  },
  { passive: true, capture: true }
);
window.addEventListener(
  'touchmove',
  (event) => {
    if (touchY - event.touches[0]?.clientY > 8) dismiss();
  },
  { passive: true, capture: true }
);
