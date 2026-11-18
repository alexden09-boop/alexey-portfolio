import { telegramContact } from './telegram.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createSculpture } from './scene.js';
import { createProduct } from './product.js';

gsap.registerPlugin(ScrollTrigger);
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const desktop = matchMedia('(min-width: 901px)');
const storage = { get(key) { try { return localStorage.getItem(key); } catch { return null; } }, set(key, value) { try { localStorage.setItem(key, value); } catch {} }, remove(key) { try { localStorage.removeItem(key); } catch {} } };
const state = { concept: 'hybrid', paused: reduced.matches, time: 0, scroll: 0, x: 0, y: 0, tx: 0, ty: 0, dragging: false, dragRotation: 0, dragStart: 0, frames: 0, heroVisible: true };
state.heroFocus = null;
const choreography = { arrival: 1, beat: 0 };
const showcaseProgress = { value: 0 };
let product = null;
let studyVisible = false;
let storyTimeline = null;
let storyStarted = false;
let counterTimeline = null;
let counterVisible = false;
let toolkitTimelines = [];
const toolkitVisible = new Set();
let storyMobile = innerWidth <= 760;
let storyPhase = -1;
const codeState = { count: 0 };
const storyCode = [
  ["const ", "speaker", " = new Mesh("],
  ["  body.geometry,"],
  ["  brushedAluminium"],
  [");"],
  [""],
  ["scene", ".add", "(speaker);"],
  ["camera", ".lookAt", "(speaker.position);"],
  ["renderer", ".render", "(scene, camera);"],
];
const codeLength = storyCode.flat().join('').length + storyCode.length - 1;
const assemblyStart = 9.86;
const assemblySpeed = 2.2;
const assemblyDuration = 6.8;
// The volume dial is the last part to seat, at 77% of the model animation.
const pageReveal = assemblyStart + .77 * assemblyDuration / assemblySpeed;
const chapters = [
  { at: 0, name: 'Переписка', caption: 'Для запуска колонки нужна страница. В чате уточняем задачу и получаем чертёж.' },
  { at: 4.2, name: 'План страницы', caption: 'На первом экране покажем саму колонку. Ниже разместим материалы корпуса и характеристики.' },
  { at: 7.15, name: 'Пишу код', caption: 'Задаю материал корпуса, ставлю камеру и добавляю модель в сцену.' },
  { at: 10.1, name: 'Сборка', caption: 'Устанавливаю динамики, закрываю их решёткой и ставлю на место регулятор громкости.' },
  { at: pageReveal + 1.42, name: 'Готовая страница', caption: 'Готовый сайт SONA. Та же колонка, с которой началась переписка, теперь на первом экране.' },
];
const codeTokens = [];
let previousCount = -1;
function createCodeLines() {
  const code = $('.code-content');
  let offset = 0;
  storyCode.forEach((line, row) => {
    if (row) { code.append(document.createTextNode('')); codeTokens.push({ node: code.lastChild, value: '\n', offset: offset++ }); }
    line.forEach((value, column) => {
      const token = document.createElement('span');
      token.className = row === 0 && column === 0 ? 'syntax-keyword' : (column === 1 ? 'syntax-method' : 'syntax-base');
      code.append(token);
      codeTokens.push({ node: token, value, offset });
      offset += value.length;
    });
  });
}
createCodeLines();
let sculpture = null;
let motionContext = null;
let intro = null;
let dialogReturn = null;
let menuOpen = false;

function canAnimate() { return !state.paused && !document.hidden && !menuOpen && !$('dialog[open]'); }
function syncMotion() {
  const paused = !canAnimate();
  if (intro && intro.progress() < 1) intro.paused(paused);
  storyTimeline?.paused(paused || !studyVisible);
  counterTimeline?.paused(paused || !counterVisible);
  toolkitTimelines.forEach((timeline, index) => timeline.paused(paused || !toolkitVisible.has(index)));
}

