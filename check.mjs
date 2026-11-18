import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = new URL(process.env.SITE_URL || 'http://127.0.0.1:4320/');
const sceneURL = new URL('3d/index.html', base);
const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || undefined,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});
try {
  const page = await browser.newPage({viewport: {width: 1280, height: 800}, reducedMotion: 'reduce'});
  const errors = [], requests = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {
    if (response.status() >= 400) errors.push(response.status() + ' ' + response.url());
  });
  page.on('request', request => { requests.push(request.url()); });
  await page.addInitScript(() => {
    window.sceneDraws = 0;
    const draw = WebGL2RenderingContext.prototype.drawElements;
    WebGL2RenderingContext.prototype.drawElements = function (...args) {
      window.sceneDraws++;
      return draw.apply(this, args);
    };
  });
  const response = await page.goto(base.href);
  assert.equal(response.status(), 200);
  await page.waitForFunction(() => document.documentElement.dataset.ready === 'true');
  await page.waitForFunction(() => window.portfolioStatus().renderer === 'webgl' &&
    window.portfolioStatus().documents.length === 4);
  assert.ok(await page.evaluate(() => window.portfolioStatus().documents.every(book => book.progress === 1)));
  const telegram = page.locator('a[data-telegram-link]');
  assert.deepEqual(await telegram.evaluateAll(links => links.map(link => link.href)),
    ['https://t.me/Alex_codlay', 'https://t.me/Alex_codlay']);
  for (const id of ['sites', 'ads', 'apps']) {
    const link = page.locator('[data-document="' + id + '"]');
    await link.click();
    assert.equal(new URL(page.url()).hash, '#service-' + id);
  }
  await page.locator('.story-start').click();
  await page.waitForFunction(() => window.portfolioStatus().storyPhase === 4);
  await page.locator('[data-document="3d"]').click();
  await page.waitForURL(url => url.pathname === sceneURL.pathname);
  await page.waitForFunction(() => window.sceneDraws > 80, null, {timeout: 60000});
  assert.ok(requests.some(url => url.includes(sceneURL.pathname.replace('index.html', 'assets/geometries/')) && url.endsWith('.drc')));
  assert.ok(requests.some(url => url.endsWith('.ktx2')));
  assert.ok(!requests.some(url => /\/audio\/|\.ogg|audioworker/i.test(url)));
  assert.deepEqual(requests.filter(url => url.startsWith(base.origin + '/') && !url.startsWith(base.href)), []);
  await page.setViewportSize({width: 390, height: 844});
  await page.getByRole('link', {name: 'Назад на визитку'}).click();
  await page.waitForURL(new URL('#hybrid', base).href);
  await page.locator('.menu-toggle').click();
  await page.locator('#mobile-menu a[href="#contact"]').click();
  await page.waitForURL(new URL('#contact', base).href);
  assert.equal(await page.locator('.contact-telegram').getAttribute('href'), 'https://t.me/Alex_codlay');
  assert.deepEqual(errors, []);
  await page.close();

  const motion = await browser.newPage({ viewport: { width: 1050, height: 760 }, reducedMotion: 'no-preference' });
  motion.on('pageerror', error => errors.push(error.message));
  motion.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  // Confirm the transition really submits the particle geometry for each edition.
  await motion.addInitScript(() => {
    const draw = WebGL2RenderingContext.prototype.drawArrays;
    WebGL2RenderingContext.prototype.drawArrays = function (mode, ...args) {
      const edition = this.canvas.closest('.folio-transition')?.dataset.book;
      if (edition && mode === this.POINTS && !sessionStorage.getItem('qa-film-' + edition)) {
        sessionStorage.setItem('qa-film-' + edition, 'drawn');
      }
      return draw.call(this, mode, ...args);
    };
  });
  await motion.goto(base.href);
  await motion.waitForFunction(() => window.portfolioStatus?.().documents.filter(b => b.progress === 1).length === 4);
  for (const edition of ['sites', 'ads', 'apps', '3d']) {
    const link = motion.locator('[data-document="' + edition + '"]');
    await link.focus();
    await motion.keyboard.press('Enter');
    if (edition === '3d') {
      await motion.waitForURL(sceneURL.href);
      await motion.waitForFunction(() => !document.documentElement.classList.contains('from-folio'));
    } else {
      await motion.waitForURL(new URL('#service-' + edition, base).href);
      await motion.locator('.folio-transition').waitFor({ state: 'detached' });
      assert.equal(await motion.evaluate(() => document.activeElement.id), 'service-' + edition);
      assert.ok(await motion.locator('#scene > canvas:not(.folio-snapshot)').isVisible());
      await motion.goBack();
      await motion.waitForURL(base.href);
    }
    assert.equal(await motion.evaluate(key => sessionStorage.getItem('qa-film-' + key), edition), 'drawn');
  }
  assert.deepEqual(errors, []);
  console.log('Checked four animated folios, particle draws, keyboard navigation and browser history.');
  console.log('Checked portfolio, navigation, presentation, Telegram links, live 3D rendering and return at ' + base.href);
} finally { await browser.close(); }
