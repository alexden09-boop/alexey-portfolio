import { cp, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { groups, projects } from './projects.mjs';

const source = path.dirname(fileURLToPath(import.meta.url));
const publicBase = 'https://alexden09-boop.github.io/alexey-portfolio/';
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function image(project, prefix, eager, frame) {
  const [file, caption] = frame ?? [project.id, project.cover];
  if (project.poster && !frame) {
    const letters = project.poster === 'orbit' ? '<i></i><b>Орбита</b>' : '<b>Petra<br><em>Trading</em></b><small>Lebanon</small>';
    return `<div class="letterpress ${project.poster}" role="img" aria-label="${escape(caption)}"><div aria-hidden="true">${letters}</div></div>`;
  }
  return `<img src="${prefix}media/${file}.webp" alt="${escape(caption)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
}

function shell({ title, description, body, root, canonical, telegram, catalog = false }) {
  const back = catalog ? root + '#hybrid' : '../';
  const contact = telegram ? `<a href="${escape(telegram.url)}" target="_blank" rel="noopener">Написать в Telegram <span aria-hidden="true">↗</span></a>` : '';
  const gallery = catalog ? './' : '../';
  return `<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="theme-color" content="#19191c">
<link rel="canonical" href="${publicBase}sites/${canonical}"><link rel="icon" href="${root}favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${root}fonts.css"><link rel="stylesheet" href="${gallery}gallery.css">
${catalog ? '<script src="./filters.js" defer></script>' : ''}</head>
<body><a class="skip" href="#main">К содержанию</a><div class="wrap">
<header class="mast"><a href="${back}"><span aria-hidden="true">←</span> ${catalog ? 'На главную' : 'Все сайты'}</a>${contact}</header>
<main id="main">${body}</main></div></body></html>`;
}

function card(project, i) {
  const title = 'title-' + project.id;
  return `<article class="card" data-group="${project.group}" style="--mat:${project.color}">
<a href="${project.id}/" aria-labelledby="${title}"><div class="mount"><div class="print">${image(project, './', i < 2)}</div></div>
<div class="caption"><div><h2 id="${title}">${escape(project.name)}</h2><p>${escape(project.kind)}</p></div><span class="open-arrow" aria-hidden="true">↗</span></div></a></article>`;
}

export async function buildCatalog(output, telegram) {
  const dir = path.join(output, 'sites');
  await mkdir(dir, { recursive: true });
  for (const entry of ['media', 'demo', 'gallery.css', 'filters.js']) {
    await cp(path.join(source, entry), path.join(dir, entry), { recursive: true });
  }
  const filter = (id, name) => `<button type="button" data-filter="${id}" aria-pressed="${id === 'all'}">${escape(name)}</button>`;
  const body = `<div class="intro"><h1>Сайты<sup aria-label="${projects.length} работ">${projects.length}</sup></h1><p>От мебели на заказ до цифровых сервисов. <br>Коллекция сайтов и интерактивных проектов.</p></div>
<div class="filters" role="group" aria-label="Тип проекта" hidden>${filter('all', 'Все работы')}${Object.entries(groups).map(([id, label]) => filter(id, label)).join('')}</div>
<span class="sr" role="status" id="results"></span>
<div class="gallery">${projects.map(card).join('\n')}</div>
<footer><a href="../#hybrid">← На главную</a><a href="#main">Наверх ↑</a></footer>`;
  await writeFile(path.join(dir, 'index.html'), shell({ title: 'Сайты — работы Алексея', description: 'Каталог магазинов, корпоративных сайтов, портфолио и веб-сервисов Алексея.', body, root: '../', canonical: '', telegram, catalog: true }));
  for (const [i, p] of projects.entries()) {
    const next = projects[(i + 1) % projects.length];
    const action = p.url ? `<a class="visit" href="${escape(p.url)}"${p.id === 'alexey' ? '' : ' target="_blank" rel="noopener"'}>${escape(p.action)} <span aria-hidden="true">↗</span></a>` : '';
    const second = p.extra ? `<figure class="secondary"><img src="../media/${p.extra[0]}.webp" alt="${escape(p.extra[1])}" loading="lazy"><figcaption>${escape(p.extra[1])}</figcaption></figure>` : '';
    const detail = `<article class="detail" style="--mat:${p.color}">
<header class="case-intro"><div><p class="kind">${escape(p.kind)}</p><h1>${escape(p.name)}</h1></div><div class="case-copy"><p>${escape(p.text)}</p>${action}</div></header>
<figure class="plate"><div class="mount"><div class="print">${image(p, '../', true)}</div></div><figcaption>${escape(p.cover)}</figcaption></figure>${second}
</article><footer><a href="../">← Все сайты</a><a class="next" href="../${next.id}/"><small>Следующий проект</small>${escape(next.name)} <span aria-hidden="true">→</span></a></footer>`;
    const subdir = path.join(dir, p.id);
    await mkdir(subdir, { recursive: true });
    await writeFile(path.join(subdir, 'index.html'), shell({ title: p.name + ' — сайты Алексея', description: p.text, body: detail, root: '../../', canonical: p.id + '/', telegram }));
  }
}
