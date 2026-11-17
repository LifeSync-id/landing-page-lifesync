# LifeSync: Daily Habit Tracker and Assistance (Landing Page)

Website profil produk untuk **LifeSync: Daily Habit Tracker and Assistance** (`https://www.lifesync.id/`). Situs ini memperkenalkan aplikasi produktivitas harian LifeSync, menyajikan rincian enam modul utamanya, serta menyediakan simulator aplikasi interaktif yang dapat dicoba langsung di browser selama aplikasi mobile masih dalam tahap pengembangan.

Website dibangun sebagai situs statis memakai HTML, Tailwind CSS (CDN), CSS custom (`style.css`), dan vanilla JavaScript tanpa framework ataupun dependensi npm eksternal.

## Fitur Landing Page

### 1. Halaman Utama Modular (`index.html` dan `sections/`)

Halaman utama dirangkai secara dinamis dari delapan partial HTML di folder `sections/` yang dimuat paralel lewat `fetch()` di `app.js`:

| Partial | Bagian Halaman | Isi dan Interaksi |
| --- | --- | --- |
| `sections/header.html` | Navigasi & Header | Announcement bar status pengembangan, navbar fixed dengan *scroll spy*, drawer menu mobile (mendukung tombol `Escape` dan klik di luar area menu), tautan demo, serta tombol pengalih bahasa `ID` / `EN`. |
| `sections/hero.html` | Hero & Pratinjau Ponsel | Proposisi utama LifeSync, tombol aksi (*Lihat Paket Gratis*, *Coba Simulasi di Browser*, *Lihat 6 Fitur*), tiga poin nilai utama (*Jalan Saat Offline*, *Sinkronisasi Gratis*, *Tanpa Iklan*), dan pratinjau aplikasi di bingkai ponsel dengan lima tab interaktif (*Beranda*, *Keuangan*, *Nutrisi*, *Memento*, *Profil*). |
| `sections/fitur.html` | Enam Fitur Utama | Enam kartu modul inti LifeSync (*Catatan & Checklist*, *Habit Tracker Terpisah*, *Planner & Kalender*, *Catatan Keuangan*, *Cek Nutrisi Makanan*, dan *Jurnal Memento*), masing-masing tertaut ke halaman detailnya. |
| `sections/offline.html` | Offline-First & Sinkronisasi | Penjelasan penyimpanan lokal di perangkat, sinkronisasi cloud dua arah tanpa biaya, perlindungan salinan agar editan dari dua perangkat tidak saling menimpa, serta alur kerja tiga tahap (*Tanpa Sinyal*, *Internet Nyambung*, *Perangkat Lain*). |
| `sections/ai.html` | Bantuan AI Kontekstual | Penjelasan AI di balik layar tanpa kolom chat (*Pemindai Nutrisi Lewat Foto*, *Pengingat yang Peka Jadwal* untuk Premium, dan *Ringkasan Pola Belanja*), dilengkapi tiga langkah scan makanan dan pratinjau ringkasan pagi. |
| `sections/pricing.html` | Harga & Modal Status Rilis | Perbandingan *Paket Dasar* (`Rp 0 / selamanya`, termasuk fitur harian inti dan sinkronisasi cloud gratis) dan *Paket Premium* (`Rp 29.000 / bulan` untuk biaya pemrosesan kamera makanan dan pengingat AI), tiga poin komitmen kepemilikan data, serta dialog modal informasi status pengembangan saat tombol paket diklik. |
| `sections/kontak.html` | Kontak & Kolaborasi | Lokasi tim pengembang (Batam, Kepulauan Riau, WIB / GMT+7), email resmi (`partnership@lifesync.id`), Instagram (`@lifesync_id`), dan banner ajakan kolaborasi komunitas atau riset. |
| `sections/footer.html` | Footer | Identitas merek, navigasi cepat antar bagian halaman, tautan email, serta ringkasan komitmen privasi. |

### 2. Halaman Detail Per Fitur (`pages/`)

Setiap modul utama memiliki halaman HTML mandiri yang menjelaskan manfaat dan cara kerjanya, lengkap dengan tombol kembali ke bagian `#fitur` di `index.html` serta pengalih bahasa `ID` / `EN`:

| Halaman | Modul yang Dijelaskan |
| --- | --- |
| `pages/fitur-notes.html` | Catatan & Checklist Terstruktur (folder bertingkat, pencarian tag, salinan aman) |
| `pages/fitur-todo.html` | Habit Tracker & To-Do Terpisah (target harian/mingguan dan progres 30 hari) |
| `pages/kalender.html` | Planner & Kalender Acara (tampilan agenda, acara berulang, pengingat offline) |
| `pages/keuangan.html` | Catatan Keuangan Pribadi (input cepat, kategori bebas, grafik dan rekap bulanan) |
| `pages/nutrisi.html` | Pemindai Nutrisi Makanan (scan foto makanan, estimasi kalori dan makronutrisi) |
| `pages/memento.html` | Jurnal Memento & Peta Kenangan (jurnal foto pribadi dengan titik lokasi peta) |

### 3. Simulator Aplikasi Interaktif (`pages/mockup.html`)

Halaman simulator memungkinkan pengunjung mencoba alur antarmuka aplikasi mobile LifeSync langsung di browser tanpa instalasi. Simulator mencakup 10 layar/tahapan (*Tampilan Awal*, *Kenalan Fitur*, *Login & Tamu*, *Beranda*, *Planner*, *Catatan*, *Keuangan*, *Nutrisi & AI Scan*, *Memento*, dan *Profil*), lengkap dengan panel *Rekap Hari Ini* serta tombol *Mulai Ulang* untuk mereset data simulasi.

### 4. Dukungan Dwibahasa (`i18n.js`)

Halaman utama (`index.html`) dan keenam halaman detail fitur tersedia dalam bahasa Indonesia (`id`) sebagai bahasa bawaan dan bahasa Inggris (`en`), sedangkan halaman simulator (`pages/mockup.html`) menggunakan bahasa Indonesia. Pilihan bahasa diatur lewat tombol `ID` / `EN` atau parameter URL `?lang=id` / `?lang=en`, disimpan di `localStorage` (`lifesync_lang`), serta otomatis memperbarui atribut `<html lang>`, `<title>`, dan tag meta deskripsi serta Open Graph.

### 5. SEO, Aksesibilitas, dan Telemetri

- Situs dilengkapi tag `<link rel="canonical">`, metadata Open Graph dan Twitter Card, data terstruktur JSON-LD (`Organization`, `WebSite`, `SoftwareApplication`), `robots.txt`, `sitemap.xml`, dan `site.webmanifest`.
- Aksesibilitas mencakup skip link menuju `#main-content`, indikator fokus keyboard (`:focus-visible`), manajemen fokus dan tombol `Escape` pada drawer mobile maupun modal status rilis, serta dukungan `prefers-reduced-motion`.
- Event interaksi dasar (klik CTA, kartu fitur, modal, visibilitas section, dan durasi baca) dikirim ke Google Analytics 4 (`gtag`) melalui `app.js`, yang juga memusatkan konfigurasi tautan unduhan aplikasi (`STORE_URL`, `ANDROID_STORE_URL`, `IOS_STORE_URL`).

## Struktur Proyek