function setupMotion(entrance = false, restart = false) {
  const storyTime = storyTimeline?.time() || 0;
  const reelTimes = toolkitTimelines.map(timeline => timeline.time());
  const counterTime = restart ? 0 : counterTimeline?.time() || 0;
  motionContext?.revert();
  motionContext = null;
  intro = null;
  storyTimeline = null;
  counterTimeline = null;
  toolkitTimelines = [];
  choreography.arrival = 1;
  choreography.beat = 0;
  showcaseProgress.value = 0;
  product?.frame(0, true);
  motionContext = gsap.context(() => {
    storyMobile = innerWidth <= 760;
    if (storyStarted) {
      buildProductionStory();
      storyTimeline.time(state.paused ? storyTimeline.duration() : storyTime).pause();
      product?.frame(showcaseProgress.value, true);
    }
    if (state.paused) return;
    if (entrance) {
      intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.from('.hybrid-line', { y: 45, opacity: 0, stagger: .14, duration: 1.2 }, .1)
        .from('.scene', { opacity: 0, duration: 1.8 }, .15)
        .from(choreography, { arrival: 0, duration: 2.8, ease: 'sine.out' }, .15)
        .from('.hybrid-intro', { y: 24, opacity: 0, duration: 1 }, .7)
        .from('.hybrid-actions', { y: 18, opacity: 0, duration: .9 }, .85);
    }
    counterTimeline = gsap.timeline({ paused: true });
    $$('.digit-strip').forEach((strip, index) => { const end = Number(strip.dataset.end); counterTimeline.fromTo(strip, { y: 0, yPercent: 0 }, { y: 0, yPercent: -end / (end + 1) * 100, duration: [3.4, 3.9, 3.65][index], ease: 'power2.inOut' }, [0, .12, .28][index]); });
    counterTimeline.fromTo('.project-total', { y: 18 }, { y: 0, duration: 3.6, ease: 'power2.out' }, 0)
      .fromTo('.total-plus', { rotation: -10, y: 6 }, { rotation: 0, y: 0, duration: 3.5, ease: 'power2.inOut' }, .2)
      .time(counterTime).pause();
    buildToolkitMotion(reelTimes);

    for (const item of $$('.service-item')) {
      const motion = gsap.timeline({ scrollTrigger: { trigger: item, start: 'top 98%', end: 'center 65%', scrub: .65 } });
      motion.from(item, { '--rule-progress': .08, ease: 'sine.out', duration: 1 }, 0)
        .from($('.service-art', item), { '--turn': '-46deg', '--spread': '12px', y: 10, duration: 1 }, 0);
    }
    for (const step of $$('.process-list li')) {
      gsap.timeline({ scrollTrigger: { trigger: step, start: 'top 95%', end: 'center 65%', scrub: .7 } })
        .from(step, { '--step-progress': .02, duration: 1 }, 0)
        .from($('.step-number', step), { y: 16, duration: 1 }, 0)
        .from($('h4', step), { x: 11, duration: 1 }, 0);
    }
  });
  syncMotion();
}

function setPaused(paused) {
  state.paused = paused;
  if (paused) for (const block of $$('.scroll-arrival')) block.classList.remove('scroll-arrival');
  document.body.classList.toggle('motion-paused', paused);
  setupMotion(false, !paused);
  ScrollTrigger.refresh();
  sculpture?.frame(0);
}
for (const link of $$('[data-document]')) {
  const focus = () => { state.heroFocus = link.dataset.document; sculpture?.frame(0); };
  const blur = () => { if (state.heroFocus === link.dataset.document) state.heroFocus = null; sculpture?.frame(0); };
  link.addEventListener('pointerenter', focus);
  link.addEventListener('pointerleave', () => { if (document.activeElement !== link) blur(); });
  link.addEventListener('focus', focus);
  link.addEventListener('blur', blur);
  link.addEventListener('click', () => {
    blur();
    if (link.hash) $(link.hash)?.focus({ preventScroll: true });
  });
}
function updateStory() {
  const time = storyTimeline?.time() || 0;
  const active = chapters.findLastIndex(chapter => time >= chapter.at);
  if (storyPhase !== active) {
    storyPhase = active;
    $('.showcase-stage').dataset.phase = String(active);
    $('#story-heading').textContent = chapters[active].name;
    $('#story-caption').textContent = chapters[active].caption;
  }
  const count = Math.floor(codeState.count);
  if (count !== previousCount) {
    for (const { node, value, offset } of codeTokens) {
      const part = value.slice(0, Math.max(0, count - offset));
      if (node.textContent !== part) node.textContent = part;
    }
    previousCount = count;
  }
  if (state.paused) product?.frame(showcaseProgress.value, true);
}
function trackDrawingFlight() {
  const stage = $('.film-scenes');
  const flight = $('.drawing-flight');
  const source = $('.drawing-source');
  const target = $('.drawing-target');
  function center(node) {
    let x = node.offsetWidth / 2, y = node.offsetHeight / 2;
    for (let parent = node; parent && parent !== stage; parent = parent.offsetParent) {
      x += parent.offsetLeft;
      y += parent.offsetTop;
    }
    return { x, y };
  }
  function measure() {
    const from = center(source), to = center(target);
    flight.style.width = target.offsetWidth + 'px';
    flight.style.height = target.offsetHeight + 'px';
    flight.style.setProperty('--from-x', from.x + 'px');
    flight.style.setProperty('--from-y', from.y + 'px');
    flight.style.setProperty('--dx', (to.x - from.x) + 'px');
    flight.style.setProperty('--dy', (to.y - from.y) + 'px');
    flight.style.setProperty('--start-w', source.offsetWidth / Math.max(1, target.offsetWidth));
    flight.style.setProperty('--start-h', source.offsetHeight / Math.max(1, target.offsetHeight));
  }
  measure();
  const observer = new ResizeObserver(measure);
  [stage, source, target].forEach(node => observer.observe(node));
}

