import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from './projects.mjs';

const source = path.dirname(fileURLToPath(import.meta.url));
const repo = path.dirname(source);

function esc(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function catalogCard(project, index) {
  const href = project.newTab ? project.url : project.id + '/';
  const tab = project.newTab ? ' target="_blank" rel="noopener" aria-label="' + esc(project.name) + ' (в новой вкладке)"' : '';
  return `<li class="work" id="work-${project.id}"><a href="${esc(href)}"${tab}>
    <div class="preview"><img src="./media/${project.id}.webp" alt="" width="1060" height="596" loading="${index < 4 ? 'eager' : 'lazy'}" decoding="async"></div>
    <span class="caption"><span>${esc(project.name)}</span><span class="arrow" aria-hidden="true">↗</span></span></a></li>`;
}

function gallery(telegram) {
  const contact = telegram ? `<a href="${esc(telegram.url)}" target="_blank" rel="noopener">Написать в Telegram ↗</a>` : '';
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Сайты — работы Алексея</title><meta name="description" content="Избранные сайты и дизайн-концепты Алексея. Откройте проект, чтобы посмотреть его в работе."><meta name="theme-color" content="#18181a">
  <link rel="canonical" href="https://alexden09-boop.github.io/alexey-portfolio/sites/"><link rel="icon" href="../favicon.svg">
  <link rel="stylesheet" href="../fonts.css"><link rel="stylesheet" href="./gallery.css?v=note-outline"></head>
  <body><a class="skip" href="#main">К проектам</a><div class="wrap">
    <header class="mast"><a href="../#hybrid">← На главную</a>${contact}</header>
    <main id="main"><div class="intro"><h1>Сайты<sup aria-label="${projects.length} работ">${projects.length}</sup></h1>
      <div class="note">
        <p>С разрешения заказчиков показываю клиентские сайты в сокращённом виде.</p>
        <p>В подборке лишь часть моей работы в дизайне и разработке. Другие проекты и материалы клиентов остаются закрытыми.</p>
        <svg class="note-outline" viewBox="0 0 560 180" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path pathLength="1" d="M90 13 C183 3 424 1 508 13 C546 18 556 36 555 78 C555 119 555 149 529 161 C492 177 354 177 236 174 C133 172 48 172 22 162 C5 155 5 129 5 85 C4 53 5 33 22 23 C42 13 76 12 104 11"/>
        </svg>
      </div>
    </div><ul class="gallery" aria-label="Проекты">${projects.map(catalogCard).join('\n')}</ul></main>
  </div></body></html>`;
}

function viewer(project) {
  const name = esc(project.name);
  const href = esc(project.url || './edition/');
  const content = project.newTab
    ? `<main class="external"><h1>${name}</h1><a href="${href}" target="_blank" rel="noopener">Открыть сайт ↗</a></main>`
    : `<iframe title="${name}" src="${href}" allowfullscreen></iframe>`;
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${name} — Сайты Алексея</title><link rel="icon" href="../../favicon.svg"><link rel="stylesheet" href="../../fonts.css"><link rel="stylesheet" href="../viewer.css"></head>
  <body><header><a class="back" href="../index.html#work-${project.id}"><span aria-hidden="true">←</span> Назад к сайтам</a>
  <span class="title">${name}</span><a class="open" href="${href}" target="_blank" rel="noopener">Открыть отдельно ↗</a></header>${content}</body></html>`;
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
  await mkdir(media, { recursive: true });
  for (const file of ['gallery.css', 'viewer.css']) await cp(path.join(source, file), path.join(dir, file));
  for (const project of projects) {
    const room = path.join(dir, project.id);
    await mkdir(room, { recursive: true });
    if (!project.url) await cp(path.join(source, 'demo', project.id), path.join(room, 'edition'), { recursive: true });
    await writeFile(path.join(room, 'index.html'), viewer(project));
    const file = project.id + '.webp';
    await cp(path.join(source, 'media', file), path.join(media, file));
  }
  await writeFile(path.join(dir, 'index.html'), gallery(telegram));
  await prune(media, new Set(projects.map(p => p.id + '.webp')));
  await prune(dir, new Set(['index.html', 'media', 'gallery.css', 'viewer.css', ...projects.map(p => p.id)]));
}
