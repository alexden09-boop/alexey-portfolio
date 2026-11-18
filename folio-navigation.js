import { primeIce } from './folio-print.js';

const blend = (a, b, amount) => a + (b - a) * amount;
function between(value, start, end) {
  const t = Math.max(0, Math.min(1, (value - start) / (end - start)));
  return t * t * (3 - 2 * t);
}

export function connectFolios(links, openFilm, reduced) {
  let active;
  for (const link of links) {
    if (link.dataset.document === '3d') {
      for (const event of ['pointerenter', 'focus', 'pointerdown']) {
        link.addEventListener(event, primeIce, { passive: true });
      }
    }
    link.addEventListener('click', (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === '_blank'
      )
        return;
      if (active) {
        event.preventDefault();
        return;
      }
      const target = link.hash ? document.getElementById(link.hash.slice(1)) : null;
      const title = target?.querySelector('h3');
      if (reduced.matches || (link.hash && !title)) return;

      const overlay = document.createElement('div');
      overlay.className = 'folio-transition';
      overlay.dataset.book = link.dataset.document;
      overlay.setAttribute('aria-hidden', 'true');
      function layer(name) {
        const node = document.createElement('div');
        node.className = 'folio-' + name;
        overlay.append(node);
        return node;
      }
      const veil = layer('veil');
      const picture = !target && layer('ice-frame');
      if (picture) primeIce();
      const host = layer('canvas');
      const heading = title && layer('heading');
      document.body.append(overlay);
      let film;
      try {
        film = openFilm(link.dataset.document, host);
        if (film) film.frame(0);
      } catch (error) {
        console.warn('Book transition unavailable', error);
        film?.dispose();
        film = null;
      }
      if (!film) {
        overlay.remove();
        return;
      } // The native link still works with a static shelf.
      event.preventDefault();
      let frame,
        fallbackTimer,
        landing,
        takeoff,
        committed = false,
        leaving = false;
      const stopScroll = (input) => input.preventDefault();
      overlay.addEventListener('wheel', stopScroll, { passive: false });
      const keydown = (key) => {
        if (key.key === 'Escape' || key.key === 'Tab') {
          if (key.key === 'Escape') key.preventDefault();
          finish();
        } else if ([' ', 'PageUp', 'PageDown', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key.key))
          key.preventDefault();
      };
      const visibility = () => {
        if (document.hidden) finish();
      };
      function clean() {
        cancelAnimationFrame(frame);
        clearTimeout(fallbackTimer);
        document.removeEventListener('keydown', keydown);
        document.removeEventListener('visibilitychange', visibility);
        window.removeEventListener('pagehide', clean);
        window.removeEventListener('popstate', clean);
        reduced.removeEventListener('change', finish);
        title?.classList.remove('folio-title-held');
        try {
          film.dispose();
        } finally {
          overlay.remove();
          active = false;
        }
      }
      function land() {
        if (committed) return;
        committed = true;
        if (location.hash !== link.hash) history.pushState(null, '', link.hash);
        target.classList.remove('arrival-pending', 'scroll-arrival');
        target.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
        title.classList.add('folio-title-held');
        landing = title.getBoundingClientRect();
        heading.style.color = getComputedStyle(title).color;
      }
      function finish() {
        if (leaving || !active) return;
        if (target) {
          land();
          clean();
          return;
        }
        leaving = true;
        cancelAnimationFrame(frame);
        picture.style.opacity = 1;
        host.style.opacity = 0;
        veil.style.opacity = 1;
        try {
          sessionStorage.setItem('folio-ice-at', String(Date.now()));
        } catch {}
        location.assign(link.href);
        fallbackTimer = setTimeout(clean, 6000);
      }
      if (heading) {
        heading.textContent = title.textContent;
        const type = getComputedStyle(title);
        for (const property of [
          'fontFamily',
          'fontSize',
          'fontStyle',
          'fontWeight',
          'lineHeight',
          'letterSpacing',
          'textWrap',
          'textTransform',
        ]) {
          heading.style[property] = type[property];
        }
        heading.style.width = title.getBoundingClientRect().width + 'px';
      }
      active = true;
      document.addEventListener('keydown', keydown);
      document.addEventListener('visibilitychange', visibility);
      window.addEventListener('popstate', clean);
      window.addEventListener('pagehide', clean);
      host.addEventListener('webglcontextlost', finish, { capture: true, once: true });
      reduced.addEventListener('change', finish);
      const start = performance.now();
      function advance(now) {
        const t = Math.min(1, Math.max(0, (now - start) / 1490));
        try {
          if (t === 1) {
            finish();
            return;
          }
          const point = film.frame(t);
          veil.style.opacity = between(t, 0.03, 0.64) * (target ? 1 - between(t, 0.81, 1) : 1);
          host.style.opacity = 1 - between(t, 0.76, 0.97);
          if (picture) picture.style.opacity = between(t, 0.72, 0.94);
          if (heading) {
            heading.style.opacity = between(t, 0.54, 0.73);
            if (t >= 0.76 && !committed) {
              takeoff = point;
              land();
            }
            const fly = between(t, 0.76, 0.98);
            const x = committed ? blend(takeoff.x, landing.left, fly) : point.x;
            const y = committed ? blend(takeoff.y, landing.top, fly) : point.y;
            const scale = committed ? blend(takeoff.scale, 1, fly) : point.scale;
            heading.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) scale(' + scale + ')';
          }
          frame = requestAnimationFrame(advance);
        } catch (error) {
          console.warn('Finishing book navigation', error);
          finish();
        }
      }
      frame = requestAnimationFrame(advance);
    });
  }
}