function buildProductionStory() {
  const [chat, plan, editor, assembly] = $$('.film-scene');
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'sine.inOut' }, onUpdate: updateStory });
  storyTimeline = tl;
  storyPhase = -1;
  gsap.set([plan, editor, assembly], { autoAlpha: 0, scale: .98, y: 10 });
  gsap.set(chat, { autoAlpha: 1, scale: 1, y: 0 });
  gsap.set('.chat-bubble, .chat-typing, .system-preview, .assembly-drawing, .editor-preview, .drawing-target', { autoAlpha: 0 });
  gsap.set('.drawing-flight', { autoAlpha: 0, '--travel': 0 });
  gsap.set('.plan-draw', { clipPath: 'inset(0 100% 0 0)' });
  gsap.set('.dimension-rule', { scaleX: 0 });
  gsap.set('.model-panel', { xPercent: -51, scale: 1.72 });
  gsap.set('.film-site', { scale: 1.02 });
  codeState.count = 0;
  showcaseProgress.value = 0;
  const [incoming, reply, attachment] = $$('.chat-bubble');
  function message(element, at) {
    tl.fromTo(element, { autoAlpha: 0, y: 9, scale: .975 }, { autoAlpha: 1, y: 0, scale: 1, duration: .46, ease: 'power2.out', immediateRender: false }, at);
  }
  function dissolve(outgoing, incoming, at) {
    tl.to(outgoing, { autoAlpha: 0, scale: 1.018, y: -8, duration: .72 }, at - .45)
      .to(incoming, { autoAlpha: 1, scale: 1, y: 0, duration: .78 }, at - .36);
  }
  for (const chapter of chapters.slice(1)) {
    tl.to('.film-caption', { opacity: 0, y: -4, duration: .25 }, chapter.at - .25)
      .fromTo('.film-caption', { opacity: 0, y: 5 }, { opacity: 1, y: 0, duration: .37, immediateRender: false }, chapter.at);
  }

  tl.fromTo('.chat-window', { scale: .94, y: 7 }, { scale: 1, y: 0, duration: 2, ease: 'power2.out' }, 0)
    .fromTo('.film-editor', { rotateZ: -.6, scale: .985 }, { rotateZ: 0, scale: 1, duration: 1.8, immediateRender: false }, 7);
  message(incoming, .15);
  tl.to('.chat-typing', { autoAlpha: 1, duration: .2 }, .76)
    .fromTo('.chat-typing i', { y: 0 }, { y: -3, stagger: .08, duration: .21, repeat: 1, yoyo: true }, .91)
    .to('.chat-typing', { autoAlpha: 0, duration: .2 }, 1.53);
  message(reply, 1.65);
  message(attachment, 2.66);
  tl.to('.drawing-flight', { autoAlpha: 1, duration: .18 }, 3.46)
    .to('.drawing-source', { opacity: 0, duration: .18 }, 3.47)
    .to('.drawing-flight', { '--travel': 1, duration: 1.20, ease: 'power2.inOut' }, 3.60);
  dissolve(chat, plan, chapters[1].at);
  tl.to('.drawing-target', { autoAlpha: 1, duration: .25 }, 4.76)
    .to('.drawing-flight', { autoAlpha: 0, duration: .32 }, 4.8)
    .to('.plan-draw', { clipPath: 'inset(0 0% 0 0)', duration: .68, stagger: .22 }, 4.52)
    .to('.dimension-rule', { scaleX: 1, duration: .64 }, 5.24)
    .fromTo('.draft-text i', { scaleX: .35, transformOrigin: 'left' }, { scaleX: 1, duration: .55, stagger: .12 }, 5.38);

  dissolve(plan, editor, chapters[2].at);
  tl.to(codeState, { count: codeLength * .49, duration: .91, ease: 'none' }, 7.37)
    .to(codeState, { count: codeLength, duration: 1.15, ease: 'none' }, 8.44)
    .to('.editor-preview', { autoAlpha: 1, duration: .65 }, 8.27)
    .fromTo('.editor-preview .speaker-print', { rotateY: -32 }, { rotateY: 10, duration: 1.18 }, 8.58);

  dissolve(editor, assembly, chapters[3].at);
  gsap.set('.fallback-drivers', { xPercent: -17 });
  gsap.set('.product-fallback i', { xPercent: -72, rotateY: -21, opacity: .52 });
  gsap.set('.fallback-dial', { yPercent: -240 });

  const assemblyShot = gsap.timeline({ defaults: { ease: 'sine.inOut' } });
  assemblyShot.fromTo(showcaseProgress, { value: 0 }, { value: 1, duration: assemblyDuration, ease: 'none', immediateRender: false }, 0)
    .to('.assembly-drawing', { autoAlpha: 1, duration: .68 }, .56)
    .fromTo('.assembly-drawing span', { yPercent: 9, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: .3, duration: .64 }, .7)
    .to('.assembly-drawing', { autoAlpha: 0, duration: .62 }, 4.42)
    .to('.fallback-drivers', { xPercent: 0, duration: 1.3 }, 1.44)
    .to('.product-fallback i', { xPercent: 0, rotateY: 0, opacity: 1, duration: 1.7 }, 2.94)
    .to('.fallback-dial', { yPercent: 0, duration: .95 }, 4.14);
  tl.add(assemblyShot.timeScale(assemblySpeed), assemblyStart)
    .to('.model-panel', { xPercent: 0, scale: 1, duration: 1.95, ease: 'power2.inOut' }, pageReveal)
    .to('.system-preview', { autoAlpha: 1, duration: 1.25 }, pageReveal + .45)
    .to('.film-site', { scale: .96, duration: 1.64 }, pageReveal + .44)
    .fromTo('.preview-header,.preview-copy,.preview-details > div', { y: 7, opacity: 0 }, { y: 0, opacity: 1, duration: .64, stagger: .15, immediateRender: false }, pageReveal + .69)
    .to({}, { duration: .8 }, pageReveal + 2.57);
  updateStory();
}
$('.story-start').addEventListener('click', () => {
  if (storyStarted) return;
  storyStarted = true;
  $('#story-presentation').hidden = false;
  $('.showcase-stage').dataset.story = 'started';
  trackDrawingFlight();
  $('.story-start').hidden = true;
  try {
    product = createProduct();
  } catch {
    const scene = $('#study-scene');
    scene.classList.remove('ready');
    scene.dataset.renderer = 'fallback';
    $('canvas', scene)?.remove();
  }
  motionContext.add(() => buildProductionStory());
  if (state.paused) storyTimeline.progress(1).pause();
  $('#studies-title').focus({ preventScroll: true });
  syncMotion();
});
$('.story-replay').addEventListener('click', () => { storyTimeline?.time(0).pause(); syncMotion(); });

