import { primeIce } from './folio-print.js';

// Keep the frame in the same DOM position from warm-up to presentation.
// Reparenting an iframe would re-create its document and its WebGL context.
export function createIcePortal(link) {
  // The portfolio document survives the route change. Its relative images,
  // preload hints and links must keep resolving against its original URL.
  if (!document.querySelector('base[href]')) {
    const base = document.createElement('base');
    base.href = location.href.split('#')[0];
    document.head.prepend(base);
  }
  const sceneURL = link.href;
  const homeTitle = document.title;
  const desktop = matchMedia('(hover: hover) and (pointer: fine)');
  let panel,
    frame,
    ready,
    open = false,
    previewing = false,
    timer,
    warmExpiry;
  let inactive = [];

  function tellScene(active) {
    frame?.contentWindow?.postMessage({ type: 'portfolio-ice-active', active }, location.origin);
  }
  function discard() {
    clearTimeout(timer);
    clearTimeout(warmExpiry);
    panel?.remove();
    panel = frame = null;
    ready = false;
    previewing = false;
  }
  function returnHome() {
    if (open && history.state?.portfolioIce) history.back();
  }
  function prepare() {
    if (panel) return;
    primeIce();
    panel = document.createElement('section');
    panel.className = 'ice-portal';
    panel.inert = true;
    panel.setAttribute('aria-label', 'Ледяная сцена');
    panel.innerHTML = `<div class="ice-wait-snow" aria-hidden="true"></div>
      <button class="ice-return" type="button">← Назад</button>
      <p class="ice-status" role="status">Загружается 3D-сцена</p>
      <a class="ice-retry">Открыть сцену отдельно ↗</a>`;
    const snow = panel.querySelector('.ice-wait-snow');
    for (let i = 0; i < 18; i++) {
      const flake = document.createElement('i');
      flake.style.left = ((i * 37.17) % 100) + '%';
      flake.style.top = ((i * 23.49) % 100) + '%';
      flake.style.setProperty('--delay', -(i * 0.41) + 's');
      flake.style.setProperty('--drift', ((i % 3) - 1) * 25 + 8 + 'px');
      snow.append(flake);
    }
    panel.querySelector('.ice-return').addEventListener('click', returnHome);
    panel.querySelector('.ice-retry').href = sceneURL;
    frame = document.createElement('iframe');
    frame.name = 'portfolio-ice';
    frame.title = 'Интерактивная ледяная сцена';
    frame.tabIndex = -1;
    frame.src = sceneURL;
    panel.prepend(frame);
    document.body.append(panel);
    // Release unused speculative GPU resources after the visitor moves on.
    warmExpiry = setTimeout(() => {
      if (!open) discard();
    }, 90000);
  }
  function sceneVisible() {
    if (!open || !ready) return;
    clearTimeout(timer);
    tellScene(true);
    panel.classList.add('ice-ready');
    frame.tabIndex = 0;
    frame.focus({ preventScroll: true });
  }
  window.addEventListener('message', (event) => {
    if (event.origin !== location.origin || !frame || event.source !== frame.contentWindow) return;
    if (event.data?.type === 'portfolio-ice-ready') {
      ready = true;
      if (open) sceneVisible();
      else tellScene(false);
    } else if (event.data?.type === 'portfolio-ice-back') returnHome();
    else if (event.data?.type === 'portfolio-ice-error') panel.classList.add('ice-slow');
  });
  function show() {
    prepare();
    if (open) return;
    open = true;
    clearTimeout(warmExpiry);
    inactive = [
      ...document.querySelectorAll(
        'body > header, body > main, body > nav, body > footer, body > .skip-link'
      ),
    ].filter((node) => !node.inert);
    inactive.forEach((node) => {
      node.inert = true;
    });
    document.body.classList.add('ice-open');
    document.dispatchEvent(new Event('portfolio-view-change'));
    panel.inert = false;
    panel.classList.add('ice-opened');
    document.title = 'Ледяная сцена · 3D';
    panel.querySelector('.ice-return').focus({ preventScroll: true });
    timer = setTimeout(() => panel?.classList.add('ice-slow'), 22000);
    sceneVisible();
  }
  function close() {
    if (!open) return;
    inactive.forEach((node) => {
      node.inert = false;
    });
    inactive = [];
    document.body.classList.remove('ice-open');
    document.title = homeTitle;
    document.dispatchEvent(new Event('portfolio-view-change'));
    link.focus({ preventScroll: true });
    open = false;
    discard();
  }
  window.addEventListener('popstate', () => {
    if (history.state?.portfolioIce && location.href === sceneURL) show();
    else close();
  });
  for (const event of ['pointerenter', 'focus', 'pointerdown']) {
    link.addEventListener(event, prepare, { passive: true });
  }
  if (!desktop.matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          prepare();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(link.closest('.scene'));
  }
  return {
    prepare,
    get ready() {
      return ready;
    },
    preview() {
      if (!ready || open || previewing) return;
      previewing = true;
      clearTimeout(warmExpiry);
      panel.classList.add('ice-preview');
      tellScene(true);
    },
    cancelPreview() {
      if (open || !previewing) return;
      discard();
    },
    enter() {
      if (!open) history.pushState({ portfolioIce: true }, '', sceneURL);
      show();
    },
  };
}
