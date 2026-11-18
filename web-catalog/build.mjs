import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { groups, projects } from './projects.mjs';
import { esc, renderEdition } from './editions/render.mjs';

const source = path.dirname(fileURLToPath(import.meta.url));
const repo = path.dirname(source);

function card(p, i) {
  return `<article class="card" id="work-${p.id}" data-group="${p.group}" style="--mat:${p.color}">
  <a href="${p.id}/index.html" aria-labelledby="title-${p.id}"><div class="mount"><div class="print" data-second="./media/${p.id}-next.webp">
  <img src="./media/${p.id}.webp" alt="" width="1440" height="900" loading="${i < 2 ? 'eager' : 'lazy'}" decoding="async"></div><span class="enter" aria-hidden="true">Открыть демо ↗</span></div>
  <div class="caption"><div><h2 id="title-${p.id}">${esc(p.name)}</h2><p>${esc(p.kind)}</p></div><span class="open-arrow" aria-hidden="true">↗</span></div></a></article>`;
}

function gallery(telegram) {
  const filter = (id, name) => `<button type="button" data-filter="${id}" aria-pressed="${id === 'all'}">${esc(name)}</button>`;
  const contact = telegram ? `<a href="${esc(telegram.url)}" target="_blank" rel="noopener">Написать в Telegram ↗</a>` : '';
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Сайты — работы Алексея</title><meta name="description" content="Открытая подборка интерактивных демоверсий. Магазины, портфолио и веб-сервисы."><meta name="theme-color" content="#19191c">
  <link rel="canonical" href="https://alexden09-boop.github.io/alexey-portfolio/sites/"><link rel="icon" href="../favicon.svg"><link rel="stylesheet" href="../fonts.css"><link rel="stylesheet" href="./gallery.css"><script src="./filters.js" defer></script>
  </head><body><a class="skip" href="#main">К содержанию</a><div class="wrap"><header class="mast"><a href="../#hybrid">← На главную</a>${contact}</header>
  <main id="main"><div class="intro"><h1><span>Сайты</span><sup aria-label="${projects.length} работ">${projects.length}</sup></h1>
  <aside class="edition-note"><h2>О демонстрационных версиях</h2><p>С разрешения заказчиков я показываю сокращённые версии сайтов. Часть графики и анимации изменена, чтобы сохранить оригинальные решения для клиентов. Полные версии, внутренние материалы и остальные проекты остаются приватными.</p></aside></div>
  <div class="filters" role="group" aria-label="Тип проекта" hidden>${filter('all', 'Все работы')}${Object.entries(groups).map(([id,name])=>filter(id,name)).join('')}</div>
  <span class="sr" role="status" id="results"></span><div class="gallery">${projects.map(card).join('\n')}</div></main>
  <footer><a href="../#hybrid">← На главную</a><a href="#main">Наверх ↑</a></footer></div></body></html>`;
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
  await mkdir(path.join(dir, 'media'), {recursive: true});
  for (const item of ['gallery.css','filters.js']) await cp(path.join(source,item), path.join(dir,item));
  for (const item of ['art','reader.css','reader.js']) await cp(path.join(source,'editions',item), path.join(dir,item), {recursive: true});

  for (const p of projects) {
    const room = path.join(dir,p.id);
    await mkdir(room, {recursive: true});
    if (p.framed) await cp(path.join(source,'demo',p.id), path.join(room,'edition'), {recursive: true});
    await writeFile(path.join(room,'index.html'), renderEdition(p));
    for (const suffix of ['.webp','-next.webp']) {
      const file = p.id + suffix;
      await cp(path.join(source,'media',file),path.join(dir,'media',file));
    }
  }
  await writeFile(path.join(dir,'index.html'),gallery(telegram));
  await prune(path.join(dir,'media'), new Set(projects.flatMap(p=>[p.id+'.webp',p.id+'-next.webp'])));
  await prune(dir,new Set(['index.html','media','art','gallery.css','filters.js','reader.css','reader.js',...projects.map(p=>p.id)]));
}
