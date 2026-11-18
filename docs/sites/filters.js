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