function buildToolkitMotion(reelTimes) {
  toolkitTimelines = $$('.toolkit-group').map((group, index) => {
    const reel = $('.toolkit-reel', group);
    const names = $$('li', group);
    if (reel.childElementCount === 1) {
      for (const item of [...names.slice(1), names[0]]) {
        const row = reel.firstElementChild.cloneNode(false);
        row.textContent = item.textContent;
        reel.append(row);
      }
    }
    const timeline = gsap.timeline({ paused: true, repeat: -1 });
    timeline.fromTo(reel, { yPercent: 0 }, {
      yPercent: -100 * names.length / reel.childElementCount,
      duration: names.length,
      ease: 'none',
    });
    return timeline.time(reelTimes[index] ?? index * .17);
  });
}
reduced.addEventListener('change', event => setPaused(event.matches));
desktop.addEventListener('change', () => { closeMenu(); setupMotion(false); ScrollTrigger.refresh(); });
window.addEventListener('resize', () => {
  if (storyMobile !== (innerWidth <= 760)) { setupMotion(false); ScrollTrigger.refresh(); }
});
document.addEventListener('visibilitychange', syncMotion);

function closeMenu(restore = false) {
  menuOpen = false;
  $('#mobile-menu').hidden = true;
  $('.menu-toggle').setAttribute('aria-expanded', 'false');
  $('.menu-toggle').setAttribute('aria-label', 'Открыть меню');
  document.body.classList.remove('menu-open');
  $('#main').inert = false;
  $('.site-footer').inert = false;
  if (restore) $('.menu-toggle').focus();
  syncMotion();
}
$('.menu-toggle').addEventListener('click', () => {
  if (menuOpen) { closeMenu(true); return; }
  menuOpen = true;
  $('#mobile-menu').hidden = false;
  $('.menu-toggle').setAttribute('aria-expanded', 'true');
  $('.menu-toggle').setAttribute('aria-label', 'Закрыть меню');
  document.body.classList.add('menu-open');
  $('#main').inert = true;
  $('.site-footer').inert = true;
  $('#mobile-menu a').focus();
  syncMotion();
});
for (const a of $$('#mobile-menu a')) a.addEventListener('click', () => closeMenu());
document.addEventListener('keydown', event => {
  if (!menuOpen) return;
  if (event.key === 'Escape') { event.preventDefault(); closeMenu(true); }
  if (event.key === 'Tab') {
    const items = [...$$('.site-header a,.site-header button'), ...$$('#mobile-menu a')].filter(el => el.getClientRects().length);
    const index = items.indexOf(document.activeElement);
    if (event.shiftKey && index <= 0) { event.preventDefault(); items.at(-1).focus(); }
    if (!event.shiftKey && index === items.length - 1) { event.preventDefault(); items[0].focus(); }
  }
});

