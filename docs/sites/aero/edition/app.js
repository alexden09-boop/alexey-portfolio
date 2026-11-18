(() => {
  'use strict';
  const projects = {
    orbit: { title: 'Orbit', category: 'Музыка в своём ритме', description: 'Музыкальное приложение с теплом аналогового звука. В центре — обложка, настроение и любимый трек. Спокойная зелёная палитра и тактильные детали превращают обычное прослушивание в маленький личный ритуал.', tags: ['Дизайн продукта', 'Арт-дирекшн', 'Интерфейс'] },
    forma: { title: 'Forma', category: 'Архитектура тишины', description: 'Сайт архитектурного бюро, где пространство говорит само за себя. Природные оттенки, выразительная типографика и свободная композиция оставляют место главному — свету, материалам и архитектуре.', tags: ['Веб-дизайн', 'Визуальный стиль', 'Разработка'] },
    pulse: { title: 'Pulse', category: 'Энергия новых идей', description: 'Творческая платформа для тех, кто хочет попробовать новое. Крупная типографика, мягкие объёмные формы и живой ритм композиции передают ощущение первого импульса — момента, когда идея становится действием.', tags: ['Арт-дирекшн', 'Веб-дизайн', 'Анимация'] }
  };
  const projectDialog = document.querySelector('#project-dialog');
  const briefDialog = document.querySelector('#brief-dialog');
  const form = document.querySelector('#brief-form');
  const toast = document.querySelector('#toast');
  const dialogs = [...document.querySelectorAll('dialog')];
  let toastTimer;
  let returnFocus;
  function notify(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('visible');
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 4000);
  }
  function openDialog(dialog, trigger) {
    const switching = dialogs.some(item => item.open);
    if (!switching) returnFocus = trigger || document.activeElement;
    for (const other of dialogs) if (other.open) other.close();
    dialog.showModal();
    document.body.classList.add('modal-open');
  }
  for (const dialog of dialogs) {
    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (!dialogs.some(item => item.open)) {
        document.body.classList.remove('modal-open');
        if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
      }
    });
  }
  for (const button of document.querySelectorAll('[data-project]')) {
    button.addEventListener('click', () => {
      const project = projects[button.dataset.project];
      document.querySelector('#project-title').textContent = project.title;
      document.querySelector('#project-category').textContent = project.category;
      document.querySelector('#project-description').textContent = project.description;
      const tags = document.querySelector('#project-tags');
      tags.replaceChildren(...project.tags.map(text => { const span = document.createElement('span'); span.textContent = text; return span; }));
      const preview = button.querySelector('.project-art').cloneNode(true);
      preview.querySelector('.project-hover').remove();
      document.querySelector('#project-preview').replaceChildren(preview);
      openDialog(projectDialog, button);
    });
  }
  for (const button of document.querySelectorAll('[data-open-brief]')) button.addEventListener('click', () => openDialog(briefDialog, button));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const idea = String(data.get('idea') || '').trim();
    if (!name || !idea) {
      const empty = !name ? form.elements.name : form.elements.idea;
      empty.setCustomValidity('Заполните поле — одного пробела недостаточно.');
      empty.reportValidity();
      return;
    }
    const text = `AERO — Бриф проекта\r\n\r\nИмя: ${name}\r\nФормат: ${data.get('type')}\r\n\r\nИдея:\r\n${idea}\r\n`;
    const url = URL.createObjectURL(new Blob(['\uFEFF', text], { type: 'text/plain;charset=utf-8' }));
    const download = document.createElement('a');
    download.href = url;
    download.download = 'aero-brief.txt';
    document.body.append(download);
    download.click();
    download.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    notify('Бриф подготовлен — проверьте загрузки браузера.');
  });
  for (const field of [form.elements.name, form.elements.idea]) field.addEventListener('input', () => field.setCustomValidity(''));
})();
