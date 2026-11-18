import { build } from 'esbuild';
import { runInNewContext } from 'node:vm';
import { telegramContact } from './telegram.js';
import { mkdir, copyFile, readFile, writeFile, cp, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'docs');
await mkdir(path.join(output, 'fonts'), { recursive: true });
await build({ entryPoints: [path.join(root, 'main.js')], outfile: path.join(output, 'app.js'), bundle: true, minify: true, format: 'iife', target: ['chrome110', 'safari16.4'], legalComments: 'linked' });
const contentWindow = {};
runInNewContext(await readFile(path.join(root, 'content.js'), 'utf8'), { window: contentWindow });
const telegram = telegramContact(contentWindow.PORTFOLIO_CONTENT?.telegram);
const telegramHref = telegram?.url.replaceAll('&', '&amp;').replaceAll('"', '&quot;') ?? '#contact';
const html = (await readFile(path.join(root, 'index.html'), 'utf8'))
  .replace('<!-- HERO -->', await readFile(path.join(root, 'hero.html'), 'utf8'))
  .replaceAll('{{telegramHref}}', () => telegramHref)
  .replaceAll('{{telegramLabel}}', telegram?.label ?? '')
  .replaceAll('{{withTelegram}}', telegram ? '' : 'hidden')
  .replaceAll('{{withoutTelegram}}', telegram ? 'hidden' : '');
await writeFile(path.join(output, 'index.html'), html);
await cp(path.join(root, '3d'), path.join(output, '3d'), { recursive: true });
for (const filename of ['hero.css', 'site.css', 'showcase.css', 'refinements.css', 'production.css', 'content.js', 'favicon.svg', 'robots.txt', 'sitemap.xml']) await copyFile(path.join(root, filename), path.join(output, filename));
let css = '';
for (const font of ['manrope', 'unbounded']) {
  const source = path.join(root, 'node_modules/@fontsource-variable', font);
  for (const subset of ['cyrillic', 'latin']) {
    const filename = `${font}-${subset}-wght-normal.woff2`;
    await copyFile(path.join(source, 'files', filename), path.join(output, 'fonts', filename));
    const family = font === 'manrope' ? 'Manrope Variable' : 'Unbounded Variable';
    const range = subset === 'cyrillic' ? 'U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116' : 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
    css += `@font-face{font-family:'${family}';font-style:normal;font-weight:200 900;font-display:swap;src:url('./fonts/${filename}') format('woff2');unicode-range:${range}}\n`;
  }
  await copyFile(path.join(source, 'LICENSE'), path.join(output, 'fonts', `${font}-LICENSE.txt`));
}
await writeFile(path.join(output, 'fonts.css'), css);
await copyFile(path.join(root, 'node_modules/three/LICENSE'), path.join(output, 'THREE-LICENSE.txt'));
await copyFile(path.join(root, 'node_modules/gsap/README.md'), path.join(output, 'GSAP-README.md'));
try { await access(path.join(root, 'assets')); await cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true }); } catch {}
await writeFile(path.join(output, '.nojekyll'), '');
console.log('Built docs');