function showDialog(dialog) {
  const active = document.activeElement;
  closeMenu();
  dialogReturn = active;
  dialog.showModal();
  dialog.scrollTop = 0;
  syncMotion();
}
for (const button of $$('[data-open="brief"]')) button.addEventListener('click', () => showDialog($('#brief-dialog')));
for (const button of $$('[data-scroll]')) button.addEventListener('click', () => document.getElementById(button.dataset.scroll)?.scrollIntoView({ behavior: state.paused ? 'instant' : 'smooth' }));
for (const dialog of $$('dialog')) {
  $('.close-dialog', dialog).addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { syncMotion(); dialogReturn?.focus({ preventScroll: true }); });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
}

// The brief remains on the visitor's device until they choose a copy/download action.
const draftKey = 'alexey-project-draft-v1';
const serviceInputs = $$('#brief-form input[name="service"]');
function currentDraft() { return { services: serviceInputs.filter(el => el.checked).map(el => el.value), idea: $('#idea').value.trim(), timing: $('#timing').value.trim() }; }
function saveDraft() { storage.set(draftKey, JSON.stringify(currentDraft())); }
try {
  const draft = JSON.parse(storage.get(draftKey) || 'null');
  if (draft && typeof draft === 'object') {
    serviceInputs.forEach(input => { input.checked = Array.isArray(draft.services) && draft.services.includes(input.value); });
    if (typeof draft.idea === 'string') $('#idea').value = draft.idea.slice(0, 3000);
    if (typeof draft.timing === 'string') $('#timing').value = draft.timing.slice(0, 150);
  }
} catch { storage.remove(draftKey); }
$('#brief-form').addEventListener('input', saveDraft);
function getBrief() {
  const draft = currentDraft();
  if (!draft.services.length && !draft.idea) { $('#brief-status').textContent = 'Выберите направление или коротко опишите идею.'; $('#idea').focus(); return null; }
  return `Алексей, привет! Хочу обсудить проект.\n\nНаправления: ${draft.services.join(', ') || 'Определим вместе'}.${draft.idea ? `\n\nИдея:\n${draft.idea}` : ''}${draft.timing ? `\n\nСроки: ${draft.timing}` : ''}`;
}
function downloadBrief(text) {
  const url = URL.createObjectURL(new Blob(['\uFEFF' + text], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Мой проект — бриф для Алексея.txt';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  $('#brief-status').textContent = 'Бриф сохранён в файл. Можно приложить его к сообщению.';
}
$('#brief-form').addEventListener('submit', async event => {
  event.preventDefault();
  const text = getBrief();
  if (!text) return;
  try { await navigator.clipboard.writeText(text); $('#brief-status').textContent = 'Бриф скопирован. Можно вставить его в сообщение.'; }
  catch { downloadBrief(text); }
});
$('.download-brief').addEventListener('click', () => { const text = getBrief(); if (text) downloadBrief(text); });
$('.clear-draft').addEventListener('click', () => {
  $('#brief-form').reset();
  storage.remove(draftKey);
  $('#brief-status').textContent = 'Черновик очищен.';
});

const supplied = window.PORTFOLIO_CONTENT && typeof window.PORTFOLIO_CONTENT === 'object' ? window.PORTFOLIO_CONTENT : {};
function safeURL(value, relative = false) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value, location.href);
    if (['https:', 'http:'].includes(url.protocol)) return url.href;
    if (relative && url.protocol === 'file:' && !/^[a-z]+:/i.test(value)) return url.href;
  } catch {}
  return null;
}
function addContact(label, url) { const a = document.createElement('a'); a.textContent = label; a.href = url; if (url.startsWith('https:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; } $('#contact-links').append(a); $('#contact-links').hidden = false; }
const telegram = telegramContact(supplied.telegram);
for (const link of $$('[data-telegram-link]')) {
  link.hidden = !telegram;
  if (telegram) link.href = telegram.url;
  else link.removeAttribute('href');
}
$('.contact-invitation').hidden = !telegram;
$('[data-telegram-label]').textContent = telegram?.label ?? '';
for (const element of $$('[data-without-telegram]')) element.hidden = Boolean(telegram);
if (typeof supplied.email === 'string' && /^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(supplied.email)) addContact(supplied.email, `mailto:${encodeURIComponent(supplied.email)}`);

const projects = Array.isArray(supplied.projects) ? supplied.projects.filter(p => p && typeof p.title === 'string' && p.title.trim() && typeof p.description === 'string') : [];
if (projects.length) {
  $('#projects').hidden = false;
  const categories = ['Все', ...new Set(projects.map(p => p.category).filter(v => typeof v === 'string' && v))];
  function openProject(project) {
    $('#project-title').textContent = project.title;
    $('.project-detail-description').textContent = project.description;
    $('.project-detail-tags').textContent = Array.isArray(project.tags) ? project.tags.filter(t => typeof t === 'string').join(' / ') : '';
    const img = $('.project-detail-image');
    const src = safeURL(project.image, true);
    img.hidden = !src;
    if (src) { img.src = src; img.alt = project.title; img.onerror = () => { img.hidden = true; }; } else img.removeAttribute('src');
    const a = $('.project-detail-link');
    const href = safeURL(project.url);
    a.hidden = !href;
    if (href) a.href = href; else a.removeAttribute('href');
    showDialog($('#project-dialog'));
  }
  function renderProjects(category) {
    const visible = projects.filter(project => category === 'Все' || project.category === category);
    $('.project-grid').replaceChildren();
    for (const project of visible) {
      const button = document.createElement('button'); button.className = 'project-card';
      const src = safeURL(project.image, true);
      if (src) { const img = document.createElement('img'); img.src = src; img.alt = project.title; img.loading = 'lazy'; img.onerror = () => { img.remove(); }; button.append(img); }
      const title = document.createElement('h3'); title.textContent = project.title;
      const label = document.createElement('p'); label.textContent = project.category || 'Проект';
      button.append(title, label); button.addEventListener('click', () => openProject(project)); $('.project-grid').append(button);
    }
    for (const button of $$('.project-filters button')) button.setAttribute('aria-pressed', String(button.textContent === category));
    $('.project-count').textContent = `Показано проектов: ${visible.length}`;
    ScrollTrigger.refresh();
  }
  for (const category of categories) { const button = document.createElement('button'); button.textContent = category; button.setAttribute('aria-pressed', String(category === 'Все')); button.addEventListener('click', () => renderProjects(category)); $('.project-filters').append(button); }
  for (const nav of $$('.desktop-nav,#mobile-menu')) { const a = document.createElement('a'); a.href = '#projects'; a.textContent = 'Работы'; a.addEventListener('click', () => closeMenu()); nav.prepend(a); }
  renderProjects('Все');
}

// Play the entrance at the bottom edge. Jumps directly to a section stay immediate.
const arrivalObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    const { target, rootBounds, boundingClientRect } = entry;
    arrivalObserver.unobserve(target);
    if (!rootBounds || state.paused || target.matches(':target, :focus-within')) continue;
    const entryBand = Math.min(140, rootBounds.height * .2);
    if (boundingClientRect.top >= rootBounds.bottom - entryBand) {
      target.classList.add('scroll-arrival');
    }
  }
});
const viewportHeight = document.documentElement.clientHeight;
for (const block of $$('.expertise-intro, .service-item, .collaboration-intro, .questions-list article, #contact-title')) {
  if (block.getBoundingClientRect().top >= viewportHeight) arrivalObserver.observe(block);
}

