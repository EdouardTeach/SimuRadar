'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2'
};

function startContentServer(root) {
  const contentRoot = path.resolve(root);
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let pathname;
      try { pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname); }
      catch { res.writeHead(400).end('Bad request'); return; }
      if (pathname === '/') pathname = '/index.html';
      const target = path.resolve(contentRoot, `.${pathname}`);
      if (!target.startsWith(contentRoot + path.sep)) {
        res.writeHead(403).end('Forbidden'); return;
      }
      fs.stat(target, (err, stat) => {
        if (err || !stat.isFile()) { res.writeHead(404).end('Not found'); return; }
        res.writeHead(200, {
          'Content-Type': mime[path.extname(target).toLowerCase()] || 'application/octet-stream',
          'X-Content-Type-Options': 'nosniff'
        });
        fs.createReadStream(target).pipe(res);
      });
    });
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, origin: `http://127.0.0.1:${server.address().port}` });
    });
  });
}

module.exports = { startContentServer };
