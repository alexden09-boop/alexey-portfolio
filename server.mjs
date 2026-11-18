import http from 'node:http';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'docs');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.glb': 'model/gltf-binary', '.xml': 'application/xml', '.wasm': 'application/wasm', '.json': 'application/json', '.jpg': 'image/jpeg', '.ktx2': 'image/ktx2', '.drc': 'application/octet-stream', '.woff': 'font/woff' };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    const name = pathname.endsWith('/') ? pathname + 'index.html' : pathname;
    const filename = path.resolve(root, `.${name}`);
    if (!filename.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    const body = await readFile(filename);
    res.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch { res.writeHead(404).end('Not found'); }
});
const port = Number(process.env.PORT || 4320);
server.listen(port, '127.0.0.1', () => console.log('http://127.0.0.1:' + port + '/'));