const serviceObserver = new IntersectionObserver(entries => {
  for (const entry of entries) entry.target.classList.toggle('in-view', entry.isIntersecting);
});
$$('.service-item').forEach(item => serviceObserver.observe(item));
const navObserver = new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting) for (const a of $$('.desktop-nav a')) { if (a.hash === '#' + entry.target.id) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }
}, { rootMargin: '-20% 0px -60% 0px' });
for (const section of $$('main > section')) if (!section.hidden) navObserver.observe(section);
window.addEventListener('scroll', () => {
  $('.site-header').classList.toggle('scrolled', scrollY > 30);
  if (!state.paused) state.scroll = Math.min(1, scrollY / innerHeight);
}, { passive: true });
document.addEventListener('pointermove', event => {
  if (!canAnimate() || event.pointerType === 'touch') return;
  state.tx = event.clientX / innerWidth * 2 - 1;
  state.ty = event.clientY / innerHeight * 2 - 1;
}, { passive: true });
try { sculpture = createSculpture(state, choreography); }
catch { $('#scene').classList.remove('ready'); $('#scene').dataset.renderer = 'fallback'; $('#scene canvas')?.remove(); }
if (!sculpture) $('#scene').setAttribute('aria-label', 'Буква А и документы с направлениями работы');
const studyObserver = new IntersectionObserver(([entry]) => { studyVisible = entry.isIntersecting && entry.intersectionRatio >= .25; if (studyVisible) product?.frame(showcaseProgress.value, true); syncMotion(); }, { threshold: [0, .25] });
studyObserver.observe($('.showcase-stage'));
const counterObserver = new IntersectionObserver(([entry]) => { counterVisible = entry.isIntersecting && entry.intersectionRatio >= .2; syncMotion(); }, { threshold: [0, .2] });
counterObserver.observe($('#experience'));
const toolkitGroups = $$('.toolkit-group');
const toolkitObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const index = toolkitGroups.indexOf(entry.target);
    if (entry.isIntersecting && entry.intersectionRatio >= .15) toolkitVisible.add(index);
    else toolkitVisible.delete(index);
  }
  syncMotion();
}, { threshold: [0, .15] });
toolkitGroups.forEach(group => toolkitObserver.observe(group));
const heroObserver = new IntersectionObserver(([entry]) => { state.heroVisible = entry.isIntersecting; });
heroObserver.observe($('.hybrid-hero'));
gsap.ticker.add((time, delta) => {
  if (!canAnimate()) return;
  if (studyVisible) product?.frame(showcaseProgress.value);
  if (state.heroVisible) {
    state.time += Math.min(delta / 1000, .05);
    sculpture?.frame(Math.min(delta / 1000, .05));
  }
});
document.body.classList.toggle('motion-paused', state.paused);
setupMotion(true);
document.fonts.ready.then(() => { sculpture?.resize(); ScrollTrigger.refresh(); document.documentElement.dataset.ready = 'true'; });
Object.defineProperty(window, 'portfolioStatus', { value: () => ({ paused: state.paused, frames: state.frames, heroBounds: sculpture?.bounds(), documents: sculpture?.documentStatus() || [], renderer: $('#scene').dataset.renderer, heroVisible: state.heroVisible, projects: projects.length, scrollScenes: ScrollTrigger.getAll().length, studyRenderer: $('#study-scene').dataset.renderer, studyProgress: showcaseProgress.value, studyFrames: product?.frames || 0, storyTime: storyTimeline?.time() || 0, storyDuration: storyTimeline?.duration() || 0, storyPhase, storyPlaying: storyTimeline?.isActive() || false, counterTime: counterTimeline?.time() || 0, counterPlaying: counterTimeline?.isActive() || false, toolkitTimes: toolkitTimelines.map(timeline => timeline.totalTime()), toolkitPlaying: toolkitTimelines.map(timeline => timeline.isActive()) }) });
