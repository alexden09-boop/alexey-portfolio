const filters = document.querySelector('.filters');
const buttons = [...filters.querySelectorAll('button')];
const works = [...document.querySelectorAll('.work')];

function sync() {
  const requested = new URL(location.href).searchParams.get('type');
  const group = buttons.some(button => button.dataset.filter === requested) ? requested : 'all';
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === group));
  for (const work of works) work.hidden = group !== 'all' && work.dataset.group !== group;
  document.querySelector('#results').textContent = 'Работ в подборке — ' + works.filter(work => !work.hidden).length;
}
filters.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || button.getAttribute('aria-pressed') === 'true') return;
  const url = new URL(location.href);
  if (button.dataset.filter === 'all') url.searchParams.delete('type');
  else url.searchParams.set('type', button.dataset.filter);
  url.hash = '';
  history.replaceState(null, '', url);
  sync();
});
window.addEventListener('pageshow', sync);
window.addEventListener('popstate', sync);
sync();
filters.hidden = false;

let fromBook = window.self !== window.top;
if (!fromBook) {
  try {
    const since = Date.now() - Number(sessionStorage.getItem('folio-catalog-arrival'));
    fromBook = since >= 0 && since < 15000;
    sessionStorage.removeItem('folio-catalog-arrival');
  } catch {}
}
document.documentElement.classList.toggle('from-book', fromBook);
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
  for (const work of works) observer.observe(work);
}

const canPreview = matchMedia('(hover:hover) and (pointer:fine) and (min-width:701px) and (prefers-reduced-motion:no-preference)');
for (const work of works) {
  const preview = work.querySelector('.preview');
  function loadSecond() {
    if (!canPreview.matches || preview.querySelector('.secondary')) return;
    const image = new Image();
    image.alt = '';
    image.className = 'secondary';
    image.src = preview.dataset.second;
    preview.append(image);
    image.decode().then(() => image.classList.add('ready')).catch(() => image.remove());
  }
  work.addEventListener('pointerenter', loadSecond);
  work.addEventListener('focusin', loadSecond);
}