```text
landing-page-lifesync/
├── index.html              # Shell halaman utama (metadata SEO, Tailwind CDN, kontainer section)
├── app.js                  # Loader partial section dan modul interaksi halaman utama
├── i18n.js                 # Kamus terjemahan ID/EN, switcher bahasa, dan sinkronisasi metadata
├── style.css               # Token warna sistem desain, komponen CSS custom, dan aturan aksesibilitas
├── tailwind-config.js      # Konfigurasi tema Tailwind CSS CDN untuk halaman di pages/
├── package.json            # Daftar skrip Node.js (serve, validate, build, depth, test)
├── wrangler.json           # Konfigurasi deploy Cloudflare (assets.directory: ./dist)
├── robots.txt              # Aturan indexing mesin pencari dan URL sitemap
├── sitemap.xml             # Peta halaman publik untuk mesin pencari
├── site.webmanifest        # Konfigurasi ikon dan tampilan web app manifest
├── favicon.ico             # Ikon browser multi-ukuran (16x16, 32x32, 48x48)
├── .nojekyll               # Penanda agar GitHub Pages menyajikan aset apa adanya
├── sections/               # Partial HTML yang dimuat ke index.html via fetch()
│   ├── header.html         # Announcement bar, navbar fixed, switcher ID/EN, drawer mobile
│   ├── hero.html           # Hero, CTA, 3 highlight nilai utama, dan pratinjau ponsel 5 tab
│   ├── fitur.html          # Grid 6 kartu fitur utama LifeSync
│   ├── offline.html        # Arsitektur offline-first, sinkronisasi gratis, alur 3 tahap
│   ├── ai.html             # 3 kapabilitas AI kontekstual, alur scan gizi, dan ringkasan pagi
│   ├── pricing.html        # Perbandingan Paket Gratis vs Premium dan modal status pengembangan
│   ├── kontak.html         # Lokasi tim, email resmi, Instagram, dan ajakan kolaborasi
│   └── footer.html         # Informasi brand, tautan cepat, email, dan catatan privasi
├── pages/                  # Halaman HTML standalone
│   ├── fitur-notes.html    # Halaman detail Catatan & Checklist Terstruktur
│   ├── fitur-todo.html     # Halaman detail Habit Tracker & To-Do Terpisah
│   ├── kalender.html       # Halaman detail Planner & Kalender Acara
│   ├── keuangan.html       # Halaman detail Catatan Keuangan Pribadi
│   ├── nutrisi.html        # Halaman detail Pemindai Nutrisi Makanan
│   ├── memento.html        # Halaman detail Jurnal Memento & Peta Kenangan
│   └── mockup.html         # Simulator interaktif aplikasi mobile (10 tahap layar)
├── assets/                 # Logo merek, banner Open Graph, Apple Touch Icon, dan favicon PNG
├── roots/                  # Direktori skrip pendukung yang ikut disalin saat build
├── tools/                  # Skrip development, validasi, build, dan pengujian (Node.js murni)
│   ├── serve.js            # Server HTTP lokal
│   ├── validate.js         # Validator tag HTML, tautan/aset internal, dan anchor #id
│   ├── build.js            # Skrip penyalinan file publik ke dist/
│   ├── depth.js            # Pemeriksa keseimbangan dan kedalaman tag HTML per file
│   └── browser-test.js     # Smoke test browser Chrome headless lewat CDP
└── dist/                   # Output build siap deploy (dihasilkan otomatis, jangan diedit manual)
```

## Cara Menjalankan

### Prasyarat

- Node.js 18 atau lebih baru (untuk server lokal, validasi, build, dan skrip browser test).
- Tidak perlu menjalankan `npm install` karena proyek ini tidak memiliki dependensi npm pihak ketiga.

### 1. Menjalankan Server Lokal

Dari folder `landing-page-lifesync`:

```bash
npm run serve
```

Atau langsung dari root monorepo (`LifeSync-Project`):

```bash
npm --prefix landing-page-lifesync run serve
```

Server akan berjalan di `http://127.0.0.1:8765`. Untuk memakai port lain atau membuka akses ke perangkat lain di jaringan lokal:

```bash
node tools/serve.js 8765 0.0.0.0
```

> Catatan: Halaman utama memuat partial HTML di `sections/` menggunakan `fetch()`. Website harus dibuka melalui server HTTP lokal di atas, bukan langsung lewat protokol `file://` karena browser memblokir `fetch()` dengan aturan CORS.

### 2. Validasi dan Build

Untuk memeriksa keseimbangan tag HTML, validitas tautan dan aset internal, target anchor `#id`, serta membangun folder publik `dist/`:

```bash
npm run validate
```

Atau jalankan `npm run build` (hook `prebuild` otomatis menjalankan `tools/validate.js` sebelum menyalin aset ke `dist/`):

```bash
npm run build
```

Untuk memeriksa keseimbangan dan kedalaman tag HTML pada satu file tertentu:

```bash
npm run depth -- sections/hero.html
```

### 3. Smoke Test Browser (Opsional)

Skrip `tools/browser-test.js` menjalankan pengecekan DOM dan tampilan melalui Chrome DevTools Protocol (CDP) dengan Google Chrome terpasang di jalur default Windows (`C:\Program Files\Google\Chrome\Application\chrome.exe`):

```bash
# Pastikan server lokal sudah berjalan di http://127.0.0.1:8765 (atau atur env SITE_URL)
npm run test:browser
```

Untuk menjalankan validasi diikuti browser test:

```bash
npm test
```

### 4. Deploy

Direktori hasil build untuk publikasi berada di `dist/`. Jangan mengedit isi `dist/` secara manual karena seluruh isinya dibuat ulang setiap kali `tools/build.js` dijalankan.

- Cloudflare: `wrangler.json` sudah mengarahkan direktori aset statis ke `./dist`.
- Hosting statis lain (seperti GitHub Pages): publikasikan isi folder `dist/` yang sudah menyertakan `.nojekyll`, `robots.txt`, `sitemap.xml`, dan `site.webmanifest`.