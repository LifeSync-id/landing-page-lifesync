/**
 * Validator HTML tag-balance + asset/link checker
 * Jalankan: node tools/validate.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr']);

const FILES = [
    'index.html',
    'sections/header.html',
    'sections/hero.html',
    'sections/fitur.html',
    'sections/offline.html',
    'sections/ai.html',
    'sections/pricing.html',
    'sections/kontak.html',
    'sections/footer.html',
    'pages/nutrisi.html',
    'pages/keuangan.html',
    'pages/kalender.html',
    'pages/memento.html',
    'pages/fitur-todo.html',
    'pages/fitur-notes.html',
    'pages/mockup.html',
];

const TAG_RE = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g;

let failures = 0;

/* Validasi tag balance HTML */
console.log('=== 1. Validasi tag HTML ===');
for (const rel of FILES) {
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) {
        console.log(`MISS ${rel}`);
        failures++;
        continue;
    }
    const html = fs.readFileSync(full, 'utf8');
    const stack = [];
    let err = null;
    let m;
    TAG_RE.lastIndex = 0;
    while ((m = TAG_RE.exec(html))) {
        const closing = m[1] === '/';
        const tag = m[2].toLowerCase();
        const selfClose = m[4] === '/';
        if (VOID.has(tag) || selfClose) continue;
        if (!closing) {
            stack.push({ tag, i: m.index });
        } else {
            if (!stack.length) {
                err = `extra </${tag}> di offset ${m.index}`;
                break;
            }
            const top = stack.pop();
            if (top.tag !== tag) {
                err = `mismatch: <${top.tag}> dibuka @${top.i}, ditutup </${tag}> @${m.index}`;
                break;
            }
        }
    }
    if (!err && stack.length) {
        err = 'tidak ditutup: ' + stack.map((s) => `<${s.tag}>@${s.i}`).join(', ');
    }
    if (err) {
        failures++;
        console.log(`FAIL ${rel} -> ${err}`);
    } else {
        console.log(`OK   ${rel}`);
    }
}

/* Link & asset internal
   File di sections/ di-inject ke index.html sehingga path relatif ke root situs;
   halaman di pages/ bersifat mandiri. */
console.log('\n=== 2. Validasi href/src internal ===');
for (const rel of FILES) {
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) continue;
    const html = fs.readFileSync(full, 'utf8');
    // Section partial -> relatif terhadap root; page -> relatif terhadap dirname
    const baseDir = rel.startsWith('sections/') ? ROOT : path.dirname(full);
    const re = /(?:href|src)="([^"#][^"]*?)"/g;
    let m;
    while ((m = re.exec(html))) {
        let target = m[1].trim();
        if (!target || /^(https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(target)) continue;
        target = target.split('?')[0].split('#')[0];
        if (!target) continue;
        const resolved = path.resolve(baseDir, target);
        if (!fs.existsSync(resolved)) {
            failures++;
            console.log(`FAIL ${rel} -> ${m[1]} (file tidak ada)`);
        } else {
            console.log(`OK   ${rel} -> ${m[1]}`);
        }
    }
}

/* Anchor target harus ada */
console.log('\n=== 3. Validasi anchor (#id) ===');
const allIds = new Set();
for (const rel of FILES) {
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) continue;
    const html = fs.readFileSync(full, 'utf8');
    for (const mm of html.matchAll(/id="([^"]+)"/g)) allIds.add(mm[1]);
}
for (const rel of FILES) {
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) continue;
    const html = fs.readFileSync(full, 'utf8');
    for (const mm of html.matchAll(/href="#([^"]+)"/g)) {
        if (!allIds.has(mm[1])) {
            failures++;
            console.log(`FAIL ${rel} -> #${mm[1]} (id tidak ditemukan)`);
        } else {
            console.log(`OK   ${rel} -> #${mm[1]}`);
        }
    }
}

/* Validasi SEO (sitemap.xml & kebijakan robots index/noindex) */
console.log('\n=== 4. Validasi SEO & sitemap.xml ===');
const INDEXABLE_PAGES = ['index.html', 'pages/mockup.html'];
const NOINDEX_PAGES = [
    'pages/nutrisi.html',
    'pages/keuangan.html',
    'pages/kalender.html',
    'pages/memento.html',
    'pages/fitur-todo.html',
    'pages/fitur-notes.html',
];

const sitemapPath = path.join(ROOT, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
    failures++;
    console.log('FAIL sitemap.xml tidak ditemukan');
} else {
    const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
    const locs = [...sitemapXml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
    const expectedLocs = [
        'https://www.lifesync.id/',
        'https://www.lifesync.id/pages/mockup.html',
    ];
    if (locs.length !== expectedLocs.length || expectedLocs.some((u) => !locs.includes(u))) {
        failures++;
        console.log(`FAIL sitemap.xml harus hanya berisi ${expectedLocs.join(', ')} (ditemukan: ${locs.join(', ')})`);
    } else {
        for (const loc of locs) {
            const parsed = new URL(loc);
            const relPath = parsed.pathname === '/' ? 'index.html' : parsed.pathname.replace(/^\/+/, '');
            if (!fs.existsSync(path.join(ROOT, relPath))) {
                failures++;
                console.log(`FAIL sitemap.xml -> ${loc} (file ${relPath} tidak ada)`);
            } else {
                console.log(`OK   sitemap.xml -> ${loc}`);
            }
        }
    }
}

for (const rel of INDEXABLE_PAGES) {
    const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    const hasIndex = /<meta\s+name="robots"\s+content="[^"]*index,\s*follow/i.test(html);
    const hasCanonical = /<link\s+rel="canonical"\s+href="https:\/\/www\.lifesync\.id\//i.test(html);
    if (!hasIndex || !hasCanonical) {
        failures++;
        console.log(`FAIL SEO ${rel} -> harus punya meta robots index,follow dan canonical`);
    } else {
        console.log(`OK   SEO indexable -> ${rel}`);
    }
}

for (const rel of NOINDEX_PAGES) {
    const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    const hasNoindex = /<meta\s+name="robots"\s+content="noindex,\s*follow"/i.test(html);
    const hasCanonical = /<link\s+rel="canonical"/i.test(html);
    if (!hasNoindex || hasCanonical) {
        failures++;
        console.log(`FAIL SEO ${rel} -> harus punya meta robots noindex,follow dan tanpa canonical`);
    } else {
        console.log(`OK   SEO noindex -> ${rel}`);
    }
}

console.log(`\n=== HASIL: ${failures === 0 ? 'SEMUA LULUS' : failures + ' MASALAH'} ===`);
process.exit(failures === 0 ? 0 : 1);
