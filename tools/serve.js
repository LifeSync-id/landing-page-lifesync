/**
 * Server statis sederhana untuk development/testing lokal.
 * Tanpa dependensi eksternal (hanya modul bawaan Node).
 *
 * Jalankan: node tools/serve.js [port] [host]
 * Contoh akses jaringan lokal: node tools/serve.js 8765 0.0.0.0
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.argv[2]) || Number(process.env.PORT) || 8765;
const HOST = process.argv[3] || process.env.HOST || '127.0.0.1';

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
    // Gunakan standar modern WHATWG URL API (menggantikan url.parse yang deprecated [DEP0169])
    const parsed = new URL(req.url, `http://${req.headers.host || '127.0.0.1'}`);
    let pathname = decodeURIComponent(parsed.pathname);
    if (pathname === '/') pathname = '/index.html';

    const filePath = path.join(ROOT, pathname);
    // Cegah path traversal di luar ROOT
    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end('<h1>404 - Not Found</h1><p>' + pathname + '</p>');
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, {
            'Content-Type': MIME[ext] || 'application/octet-stream',
            'Cache-Control': 'no-cache',
        });
        res.end(data);
    });
});

server.listen(PORT, HOST, () => {
    const displayHost = HOST === '0.0.0.0' || HOST === '::' ? 'localhost' : HOST;
    console.log(`LifeSync dev server berjalan di http://${displayHost}:${PORT}`);
    console.log(`Root: ${ROOT}`);

    if (HOST === '0.0.0.0' || HOST === '::') {
        const addresses = Object.values(os.networkInterfaces())
            .flat()
            .filter((net) => net && (net.family === 'IPv4' || net.family === 4) && !net.internal)
            .map((net) => net.address);

        if (addresses.length === 0) {
            console.log('Tidak ada alamat IPv4 lokal yang terdeteksi.');
        } else {
            addresses.forEach((address) => {
                console.log(`Jaringan lokal: http://${address}:${PORT}`);
            });
        }
        console.log('Pastikan Windows Firewall mengizinkan Node.js di jaringan privat.');
    }
});
