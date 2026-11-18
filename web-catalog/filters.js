const works = [...document.querySelectorAll('.work')];
const filters = document.querySelector('.filters');
const buttons = [...filters.querySelectorAll('button')];
const stage = document.querySelector('.stage');
const art = stage.querySelector('.stage-art');
const stageName = stage.querySelector('.stage-name');
const stageKind = stage.querySelector('.stage-kind');
const wide = matchMedia('(min-width: 831px) and (any-hover: hover)');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');

let selected;
let revision = 0;
let displayed = works[0];
let transition;
function selectWork(work) {
  if (!work || work.hidden) return;
  if (selected !== work) {
    selected?.classList.remove('selected');
    selected = work;
    work.classList.add('selected');
  }
  const request = ++revision;
  if (!wide.matches) return;
  const name = work.querySelector('.work-name').textContent;
  const kind = work.querySelector('.work-kind').textContent;
  stage.href = work.querySelector('a').href;
  stage.setAttribute('aria-label', 'Открыть демо — ' + name);
  stageName.textContent = name;
  stageKind.textContent = kind;
  if (displayed === work) return;
  const image = new Image();
  image.className = 'stage-image';
  image.alt = '';
  image.style.objectPosition = work.dataset.position;
  image.src = work.dataset.image;
  image.decode().then(() => {
    if (request !== revision || !wide.matches) return;
    transition?.finish();
    const outgoing = art.lastElementChild;
    art.append(image);
    displayed = work;
    if (reduced.matches || !image.animate) { outgoing?.remove(); return; }
    transition = image.animate([
      { opacity: 0, transform: 'scale(1.028)' },
      { opacity: 1, transform: 'scale(1)' }
    ], { duration: 440, easing: 'cubic-bezier(.22,.7,.21,1)' });
    transition.onfinish = () => outgoing?.remove();
  }).catch(() => {
    if (request !== revision) return;
    transition?.finish();
    art.replaceChildren();
    displayed = null;
  });
}

function updateList() {
  const requested = new URL(location.href).searchParams.get('type');
  const group = buttons.some(b => b.dataset.filter === requested) ? requested : 'all';
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === group)));
  for (const work of works) work.hidden = group !== 'all' && work.dataset.group !== group;
  const visible = works.filter(work => !work.hidden);
  document.querySelector('#results').textContent = 'Работ в подборке — ' + visible.length;
  const anchor = visible.find(work => '#' + work.id === location.hash);
  selectWork(anchor || (visible.includes(selected) ? selected : visible[0]));
}

for (const work of works) {
  work.addEventListener('pointerenter', event => {
    if (wide.matches && event.pointerType !== 'touch') selectWork(work);
  });
  work.addEventListener('focusin', () => selectWork(work));
}
filters.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || button.getAttribute('aria-pressed') === 'true') return;
  const url = new URL(location.href);
  if (button.dataset.filter === 'all') url.searchParams.delete('type');
  else url.searchParams.set('type', button.dataset.filter);
  url.hash = '';
  history.replaceState(null, '', url);
  updateList();
});
wide.addEventListener('change', () => selectWork(selected));
reduced.addEventListener('change', () => { if (reduced.matches) transition?.finish(); });
window.addEventListener('popstate', updateList);
window.addEventListener('pageshow', updateList);

let fromBook = window.self !== window.top;
if (!fromBook) {
  try {
    const since = Date.now() - Number(sessionStorage.getItem('folio-catalog-arrival'));
    fromBook = since >= 0 && since < 15000;
    sessionStorage.removeItem('folio-catalog-arrival');
  } catch {}
}
document.documentElement.classList.toggle('from-book', fromBook);
updateList();
filters.hidden = false;
