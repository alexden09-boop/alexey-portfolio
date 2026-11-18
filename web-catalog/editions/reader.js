const back = document.querySelector('.reader-back');
if (document.referrer) {
  const from = new URL(document.referrer);
  const catalog = new URL('../', location.href);
  if (from.origin === catalog.origin && [catalog.pathname, catalog.pathname + 'index.html'].includes(from.pathname)) {
    const target = new URL(back.href);
    target.search = from.search;
    back.href = target.href;
  }
}

const choices = document.querySelector('.choices');
if (choices) {
  const buttons = [...choices.querySelectorAll('button')];
  const panels = [...document.querySelectorAll('[data-variant]')];
  function choose(index) {
    panels.forEach((panel, i) => { panel.hidden = i !== index; });
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  }
  choices.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (button) choose(buttons.indexOf(button));
  });
  choose(0);
  choices.hidden = false;
}

const form = document.querySelector('#letter');
if (form) {
  const output = document.querySelector('#letter-preview');
  const date = form.elements.date;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const iso = [tomorrow.getFullYear(), String(tomorrow.getMonth()+1).padStart(2,'0'), String(tomorrow.getDate()).padStart(2,'0')].join('-');
  date.min = date.value = iso;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const message = form.elements.message.value.trim();
    if (!message) {
      form.elements.message.setCustomValidity('Напишите хотя бы одно слово.');
      form.reportValidity(); return;
    }
    const display = new Intl.DateTimeFormat('ru', { dateStyle: 'long' }).format(new Date(date.value + 'T12:00:00'));
    output.querySelector('h3').textContent = display;
    output.querySelector('blockquote').textContent = message;
    form.hidden = true; output.hidden = false; output.focus();
  });
  form.elements.message.addEventListener('input', () => form.elements.message.setCustomValidity(''));
  output.querySelector('button').addEventListener('click', () => { output.hidden = true; form.hidden = false; form.elements.message.focus(); });
}
