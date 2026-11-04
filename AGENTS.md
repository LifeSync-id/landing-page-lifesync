# LifeSync Landing Page - Agent Guidelines & Project Instructions

Website product profile statis untuk LifeSync: HTML + Tailwind CSS (CDN) + CSS custom + vanilla JavaScript. Tanpa framework.

File ini adalah **sumber kanonik** aturan proyek ini.

## Struktur

- `index.html` — shell halaman; section dimuat via `fetch()` ke `<div id="section-*">`.
- `sections/` — partial HTML (header, hero, fitur, offline, ai, pricing, footer).
- `pages/` — halaman standalone per modul (mis. `mockup.html`).
- `app.js` — loader section + interaksi (navbar, scroll spy, smooth scroll, reveal).
- `style.css` — CSS custom (animasi reveal, scrollbar, utility).
- `tailwind-config.js` — konfigurasi Tailwind.
- `tools/` — skrip build, validate, serve, depth, browser test.
- `dist/` — hasil build; **jangan diedit manual**.

## Perintah

- `npm run validate` — validasi lalu build ke `dist/`.
- `npm run build` — build aset ke `dist/`.
- `npm run serve` — jalankan server lokal.
- `npm test` — validate + browser test.
- Deploy memakai `wrangler.json` (Cloudflare).

## Aturan

- Edit sumber di `sections/`, `pages/`, `style.css`, `app.js`; jangan menyentuh `dist/`.
- Tailwind lewat CDN; jangan menambah build step atau framework baru tanpa persetujuan.
- Copy berbahasa Indonesia, gaya santai, tanpa klaim berlebihan.
- Hindari desain generik/slop dan gimmick.
- Jangan membuat file dokumentasi baru kecuali diminta.
