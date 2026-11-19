import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from './projects.mjs';
import { esc, renderEdition } from './editions/render.mjs';

const source = path.dirname(fileURLToPath(import.meta.url));
const repo = path.dirname(source);

function catalogCard(project, index) {
  return `<li class="work" id="work-${project.id}"><a href="${project.id}/index.html">
    <img src="./media/${project.id}.webp" alt="" width="1060" height="500" loading="${index < 4 ? 'eager' : 'lazy'}" decoding="async">
    <span class="work-name">${esc(project.name)}</span></a></li>`;
}

function gallery(telegram) {
  const contact = telegram ? `<a href="${esc(telegram.url)}" target="_blank" rel="noopener">Написать в Telegram ↗</a>` : '';
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Сайты — работы Алексея</title><meta name="description" content="Подборка сайтов Алексея. Откройте проект, чтобы посмотреть его демоверсию."><meta name="theme-color" content="#18181a">
  <link rel="canonical" href="https://alexden09-boop.github.io/alexey-portfolio/sites/"><link rel="icon" href="../favicon.svg">
  <link rel="stylesheet" href="../fonts.css"><link rel="stylesheet" href="./gallery.css?v=grid-four"></head>
  <body><a class="skip" href="#main">К проектам</a><div class="wrap">
    <header class="mast"><a href="../#hybrid">← На главную</a>${contact}</header>
    <main id="main"><div class="intro"><h1>Сайты<span aria-label="${projects.length} работ">${projects.length}</span></h1>
      <p>С разрешения заказчиков показываю сокращённые демоверсии. Часть графики и анимации изменена. Полные сайты и внутренние материалы клиентов остаются приватными.</p>
    </div><ul class="gallery" aria-label="Проекты">${projects.map(catalogCard).join('\n')}</ul></main>
  </div></body></html>`;
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
  const media = path.join(dir, 'media');
  await mkdir(media, {recursive: true});
  await cp(path.join(source, 'gallery.css'), path.join(dir, 'gallery.css'));
  for (const item of ['art','reader.css','reader.js']) await cp(path.join(source,'editions',item), path.join(dir,item), {recursive: true});

  const previewFiles = ['.webp', '-next.webp', '-mobile.webp'];
  for (const p of projects) {
    const room = path.join(dir,p.id);
    await mkdir(room, {recursive: true});
    if (p.framed) await cp(path.join(source,'demo',p.id), path.join(room,'edition'), {recursive: true});
    await writeFile(path.join(room,'index.html'), renderEdition(p));
    for (const suffix of previewFiles) {
      const file = p.id + suffix;
      await cp(path.join(source,'media',file), path.join(media,file));
    }
  }
  await writeFile(path.join(dir,'index.html'),gallery(telegram));
  await prune(media, new Set(projects.flatMap(p => previewFiles.map(suffix => p.id + suffix))));
  await prune(dir,new Set(['index.html','media','art','gallery.css','reader.css','reader.js',...projects.map(p=>p.id)]));
}
