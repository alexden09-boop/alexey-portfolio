import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { groups, projects } from './projects.mjs';
import { esc, renderEdition } from './editions/render.mjs';

const source = path.dirname(fileURLToPath(import.meta.url));
const repo = path.dirname(source);

function indexEntry(p) {
  return `<li class="work" id="work-${p.id}" data-group="${p.group}" data-image="${esc(p.image)}" data-position="${p.position || '50% 50%'}">
    <a href="${p.id}/index.html"><span class="work-text"><span class="work-name">${esc(p.name)}</span>
    <span class="work-kind">${esc(p.kind)}</span></span><span class="work-thumb" aria-hidden="true" style="background-image:url('./${p.image}');background-position:${p.position || 'center'}"></span>
    <span class="work-arrow" aria-hidden="true">↗</span></a></li>`;
}

function preview(p) {
  return `<div class="stage-column"><a class="stage" href="${p.id}/index.html" aria-label="Открыть демо — ${esc(p.name)}">
    <div class="stage-art" aria-hidden="true"><img class="stage-image" src="./${p.image}" style="object-position:${p.position || 'center'}" alt="" decoding="async"></div>
    <div class="stage-caption"><div><span class="stage-kind">${esc(p.kind)}</span><strong class="stage-name">${esc(p.name)}</strong></div>
    <span class="stage-action">Открыть демо <span aria-hidden="true">↗</span></span></div></a></div>`;
}

function gallery(telegram) {
  const filter = (id, name) => `<button type="button" data-filter="${id}" aria-pressed="${id === 'all'}">${esc(name)}</button>`;
  const contact = telegram ? `<a href="${esc(telegram.url)}" target="_blank" rel="noopener">Написать в Telegram ↗</a>` : '';
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Сайты — работы Алексея</title><meta name="description" content="Открытая подборка интерактивных демоверсий. Магазины, портфолио и веб-сервисы."><meta name="theme-color" content="#19191c">
  <link rel="canonical" href="https://alexden09-boop.github.io/alexey-portfolio/sites/"><link rel="icon" href="../favicon.svg"><link rel="stylesheet" href="../fonts.css"><link rel="stylesheet" href="./gallery.css?v=work-index"><script src="./filters.js?v=work-index" defer></script>
  </head><body><a class="skip" href="#main">К содержанию</a><header class="mast"><a href="../#hybrid">← На главную</a>${contact}</header>
  <main id="main" class="spread"><div class="index-column"><div class="intro"><h1>Сайты</h1><span class="total">${projects.length} работ</span></div>
  <p class="edition-note">С разрешения заказчиков я показываю сокращённые демоверсии. Часть графики и анимации изменена. Полные сайты, остальные работы и внутренние материалы клиентов остаются приватными.</p>
  <div class="filters" role="group" aria-label="Тип проекта" hidden>${filter('all', 'Все работы')}${Object.entries(groups).map(([id,name])=>filter(id,name)).join('')}</div>
  <span class="sr" role="status" id="results"></span><ul class="work-index" aria-label="Проекты">${projects.map(indexEntry).join('\n')}</ul></div>
  ${preview(projects[0])}</main>
  <footer><a href="../#hybrid">← На главную</a><a href="#main">Наверх ↑</a></footer></body></html>`;
}

async function prune(dir, allowed) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (allowed.has(entry.name)) continue;
    const target = path.resolve(dir, entry.name);
    if (path.dirname(target) !== dir) throw Error('Unexpected catalog path');
    await rm(target, { recursive: entry.isDirectory(), force: true });
  }
}

export async function buildCatalog(output, telegram) {
  if (![path.join(repo, 'docs'), path.join(repo, 'dist')].includes(path.resolve(output))) throw Error('Unexpected build directory');
  const dir = path.resolve(output, 'sites');
  await mkdir(dir, {recursive: true});
  await cp(path.join(source,'stills'),path.join(dir,'stills'),{recursive: true});
  for (const item of ['gallery.css','filters.js']) await cp(path.join(source,item), path.join(dir,item));
  for (const item of ['art','reader.css','reader.js']) await cp(path.join(source,'editions',item), path.join(dir,item), {recursive: true});

  for (const p of projects) {
    const room = path.join(dir,p.id);
    await mkdir(room, {recursive: true});
    if (p.framed) await cp(path.join(source,'demo',p.id), path.join(room,'edition'), {recursive: true});
    await writeFile(path.join(room,'index.html'), renderEdition(p));
  }
  await writeFile(path.join(dir,'index.html'),gallery(telegram));
  await prune(dir,new Set(['index.html','stills','art','gallery.css','filters.js','reader.css','reader.js',...projects.map(p=>p.id)]));
}
