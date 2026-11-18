const controls = document.querySelector('.filters');
const buttons = [...controls.querySelectorAll('button')];
const cards = [...document.querySelectorAll('.card')];
const groups = new Set(buttons.map(button => button.dataset.filter));

function show(group) {
  if (!groups.has(group)) group = 'all';
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === group));
  let count = 0;
  for (const card of cards) {
    card.hidden = group !== 'all' && card.dataset.group !== group;
    if (!card.hidden) count++;
  }
  document.querySelector('#results').textContent = 'Работ в подборке — ' + count;
}
function sync() {
  show(new URL(location.href).searchParams.get('type') || 'all');
}
controls.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || button.getAttribute('aria-pressed') === 'true') return;
  const group = button.dataset.filter;
  const url = new URL(location.href);
  if (group === 'all') url.searchParams.delete('type');
  else url.searchParams.set('type', group);
  history.replaceState(null, '', url);
  show(group);
});
window.addEventListener('pageshow', sync);
window.addEventListener('popstate', sync);
sync();
controls.hidden = false;

const inFilm = window.self !== window.top;
let fromBook = inFilm;
if (!inFilm) {
  try {
    const arrived = Number(sessionStorage.getItem('folio-catalog-arrival'));
    fromBook = arrived > 0 && Date.now() - arrived < 15000;
    sessionStorage.removeItem('folio-catalog-arrival');
  } catch {}
}
document.documentElement.classList.toggle('from-book', fromBook);

if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      reveal.unobserve(entry.target);
    }
  }, { threshold: .06 });
  cards.forEach(card => reveal.observe(card));
}
const pointerMotion = matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)');
for (const card of cards) {
  const mount = card.querySelector('.mount');
  const print = mount.querySelector('.print');
  function prepareSecond() {
    if (!pointerMotion.matches || print.querySelector('.second-screen')) return;
    const image = new Image();
    image.alt = '';
    image.className = 'second-screen';
    print.append(image);
    image.src = print.dataset.second;
    image.decode().then(() => print.classList.add('spread-ready')).catch(() => image.remove());
  }
  card.addEventListener('pointerenter', prepareSecond);
  card.addEventListener('focusin', prepareSecond);
  mount.addEventListener('pointermove', event => {
    if (!pointerMotion.matches) return;
    const box = mount.getBoundingClientRect();
    mount.style.setProperty('--ry', (4 * ((event.clientX - box.left) / box.width - .5)).toFixed(2) + 'deg');
    mount.style.setProperty('--rx', (3 * (.5 - (event.clientY - box.top) / box.height)).toFixed(2) + 'deg');
  }, { passive:true });
  mount.addEventListener('pointerleave', () => { mount.style.removeProperty('--ry'); mount.style.removeProperty('--rx'); });
}
