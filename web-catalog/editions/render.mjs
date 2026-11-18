import { editions } from './content.mjs';

export function esc(value) {
  return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

function photo(id, file, alt, eager = false) {
  return `<img src="../art/${id}/${file}.webp" alt="${esc(alt)}" decoding="async" loading="${eager ? 'eager' : 'lazy'}">`;
}

function heroArt(p, e) {
  if (e.layout === 'red') return '<div class="beta-stamp" aria-hidden="true">Beta<br>Trading</div>';
  if (e.layout === 'signal') return '<div class="signal-graph" aria-hidden="true">' + Array.from({length: 22}, (_, i) => `<i style="--h:${Math.round(28 + 67 * Math.abs(Math.sin(i * .41)))}%;--i:${i}"></i>`).join('') + '</div>';
  if (e.layout === 'capsule') return '<div class="capsule-seal" aria-hidden="true"><i></i><i></i></div>';
  const garnish = e.layout === 'can' ? photo(p.id, 'cherry', '') : '';
  return photo(p.id, e.hero, e.alt, true) + garnish;
}

function collection(p, e) {
  const choices = e.choices.map(([label, asset, title, note], i) => `<section class="variant" id="variant-${i}" data-variant="${i}">
    ${asset ? photo(p.id, asset, title, i === 0) : ''}<div><h3>${esc(title)}</h3><p>${esc(note)}</p></div></section>`).join('');
  const controls = e.choices.map(([label], i) => `<button type="button" data-pick="${i}" aria-controls="variant-${i}" aria-pressed="${i === 0}">${esc(label)}</button>`).join('');
  return `<section id="collection" class="collection"><h2>${esc(e.section)}</h2>
    <div class="choices" role="group" aria-label="${esc(e.section)}" hidden>${controls}</div>
    <div class="variants">${choices}</div></section>`;
}

function capsule() {
  return `<section id="collection" class="collection capsule-editor"><h2>Ваше послание</h2><div class="compose">
  <form id="letter"><label>Что вы хотите сказать?<textarea name="message" required maxlength="600" rows="4" placeholder="Когда ты это прочитаешь…"></textarea></label>
  <label>День открытия<input name="date" required type="date"></label>
  <button class="action" type="submit">Посмотреть капсулу</button><small>Предпросмотр работает в этой вкладке. Послание никуда не отправляется.</small></form>
  <div id="letter-preview" tabindex="-1" hidden><p>Капсула откроется</p><h3></h3><blockquote></blockquote><button type="button" class="action">Изменить послание</button></div></div></section>`;
}

export function renderEdition(p) {
  const e = editions[p.id];
  const back = `<header class="reader"><a class="reader-back" href="../index.html#work-${p.id}"><span aria-hidden="true">←</span> Назад к сайтам</a><span class="reader-label">Демоверсия</span></header>`;
  const inside = p.framed
    ? `<main class="framed"><iframe title="${esc(p.name)}" src="./edition/index.html"></iframe></main>`
    : `<main class="site ${e.layout}"><header class="brandbar"><span>${esc(e.brand)}</span><a href="#collection">${esc(e.section)} <span aria-hidden="true">↓</span></a></header>
      <section class="cover"><div class="visual">${heroArt(p,e)}</div><div class="cover-copy"><h1>${esc(e.title)}</h1><p>${esc(e.intro)}</p><a class="action" href="#collection">${esc(e.action)} <span aria-hidden="true">↓</span></a></div></section>
      ${e.choices ? collection(p,e) : capsule()}</main>`;
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(p.name)} — демоверсия</title><meta name="description" content="${esc(p.kind)}. Открытая демоверсия проекта.">
  <link rel="icon" href="../../favicon.svg"><link rel="stylesheet" href="../../fonts.css"><link rel="stylesheet" href="../reader.css">
  <script defer src="../reader.js"></script></head><body${p.framed ? ' class="frame-page"' : ''}>${back}${inside}</body></html>`;
}
