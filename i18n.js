/**
 * LifeSync - Bilingual i18n dictionary & switcher (Indonesian / English)
 * Keeps default copy in natural Indonesian and switches cleanly to English.
 */
(function (global) {
    'use strict';

    var STORAGE_KEY = 'lifesync_lang';
    var SUPPORTED = ['id', 'en'];

    var TRANSLATIONS = {
        id: {
            /* Page metadata */
            'meta.home.title': 'LifeSync: Daily Habit Tracker and Assistance',
            'meta.home.desc': 'LifeSync: Daily Habit Tracker and Assistance menyatukan catatan harian, habit tracker, jadwal, keuangan, scan gizi makanan, dan jurnal foto. Tetap jalan tanpa internet dan otomatis sinkron ke cloud.',
            'meta.notes.title': 'Catatan & Checklist Terstruktur - LifeSync: Daily Habit Tracker and Assistance',
            'meta.todo.title': 'Habit Tracker & To-Do Terpisah - LifeSync: Daily Habit Tracker and Assistance',
            'meta.calendar.title': 'Planner & Kalender Acara - LifeSync: Daily Habit Tracker and Assistance',
            'meta.finance.title': 'Catatan Keuangan Pribadi - LifeSync: Daily Habit Tracker and Assistance',
            'meta.nutrition.title': 'Pemindai Nutrisi Makanan - LifeSync: Daily Habit Tracker and Assistance',
            'meta.memento.title': 'Jurnal Memento & Peta Kenangan - LifeSync: Daily Habit Tracker and Assistance',

            /* Navigation & Header */
            'nav.skip': 'Langsung ke isi halaman',
            'nav.announcement': 'LifeSync lagi dalam pengembangan. Fitur inti & sinkronisasi cloud tetap gratis, sambil menunggu rilis, coba dulu simulasinya di browser.',
            'nav.announcementCta': 'Lihat 6 Fitur',
            'nav.brandAria': 'LifeSync: Daily Habit Tracker and Assistance',
            'nav.primaryAria': 'Navigasi utama',
            'nav.mobileAria': 'Navigasi mobile',
            'nav.langGroupAria': 'Pilih bahasa',
            'nav.langIdAria': 'Bahasa Indonesia',
            'nav.langEnAria': 'English',
            'nav.features': 'Fitur',
            'nav.offline': 'Offline',
            'nav.ai': 'Bantuan AI',
            'nav.pricing': 'Harga',
            'nav.contact': 'Kontak',
            'nav.tryDemo': 'Coba Demo',
            'nav.seePlans': 'Lihat Paket',
            'nav.mobilePlans': 'Lihat Paket Gratis & Premium',
            'nav.mobileDemo': 'Coba Simulasi di Browser',
            'nav.menuOpen': 'Buka menu navigasi',
            'nav.menuClose': 'Tutup menu navigasi',

            /* Hero */
            'hero.eyebrow': 'LifeSync: Daily Habit Tracker and Assistance',
            'hero.h1Html': 'Satu tempat tenang untuk menjaga <span class="text-primary italic font-serif">kebiasaan</span>, <span class="text-secondary italic font-serif">waktu</span>, dan keseharianmu.',
            'hero.subtitle': 'Catat tugas, pantau kebiasaan, tulis ide, rekap pengeluaran, sampai foto makanan buat cek gizinya. Semuanya langsung tersimpan di HP tanpa perlu sinyal, lalu otomatis sinkron ke perangkat lain begitu online.',
            'hero.ctaPrimary': 'Lihat Paket Gratis',
            'hero.ctaDemo': 'Coba Simulasi di Browser',
            'hero.ctaFeatures': 'Lihat 6 Fitur',
            'hero.pill1Title': 'Jalan Saat Offline',
            'hero.pill1Sub': 'Tetap bisa dipakai tanpa kuota',
            'hero.pill2Title': 'Sinkronisasi Gratis',
            'hero.pill2Sub': 'Terhubung otomatis antar perangkat',
            'hero.pill3Title': 'Tanpa Iklan',
            'hero.pill3Sub': 'Nggak ada pelacak pihak ketiga',
            'hero.demoBelowCta': 'Coba Simulasi Lengkap di Browser',

            /* Hero Phone Showcase */
            'hero.phone.navAria': 'Navigasi pratinjau aplikasi',
            'hero.phone.greeting': 'Selamat pagi, Megah',
            'hero.phone.subgreeting': 'Mari jalani hari yang lebih teratur.',
            'hero.phone.progressTitle': 'Progres Hari Ini',
            'hero.phone.progressBadge': '60% Selesai',
            'hero.phone.targetLabel': 'Target',
            'hero.phone.progressHeadline': '3 dari 5 kebiasaan selesai',
            'hero.phone.progressNote': 'Pelan-pelan tetap jalan. Lanjut ke kebiasaan berikutnya.',
            'hero.phone.productivityTitle': 'Produktivitas',
            'hero.phone.plannerTitle': 'Planner',
            'hero.phone.plannerSub': 'Jadwal & to-do',
            'hero.phone.notesTitle': 'Catatan',
            'hero.phone.notesSub': 'Simpan ide & checklist',
            'hero.phone.weekTitle': 'Minggu Ini',
            'hero.phone.streak': '5 hari beruntun',
            'hero.phone.dayMon': 'Sen',
            'hero.phone.dayTue': 'Sel',
            'hero.phone.dayWed': 'Rab',
            'hero.phone.dayThu': 'Kam',
            'hero.phone.dayThuMark': 'H',
            'hero.phone.dayFri': 'Jum',
            'hero.phone.daySat': 'Sab',
            'hero.phone.daySun': 'Min',
            'hero.phone.insightTitle': 'Saran Hari Ini',
            'hero.phone.insightBadge': 'Lokal',
            'hero.phone.insightBody': 'Kamu biasanya lebih fokus di pagi hari. Selesaikan tugas utama sebelum siang biar sore bisa lebih santai.',
            'hero.phone.dailyTitle': 'Keseharian',
            'hero.phone.seeAll': 'Lihat Semua',
            'hero.phone.habit1Title': 'Minum Air',
            'hero.phone.habit1Sub': '4 / 8 gelas • Berjalan',
            'hero.phone.habit2Title': 'Peregangan Ringan',
            'hero.phone.habit2Sub': '10 menit • Selesai',
            'hero.phone.habit3Title': 'Membaca Buku',
            'hero.phone.habit3Sub': '20:00 • Nanti malam',
            'hero.phone.habit4Title': 'Catat Pengeluaran',
            'hero.phone.habit4Sub': 'Belum dicatat hari ini',

            'hero.phone.financeTitle': 'Keuangan',
            'hero.phone.financeSub': 'Catat pemasukan dan pengeluaranmu',
            'hero.phone.financeMonth': '‹ Okt 2026 ›',
            'hero.phone.incomeLabel': 'Pemasukan',
            'hero.phone.incomeAmount': 'Rp 7.500.000',
            'hero.phone.incomeCount': '8 Transaksi',
            'hero.phone.expenseLabel': 'Pengeluaran',
            'hero.phone.expenseAmount': 'Rp 3.250.000',
            'hero.phone.expenseCount': '14 Transaksi',
            'hero.phone.txTotal': 'Total 22 Transaksi',
            'hero.phone.txNet': 'Selisih + Rp 4.250.000 (Surplus)',
            'hero.phone.cashSummary': 'Ringkasan Keuangan',
            'hero.phone.detail': 'Detail',
            'hero.phone.tabDaily': 'Harian',
            'hero.phone.tabWeekly': 'Mingguan',
            'hero.phone.tabMonthly': 'Bulanan',
            'hero.phone.wk1': 'Mg 1',
            'hero.phone.wk2': 'Mg 2',
            'hero.phone.wk3': 'Mg 3',
            'hero.phone.wk4': 'Mg 4',
            'hero.phone.recentTx': 'Transaksi Terbaru',
            'hero.phone.tx1Title': 'Gaji Bulanan',
            'hero.phone.tx1Sub': 'Kemarin • Pemasukan',
            'hero.phone.tx1Val': '+ Rp 7.500.000',
            'hero.phone.tx2Title': 'Belanja Bulanan',
            'hero.phone.tx2Sub': 'Hari ini • Belanja',
            'hero.phone.tx2Val': '- Rp 850.000',
            'hero.phone.tx3Title': 'Kopi & Sarapan',
            'hero.phone.tx3Sub': 'Hari ini • Makanan',
            'hero.phone.tx3Val': '- Rp 45.000',

            'hero.phone.nutritionTitle': 'Nutrisi',
            'hero.phone.nutritionSub': 'Pantau gizi makanan & asupan harian',
            'hero.phone.nutritionBadge': 'Scan Makanan',
            'hero.phone.calTargetUnit': '/ 2.000 kkal',
            'hero.phone.calToday': 'Kalori Hari Ini',
            'hero.phone.calPct': 'Sudah masuk 62% dari target harian',
            'hero.phone.macroTitle': 'Target Gizi Harian',
            'hero.phone.protein': 'Protein',
            'hero.phone.carbs': 'Karbohidrat',
            'hero.phone.fat': 'Lemak',
            'hero.phone.water': 'Air Minum',
            'hero.phone.waterVal': '5 / 8 gelas',
            'hero.phone.scannedFood': 'Nasi Ayam Bakar & Lalapan',
            'hero.phone.scannedMeta': '520 kkal • 28g Protein • Dicek AI',

            'hero.phone.mementoTitle': 'Memento',
            'hero.phone.mementoBadge': 'Batam',
            'hero.phone.mementoSub': 'Momen yang kamu simpan di perjalanan',
            'hero.phone.mapTitle': 'Peta Momen',
            'hero.phone.mapRegion': 'Pulau Batam',
            'hero.phone.pin1': 'Barelang',
            'hero.phone.pin2': 'Nongsa',
            'hero.phone.focusMap': 'Fokuskan Peta',
            'hero.phone.savedCount': '34 Momen Tersimpan',
            'hero.phone.savedPlaces': '12 Lokasi di Batam',
            'hero.phone.place1': 'Jembatan Barelang',
            'hero.phone.place1Sub': '8 Foto • Ikon Batam',
            'hero.phone.place2': 'Pantai Nongsa',
            'hero.phone.place2Sub': '6 Foto • Sore Hari',

            'hero.phone.profileTitle': 'Profil',
            'hero.phone.profileName': 'Megah',
            'hero.phone.profileEmail': 'megah@lifesync.id',
            'hero.phone.statStreak': 'Hari Beruntun',
            'hero.phone.statDone': 'Aktivitas Selesai',
            'hero.phone.statJoinedDate': 'Okt 2026',
            'hero.phone.statJoined': 'Bergabung',
            'hero.phone.accountHeading': 'Akun',
            'hero.phone.editProfile': 'Kelola Profil',
            'hero.phone.devices': 'Perangkat Login',
            'hero.phone.syncNow': 'Sinkronkan Sekarang',
            'hero.phone.syncStatus': 'Status: Baru saja disinkronkan',
            'hero.phone.prefsHeading': 'Preferensi',
            'hero.phone.dailyNotif': 'Notifikasi Harian',
            'hero.phone.dailyNotifSub': 'Pengingat kebiasaan harian',

            'hero.phone.tabHome': 'Beranda',
            'hero.phone.tabFinance': 'Keuangan',
            'hero.phone.tabNutrition': 'Nutrisi',
            'hero.phone.tabMemento': 'Memento',
            'hero.phone.tabProfile': 'Profil',

            /* Features section */
            'fitur.eyebrow': 'Enam Fitur Utama',
            'fitur.h2': 'Satu tempat rapi buat urus keseharian.',
            'fitur.subtitle': 'Kamu nggak perlu gonta-ganti banyak aplikasi buat mencatat hal penting. LifeSync menyatukan catatan, kebiasaan, jadwal, keuangan, nutrisi, dan foto kenangan dalam satu alur.',
            'fitur.card1Tag': 'Catatan & Ide',
            'fitur.card1Title': 'Catatan & Checklist',
            'fitur.card1Desc': 'Tulis ide, rangkuman bacaan, atau daftar belanja dengan format teks yang rapi. Susun pakai folder bertingkat, cari lewat tag, dan tenang karena editan dari dua perangkat nggak saling menimpa.',
            'fitur.card1Bullet1': 'Folder bertingkat & cari cepat pakai tag',
            'fitur.card1Bullet2': 'Salinan aman kalau diedit di dua perangkat',
            'fitur.card1Cta': 'Detail Fitur Catatan',

            'fitur.card2Tag': 'Kebiasaan',
            'fitur.card2Title': 'Habit Tracker Terpisah',
            'fitur.card2Desc': 'Kami sengaja memisahkan kebiasaan harian dari daftar kerjaan yang numpuk. Targetnya bisa kamu atur per hari atau per minggu biar konsisten tanpa bikin stres.',
            'fitur.card2Bullet1': 'Dipisah dari to-do kerja biar lebih lega',
            'fitur.card2Bullet2': 'Target harian atau mingguan sesuai ritmemu',
            'fitur.card2Bullet3': 'Pengingat yang nyambung dengan jadwalmu (Premium)',
            'fitur.card2Cta': 'Detail Habit & To-Do',

            'fitur.card3Tag': 'Jadwal & Tugas',
            'fitur.card3Title': 'Planner & Kalender',
            'fitur.card3Desc': 'Lihat jadwal dalam tampilan harian, mingguan, atau bulanan. Acara yang berulang otomatis terpasang pengingatnya, termasuk saat HP lagi offline.',
            'fitur.card3Bullet1': 'Pengingat jadwal berulang otomatis',
            'fitur.card3Bullet2': 'Atur prioritas tugas dari santai sampai mendesak',
            'fitur.card3Cta': 'Detail Kalender',

            'fitur.card4Tag': 'Keuangan Pribadi',
            'fitur.card4Title': 'Catatan Keuangan',
            'fitur.card4Desc': 'Catat pemasukan dan pengeluaran harian dalam hitungan detik, tetap jalan tanpa sinyal. Cek ke mana uangmu keluar lewat grafik kategori dan ringkasan bulanan.',
            'fitur.card4Bullet1': 'Rekap bulanan otomatis tanpa rumus ribet',
            'fitur.card4Bullet2': 'Kategori pengeluaran bebas kamu atur sendiri',
            'fitur.card4Cta': 'Detail Keuangan',

            'fitur.card5Tag': 'Pola Makan',
            'fitur.card5Title': 'Cek Nutrisi Makanan',
            'fitur.card5Desc': 'Foto piring makanmu pakai kamera. LifeSync mengenali isi hidangan, mencocokkan ke data gizi, dan menghitung perkiraan kalori serta makronya tanpa perlu input manual satu-satu.',
            'fitur.card5Bullet1': 'Foto makanan langsung muncul estimasi gizinya',
            'fitur.card5Bullet2': 'Rincian kalori, protein, karbo, dan lemak',
            'fitur.card5Cta': 'Detail Pemindai Nutrisi',

            'fitur.card6Tag': 'Kenangan',
            'fitur.card6Title': 'Jurnal Memento',
            'fitur.card6Desc': 'Tulis cerita harian bersama foto yang otomatis tertaut ke lokasi peta. Semua tersimpan rapi buat dirimu sendiri, bukan buat dipamerkan ke linimasa publik.',
            'fitur.card6Bullet1': 'Lihat kembali kenangan lewat peta perjalanan',
            'fitur.card6Bullet2': 'Arsip foto pribadi, bukan media sosial',
            'fitur.card6Cta': 'Detail Jurnal Memento',

            /* Offline section */
            'offline.eyebrow': 'Offline-First & Sinkronisasi',
            'offline.h2': 'Tetap jalan lancar, bahkan saat nggak ada sinyal.',
            'offline.subtitle': 'Aplikasi harian nggak seharusnya berhenti kerja cuma gara-gara sinyal hilang di perjalanan. Di LifeSync, semua data disimpan langsung di HP kamu, dibuka tanpa loading, dan otomatis sinkron ke cloud begitu internet nyambung lagi.',
            'offline.item1Title': 'Buka & Catat Tanpa Loading',
            'offline.item1Desc': 'Menulis catatan, mencentang tugas, dan mencatat jajan langsung tersimpan di memori HP. Nggak perlu nunggu balasan server atau boros kuota.',
            'offline.item2Title': 'Sinkron Otomatis Antar Perangkat',
            'offline.item2Badge': 'Gratis',
            'offline.item2Desc': 'Login pakai akun yang sama, dan semua perubahan di HP bakal otomatis nyusul ke tablet atau perangkat lain begitu online.',
            'offline.item3Title': 'Catatan Nggak Saling Menimpa',
            'offline.item3Desc': 'Kalau kamu mengedit catatan yang sama di dua HP berbeda saat lagi offline, LifeSync menyimpan keduanya sebagai salinan terpisah supaya tulisanmu tetap aman.',
            'offline.item4Title': 'Bebas Iklan & Pelacak',
            'offline.item4Desc': 'Catatan, keuangan, dan jurnalmu tidak dijual ke pengiklan. Nggak ada banner iklan atau pelacak pihak ketiga yang mengganggu fokus.',
            'offline.flowTitle': 'Cara Kerja Offline & Sync',
            'offline.flowBadge': 'Otomatis',
            'offline.step1Title': 'Saat Lagi Tanpa Sinyal',
            'offline.step1Desc': 'Tulis catatan, centang kebiasaan, dan catat makan siang seperti biasa tanpa kuota internet.',
            'offline.step2Title': 'Begitu Internet Nyambung',
            'offline.step2Desc': 'Aplikasi menyinkronkan perubahan data di latar belakang tanpa pop-up yang mengganggu.',
            'offline.step3Title': 'Buka di Perangkat Lain',
            'offline.step3Desc': 'Buka dari HP atau tablet lain, catatan dan progres terbarumu sudah langsung ikut terbarui.',
            'offline.flowFooter': 'Sinkronisasi cloud selalu gratis',
            'offline.flowFooterBadge': 'Tanpa Biaya',

            /* AI section */
            'ai.eyebrow': 'Bantuan AI di Balik Layar',
            'ai.h2': 'AI yang kerja langsung di tiap fitur, tanpa perlu diajak chatting.',
            'ai.subtitle': 'Kamu nggak perlu membuka kolom chat khusus atau menjelaskan panjang lebar ke bot. Di LifeSync, AI langsung bekerja saat kamu memotret makanan atau butuh pengingat yang nyambung sama jadwalmu.',
            'ai.card1Tag': 'Pola Makan',
            'ai.card1Title': 'Pemindai Nutrisi Lewat Foto',
            'ai.card1Desc': 'Arahkan kamera ke piring makanmu. LifeSync mengenali jenis hidangan dan memperkirakan kalori serta gizinya dalam hitungan detik, tanpa menyimpan foto makananmu di server kami.',
            'ai.card1Footer': 'Hasil scan bisa kamu koreksi lagi',
            'ai.card2Tag': 'Pengingat • Premium',
            'ai.card2Title': 'Pengingat yang Peka Jadwal',
            'ai.card2Desc': 'Pengguna Premium mendapat kalimat pengingat yang menyesuaikan jadwal rapat, kebiasaan yang belum dicentang, dan jam istirahatmu. Bukan pesan notifikasi yang diulang-ulang sama tiap hari.',
            'ai.card2Footer': 'Menyesuaikan agenda & rutinitasmu',
            'ai.card3Tag': 'Keuangan',
            'ai.card3Title': 'Ringkasan Pola Belanja',
            'ai.card3Desc': 'Membantu melihat kategori pengeluaran yang melonjak minggu ini dan merangkum kondisi arus kas bulanan biar lebih gampang ambil keputusan.',
            'ai.card3Footer': 'Membaca tren pengeluaran bulanan',
            'ai.scanEyebrow': 'Pencatatan Gizi Praktis',
            'ai.scanH3': 'Catat makanan tanpa repot menimbang.',
            'ai.scanDesc': 'Banyak orang berhenti mencatat makanan karena harus mengetik berat bahan satu per satu. Di LifeSync cukup lewat foto:',
            'ai.scanStep1Title': 'Foto Piring Makan',
            'ai.scanStep1Desc': 'Ambil foto sarapan, makan siang, atau camilan langsung dari kamera.',
            'ai.scanStep2Title': 'Cek Komposisi & Porsi',
            'ai.scanStep2Desc': 'Sistem mendeteksi jenis makanan dan kamu bisa sesuaikan porsinya kalau perlu.',
            'ai.scanStep3Title': 'Lihat Total Kalori & Makro',
            'ai.scanStep3Desc': 'Kalori, protein, karbohidrat, dan lemak langsung masuk ke catatan harianmu.',
            'ai.scanCta': 'Cek Paket Premium',
            'ai.previewTitle': 'Ringkasan Pagi',
            'ai.previewTime': 'Hari ini, 07:15 WIB',
            'ai.previewInsightHtml': '“Kamu sudah menjaga <strong>kebiasaan tidur sebelum 23:00 selama 8 hari</strong>. Hari ini ada 3 jadwal rapat, sempatkan jeda 10 menit di siang hari biar fokusmu tetap aman.”',
            'ai.previewInsightTag': 'Saran Ritme Harian',
            'ai.previewInsightMode': 'Otomatis',
            'ai.previewReminderTitle': 'Pengingat Kontekstual (Premium)',
            'ai.previewReminderBadge': 'Dinamis',
            'ai.previewReminderBody': '“Megah, 30 menit lagi ada rapat pukul 14:00 selama 90 menit. Jangan lupa minum segelas air dulu sebelum mulai.”',
            'ai.previewScanTitle': 'Hasil Scan: Salmon Bowl & Nasi Merah',
            'ai.previewScanBadge': 'Porsi Terdeteksi',
            'ai.previewScanEnergyLabel': 'Energi Terdeteksi',
            'ai.previewScanEnergyVal': '540 kkal',
            'ai.previewMacroP': 'Protein 42g',
            'ai.previewMacroC': 'Karbo 48g',
            'ai.previewMacroF': 'Lemak 14g',

            /* Pricing section */
            'pricing.eyebrow': 'Harga Jelas, Tanpa Jebakan',
            'pricing.h2': 'Fitur inti gratis selamanya. Premium khusus untuk biaya AI.',
            'pricing.subtitle': 'Kami nggak mengunci sinkronisasi cloud di balik paket berbayar. Semua catatan dan penyelarasan antar perangkat tetap gratis. Paket Premium ada buat menopang biaya pemindai kamera dan pengingat AI.',
            'pricing.freeLabel': 'Paket Dasar',
            'pricing.freeBadge': 'Gratis Selamanya',
            'pricing.freePrice': 'Rp 0',
            'pricing.freePeriod': '/ selamanya',
            'pricing.freeDesc': 'Semua fitur harian lengkap langsung di HP kamu, termasuk sinkronisasi cloud dua arah tanpa bayar.',
            'pricing.freeListLabel': 'Yang kamu dapatkan:',
            'pricing.freeItem1Html': '<strong>Simpan Lokal di HP:</strong> Semua fitur jalan penuh tanpa koneksi internet',
            'pricing.freeItem2Html': '<strong>Sinkronisasi Cloud Gratis:</strong> Otomatis terhubung antar perangkat saat login',
            'pricing.freeItem3Html': '<strong>Catatan &amp; Dokumen:</strong> Folder bertingkat, tag, dan salinan aman dari tertimpa',
            'pricing.freeItem4Html': '<strong>Habit Tracker Terpisah:</strong> Dipisah dari tumpukan tugas kerja biar lebih tenang',
            'pricing.freeItem5Html': '<strong>Planner &amp; Kalender:</strong> Jadwal harian dengan pengingat berulang otomatis',
            'pricing.freeItem6Html': '<strong>Catatan Keuangan:</strong> Rekap pemasukan, pengeluaran, dan grafik kategori',
            'pricing.freeItem7Html': '<strong>Coba Scan Nutrisi:</strong> Pemindai makanan lewat kamera dengan kuota gratis terbatas',
            'pricing.freeItem8Html': '<strong>Jurnal Memento:</strong> Simpan momen dan foto lengkap dengan titik lokasi peta',
            'pricing.freeCta': 'Pakai Paket Gratis',

            'pricing.premBadge': 'Rekomendasi',
            'pricing.premLabel': 'Akses Penuh AI',
            'pricing.premPrice': 'Rp 29.000',
            'pricing.premPeriod': '/ bulan',
            'pricing.premDesc': 'Untuk kamu yang sering scan makanan dan ingin pengingat AI yang menyesuaikan kondisi harimu.',
            'pricing.premListLabel': 'Semua fitur gratis, ditambah:',
            'pricing.premItem1Html': '<strong class="text-on-surface">Scan Nutrisi Tanpa Batas:</strong> Foto makanan kapan saja untuk cek kalori dan makronya',
            'pricing.premItem2Html': '<strong class="text-on-surface">Pengingat Sesuai Konteks:</strong> Kalimat pengingat disusun mengikuti jadwal rapat, kebiasaan tertunda, dan jam istirahatmu',
            'pricing.premItem3Html': '<strong class="text-on-surface">Ringkasan Pagi Hari:</strong> Saran ritme harian langsung di beranda tanpa perlu buka chat',
            'pricing.premItem4Html': '<strong class="text-on-surface">Catatan Pengeluaran Pintar:</strong> Bantu deteksi pos belanja yang membengkak dan proyeksi tabungan',
            'pricing.premItem5': 'Prioritas antrean pemrosesan gambar dan AI',
            'pricing.premCta': 'Pilih Paket Premium',
            'pricing.premFootnote': 'Bisa berhenti langganan kapan saja.',

            'pricing.trust1Title': 'Kenapa Sinkronisasi Gratis?',
            'pricing.trust1Desc': 'Sinkronisasi data teks sangat ringan. Kami nggak mau menarik biaya cuma buat menyimpan catatan dan kebiasaanmu sendiri.',
            'pricing.trust2Title': 'Biaya AI yang Transparan',
            'pricing.trust2Desc': 'Langganan Premium dipakai untuk menutup biaya server komputasi kamera makanan dan pengingat kontekstual.',
            'pricing.trust3Title': 'Datamu Tetap Jadi Milikmu',
            'pricing.trust3Desc': 'Kalau suatu saat kamu berhenti berlangganan, seluruh riwayat catatan, nutrisi, dan keuanganmu tetap bisa kamu buka.',

            /* Dev modal */
            'modal.closeAria': 'Tutup dialog',
            'modal.subLabel': 'Info Ketersediaan',
            'modal.title': 'Aplikasi Masih Dalam Pengembangan',
            'modal.freeTitle': 'Paket Dasar Gratis',
            'modal.freeDesc': 'Aplikasi mobile LifeSync saat ini masih dalam tahap pengembangan dan belum dirilis di Google Play maupun App Store.',
            'modal.premTitle': 'Paket Akses Premium',
            'modal.premDesc': 'Paket Premium dan sistem langganan belum dibuka karena aplikasi LifeSync masih dalam tahap pengembangan.',
            'modal.optionsHeading': 'Yang bisa kamu coba sekarang:',
            'modal.option1Html': '<strong class="text-on-surface font-semibold">Simulasi di Browser:</strong> Coba langsung prototipe interaktif LifeSync di browser untuk melihat alur dan tampilannya.',
            'modal.option2Html': '<strong class="text-on-surface font-semibold">Saran &amp; Pertanyaan:</strong> Punya masukan fitur atau pertanyaan soal rilis? Hubungi kami lewat email atau Instagram.',
            'modal.ctaMockup': 'Buka Simulasi Demo',
            'modal.ctaContact': 'Hubungi Kami',

            /* Contact */
            'contact.eyebrow': 'Kontak • Batam, Indonesia',
            'contact.h2': 'Ada pertanyaan atau ide kolaborasi?',
            'contact.subtitle': 'Kalau kamu ingin tanya soal progres rilis, kasih masukan fitur, atau ajak kerja sama, tim kami bisa langsung dihubungi lewat saluran di bawah ini.',
            'contact.locLabel': 'Lokasi Tim',
            'contact.locTitle': 'Batam, Kepulauan Riau',
            'contact.locDesc': 'Tempat LifeSync dirancang dan dikembangkan di Indonesia.',
            'contact.locTime': 'Waktu Indonesia Barat (WIB / GMT+7)',
            'contact.emailLabel': 'Email Resmi',
            'contact.emailDesc': 'Untuk pertanyaan pengguna, masukan fitur, dan ajakan kerja sama.',
            'contact.emailCta': 'Kirim Email',
            'contact.igLabel': 'Pembaruan Rilis',
            'contact.igDesc': 'Ikuti perkembangan fitur terbaru dan kabar peluncuran aplikasi.',
            'contact.igCta': 'Buka Instagram',
            'contact.bannerEyebrow': 'Kolaborasi & Riset',
            'contact.bannerTitle': 'Ingin kerja sama bareng LifeSync?',
            'contact.bannerDesc': 'Kalau kamu dari komunitas, kampus, atau tim yang tertarik kolaborasi seputar kebiasaan harian, nutrisi, atau teknologi offline-first, langsung saja kirim email ke kami.',
            'contact.bannerEmailCta': 'Kirim Email Kerja Sama',
            'contact.bannerIgCta': 'Instagram Resmi',

            /* Footer */
            'footer.tagline': 'Daily Habit Tracker and Assistance',
            'footer.copy': '© 2026 LifeSync: Daily Habit Tracker and Assistance.',
            'footer.privacy': 'Simpan Lokal • Tanpa Iklan • Privasi Terjaga',
            'footer.location': 'Batam, Kepulauan Riau, Indonesia',

            /* Shared feature subpage strings */
            'page.backLink': 'Kembali ke Fitur Utama LifeSync',

            /* Feature Page: Notes */
            'page.notes.h1': 'Catatan & Checklist Terstruktur',
            'page.notes.sub': 'Format Teks Rapi • Folder Bertingkat • Salinan Aman',
            'page.notes.intro': 'Tempat tenang buat mencatat ide, rangkuman bacaan, dan catatan proyek tanpa gangguan. Semua langsung tersimpan di memori HP, dengan salinan aman supaya tulisanmu nggak tertimpa saat diedit di dua perangkat berbeda.',
            'page.notes.col1Title': 'Format Rapi & Mudah Dicari',
            'page.notes.col1Item1': 'Dukungan format teks lengkap: judul, checklist, kutipan, sampai tabel sederhana',
            'page.notes.col1Item2': 'Susun catatan dalam folder bertingkat sesuai topik atau proyek',
            'page.notes.col1Item3': 'Tag lintas topik supaya catatan lama cepat ketemu',
            'page.notes.col1Item4': 'Sematkan catatan penting (Pin) di posisi paling atas',
            'page.notes.col2Title': 'Aman dari Tertimpa & Siap Offline',
            'page.notes.col2Item1Html': '<strong>Salinan Aman:</strong> Editan dari dua perangkat berbeda disimpan terpisah tanpa saling menimpa',
            'page.notes.col2Item2': 'Folder sampah 30 hari sebelum catatan dihapus permanen',
            'page.notes.col2Item3': 'Tersimpan langsung di database lokal HP tanpa perlu sinyal internet',
            'page.notes.col2Item4': 'Otomatis sinkron ke perangkat lain saat akun terhubung ke cloud gratis',
            'page.notes.noteTitle': 'Kenapa Dibuat Seperti Ini',
            'page.notes.noteBody': 'Ide sering datang di tempat yang sinyalnya jelek. Karena catatan langsung tersimpan lokal di perangkat, kamu bisa langsung menulis begitu aplikasi dibuka tanpa takut tulisanmu hilang.',

            /* Feature Page: Habit & To-Do */
            'page.todo.h1': 'Habit Tracker & To-Do Terpisah',
            'page.todo.sub': 'Pisah dari Tumpukan Tugas • Target Fleksibel • Progres 30 Hari',
            'page.todo.intro': 'Membangun kebiasaan baik butuh ruang yang tenang, bukan bercampur dengan daftar kerjaan yang bikin cemas. LifeSync memisahkan pelacak kebiasaan dari to-do list supaya kamu bisa jaga konsistensi tanpa tertekan.',
            'page.todo.col1Title': 'Pelacak Kebiasaan (Habit Tracker)',
            'page.todo.col1Item1': 'Atur target harian, hari kerja, atau kuota mingguan sesuai kesibukanmu',
            'page.todo.col1Item2': 'Hitung poin dan rangkaian hari beruntun secara realistis',
            'page.todo.col1Item3': 'Lihat tampilan progres 30 hari untuk memantau konsistensi',
            'page.todo.col1Item4': 'Pengingat ringan tanpa spam notifikasi yang mengganggu',
            'page.todo.col1Item5Html': '<strong>Pengingat Kontekstual (Premium):</strong> Kalimat pengingat disusun menyesuaikan jadwal dan rutinitasmu hari itu',
            'page.todo.col2Title': 'Daftar Tugas & Prioritas (To-Do)',
            'page.todo.col2Item1': 'Tandai prioritas tugas: Mendesak, Tinggi, Normal, dan Santai',
            'page.todo.col2Item2': 'Tenggat waktu terhubung langsung ke tampilan kalender',
            'page.todo.col2Item3': 'Lacak status pengerjaan: Belum Mulai, Berjalan, dan Selesai',
            'page.todo.col2Item4': 'Kelompokkan tugas pakai tag supaya gampang disaring',
            'page.todo.noteTitle': 'Konsisten Tanpa Merasa Terhakimi',
            'page.todo.noteBody': 'Saat pekerjaan lagi padat, kebiasaan sederhana seperti minum air atau olahraga sering ikut terbengkalai. Memisahkannya di menu sendiri bikin rutinitas kecilmu tetap terjaga.',

            /* Feature Page: Calendar */
            'page.cal.h1': 'Planner & Kalender Acara',
            'page.cal.sub': 'Tampilan Lega • Pengingat Berulang • Jalan Saat Offline',
            'page.cal.intro': 'Atur waktu tanpa pusing melihat jadwal yang menumpuk. Kalender LifeSync menyatukan acara, jadwal berulang, dan tenggat tugas ke dalam satu tampilan yang bersih.',
            'page.cal.col1Title': 'Jadwal Acara & Pengingat Otomatis',
            'page.cal.col1Item1': 'Catat acara lengkap dengan judul, catatan, lokasi, dan waktu pengingat',
            'page.cal.col1Item2': 'Aturan ulang fleksibel: harian, hari kerja, mingguan, atau jadwal kustom',
            'page.cal.col1Item3': 'Notifikasi pengingat tetap bunyi di HP meski sedang offline',
            'page.cal.col1Item4': 'Hubungkan acara langsung ke checklist tugas terkait',
            'page.cal.col2Title': 'Tampilan Harian, Mingguan, & Bulanan',
            'page.cal.col2Item1': 'Tampilan bulanan buat memantau agenda jangka panjang',
            'page.cal.col2Item2': 'Tampilan mingguan dan harian untuk fokus ke rencana hari ini',
            'page.cal.col2Item3': 'Bedakan warna kategori (kerja, kesehatan, keluarga, istirahat)',
            'page.cal.col2Item4': 'Sinkron otomatis antar perangkat lewat cloud gratis',
            'page.cal.noteTitle': 'Jadwal yang Masuk Akal',
            'page.cal.noteBody': 'Tampilan kalender dibuat lapang supaya kamu bisa melihat kapasitas harimu secara realistis, termasuk menyisakan ruang untuk istirahat.',

            /* Feature Page: Finance */
            'page.fin.h1': 'Catatan Keuangan Pribadi',
            'page.fin.sub': 'Input Cepat • Grafik Kategori • Rekap Bulanan',
            'page.fin.intro': 'Pantau keluar masuk uang harian tanpa repot bikin spreadsheet. LifeSync bantu kamu mencatat pemasukan dan pengeluaran secepat kilat, lalu merangkumnya ke grafik yang gampang dibaca.',
            'page.fin.col1Title': 'Catat Cepat & Kategori Bebas',
            'page.fin.col1Item1': 'Catat transaksi cukup isi nominal, tanggal, dan kategori',
            'page.fin.col1Item2': 'Sesuaikan kategori sesuka hati (Makan, Transportasi, Tagihan, Tabungan)',
            'page.fin.col1Item3': 'Tetap bisa mencatat pengeluaran meski lagi tidak ada internet',
            'page.fin.col1Item4': 'Ubah atau hapus transaksi kapan saja tanpa bikin saldo berantakan',
            'page.fin.col2Title': 'Grafik & Rekap Bulanan',
            'page.fin.col2Item1': 'Grafik donut menampilkan porsi belanja per kategori secara jelas',
            'page.fin.col2Item2': 'Hitung otomatis total pemasukan, pengeluaran, dan selisih saldo bulanan',
            'page.fin.col2Item3': 'Bandingkan arus kas masuk dan keluar dari minggu ke minggu',
            'page.fin.col2Item4': 'Ringkasan tren pengeluaran cerdas tersedia di paket Premium',
            'page.fin.noteTitle': 'Data Keuangan Tetap Privat',
            'page.fin.noteBody': 'Catatan keuanganmu tidak dipakai untuk target iklan atau ditawarkan ke pihak ketiga. Datanya tersimpan lokal dan hanya bisa diakses oleh akunmu.',

            /* Feature Page: Nutrition */
            'page.nut.h1': 'Pemindai Nutrisi Makanan',
            'page.nut.sub': 'Scan Kamera • Data Gizi • Rincian Makronutrisi',
            'page.nut.intro': 'Nggak perlu mengetik berat bahan makanan satu per satu. Arahkan kamera ke piringmu, AI LifeSync mendeteksi hidangan, mencocokkannya ke data gizi, dan memperkirakan kalori beserta makronya.',
            'page.nut.col1Title': 'Scan Makanan Lewat Kamera',
            'page.nut.col1Item1Html': '<strong>Kenali Hidangan &amp; Porsi:</strong> Kamera membaca jenis makanan di piringmu secara otomatis',
            'page.nut.col1Item2Html': '<strong>Koreksi Fleksibel:</strong> Kamu bisa sesuaikan nama makanan dan ukuran porsi sebelum disimpan',
            'page.nut.col1Item3Html': '<strong>Estimasi Gizi Lengkap:</strong> Hitung perkiraan kalori, protein, karbohidrat, lemak, dan serat',
            'page.nut.col1Item4': 'Foto diproses langsung dari perangkat tanpa disimpan di server LifeSync',
            'page.nut.col2Title': 'Pantau Asupan & Hidrasi Harian',
            'page.nut.col2Item1': 'Total kalori harian dihitung otomatis dibandingkan targetmu',
            'page.nut.col2Item2': 'Rincian gram protein, karbohidrat, lemak, dan serat dalam satu ringkasan',
            'page.nut.col2Item3': 'Kelompokkan catatan makan: Sarapan, Makan Siang, Makan Malam, dan Camilan',
            'page.nut.col2Item4': 'Catat jumlah gelas air minum harian bersama asupan makanmu',
            'page.nut.noteTitle': 'Cermin Objektif, Bukan Tekanan Diet',
            'page.nut.noteBody': 'Tujuannya bukan membuatmu cemas soal angka kalori, tapi membantu melihat pola makan harianmu dengan lebih sadar dan tenang.',

            /* Feature Page: Memento */
            'page.mem.h1': 'Jurnal Memento & Peta Kenangan',
            'page.mem.sub': 'Foto & Cerita • Titik Lokasi Peta • Arsip Privat',
            'page.mem.intro': 'Hari-hari bukan cuma soal target yang selesai dicentang, tapi juga momen yang ingin kamu ingat. Memento menyimpan tulisan refleksi dan foto kenanganmu, lengkap dengan titik lokasi di peta.',
            'page.mem.col1Title': 'Jurnal Foto & Titik Lokasi',
            'page.mem.col1Item1': 'Lampirkan foto momen langsung ke dalam catatan harianmu',
            'page.mem.col1Item2': 'Tandai titik lokasi tempat foto atau kenangan itu terjadi',
            'page.mem.col1Item3': 'Tambahkan catatan suasana hati dan stiker dari foto momen',
            'page.mem.col1Item4': 'Foto dikompresi rapi supaya hemat memori HP',
            'page.mem.col2Title': 'Telusuri Lewat Peta Pribadi',
            'page.mem.col2Item1': 'Lihat pin lokasi perjalanan dan tempat berkesan di peta pribadi',
            'page.mem.col2Item2': 'Ketuk pin lokasi untuk membaca kembali cerita dan melihat fotonya',
            'page.mem.col2Item3': 'Saring kenangan berdasarkan waktu atau album tempat',
            'page.mem.col2Item4': 'Sepenuhnya privat, hanya untuk kamu baca sendiri',
            'page.mem.noteTitle': 'Album Kenangan Tanpa Linimasa Publik',
            'page.mem.noteBody': 'Memento dibuat untuk menyimpan cerita hidupmu apa adanya, tanpa perlu memikirkan likes, komentar, atau tampilan media sosial.',

            /* Dynamic / Script Feedback */
            'js.sectionLoadError': 'Gagal memuat bagian halaman. Pastikan website dijalankan lewat server lokal.',
            'js.sending': 'Mengirim...',
            'js.sendMessage': 'Kirim Pesan',
            'js.sendFailed': 'Gagal mengirim pesan. Coba lagi nanti atau kirim email langsung ke partnership@lifesync.id.'
        },

        en: {
            /* Page metadata */
            'meta.home.title': 'LifeSync: Daily Habit Tracker and Assistance',
            'meta.home.desc': 'LifeSync: Daily Habit Tracker and Assistance brings together daily notes, habit tracking, schedules, spending, camera meal nutrition scanning, and photo journaling, built offline-first with automatic cloud sync.',
            'meta.notes.title': 'Structured Notes & Checklists - LifeSync: Daily Habit Tracker and Assistance',
            'meta.todo.title': 'Dedicated Habit Tracker & To-Do - LifeSync: Daily Habit Tracker and Assistance',
            'meta.calendar.title': 'Planner & Event Calendar - LifeSync: Daily Habit Tracker and Assistance',
            'meta.finance.title': 'Personal Cash Flow Tracker - LifeSync: Daily Habit Tracker and Assistance',
            'meta.nutrition.title': 'Camera Nutrition & Food Scan - LifeSync: Daily Habit Tracker and Assistance',
            'meta.memento.title': 'Memento Journal & Memory Map - LifeSync: Daily Habit Tracker and Assistance',

            /* Navigation & Header */
            'nav.skip': 'Skip to main content',
            'nav.announcement': 'LifeSync is in active development. Core features and cloud sync stay free. Try the browser preview while we finish the mobile release.',
            'nav.announcementCta': 'See 6 Features',
            'nav.brandAria': 'LifeSync: Daily Habit Tracker and Assistance',
            'nav.primaryAria': 'Primary',
            'nav.mobileAria': 'Mobile navigation',
            'nav.langGroupAria': 'Select language',
            'nav.langIdAria': 'Bahasa Indonesia',
            'nav.langEnAria': 'English',
            'nav.features': 'Features',
            'nav.offline': 'Offline',
            'nav.ai': 'AI Help',
            'nav.pricing': 'Pricing',
            'nav.contact': 'Contact',
            'nav.tryDemo': 'Try Demo',
            'nav.seePlans': 'See Plans',
            'nav.mobilePlans': 'See Free & Premium Plans',
            'nav.mobileDemo': 'Try Browser Demo',
            'nav.menuOpen': 'Open navigation menu',
            'nav.menuClose': 'Close navigation menu',

            /* Hero */
            'hero.eyebrow': 'LifeSync: Daily Habit Tracker and Assistance',
            'hero.h1Html': 'One calm place for your <span class="text-primary italic font-serif">habits</span>, <span class="text-secondary italic font-serif">schedule</span>, and daily notes.',
            'hero.subtitle': 'Keep your to-dos, habits, notes, daily spending, and meal nutrition in one app. Everything saves straight to your phone offline and syncs across your devices once you reconnect.',
            'hero.ctaPrimary': 'See Free Plan',
            'hero.ctaDemo': 'Try Browser Demo',
            'hero.ctaFeatures': 'See All 6 Features',
            'hero.pill1Title': 'Works Offline',
            'hero.pill1Sub': 'Saves locally without signal',
            'hero.pill2Title': 'Free Cloud Sync',
            'hero.pill2Sub': 'Updates across your devices',
            'hero.pill3Title': 'No Ads or Trackers',
            'hero.pill3Sub': 'Your records stay yours',
            'hero.demoBelowCta': 'Open Full Interactive Demo',

            /* Hero Phone Showcase */
            'hero.phone.navAria': 'App preview navigation',
            'hero.phone.greeting': 'Good morning, Megah',
            'hero.phone.subgreeting': 'Let\'s take today one step at a time.',
            'hero.phone.progressTitle': 'Today\'s Progress',
            'hero.phone.progressBadge': '60% Done',
            'hero.phone.targetLabel': 'Goals',
            'hero.phone.progressHeadline': '3 of 5 habits done',
            'hero.phone.progressNote': 'Steady progress still counts. Ready for the next one.',
            'hero.phone.productivityTitle': 'Productivity',
            'hero.phone.plannerTitle': 'Planner',
            'hero.phone.plannerSub': 'Schedule & to-dos',
            'hero.phone.notesTitle': 'Notes',
            'hero.phone.notesSub': 'Ideas & checklists',
            'hero.phone.weekTitle': 'This Week',
            'hero.phone.streak': '5-day streak',
            'hero.phone.dayMon': 'Mon',
            'hero.phone.dayTue': 'Tue',
            'hero.phone.dayWed': 'Wed',
            'hero.phone.dayThu': 'Thu',
            'hero.phone.dayThuMark': 'T',
            'hero.phone.dayFri': 'Fri',
            'hero.phone.daySat': 'Sat',
            'hero.phone.daySun': 'Sun',
            'hero.phone.insightTitle': 'Today\'s Insight',
            'hero.phone.insightBadge': 'Local',
            'hero.phone.insightBody': 'You tend to focus best in the morning. Finish your main task before noon to keep your afternoon lighter.',
            'hero.phone.dailyTitle': 'Daily List',
            'hero.phone.seeAll': 'See All',
            'hero.phone.habit1Title': 'Drink Water',
            'hero.phone.habit1Sub': '4 / 8 glasses • In progress',
            'hero.phone.habit2Title': 'Light Stretching',
            'hero.phone.habit2Sub': '10 min • Done',
            'hero.phone.habit3Title': 'Read a Book',
            'hero.phone.habit3Sub': '20:00 • Tonight',
            'hero.phone.habit4Title': 'Log Spending',
            'hero.phone.habit4Sub': 'Not logged yet today',

            'hero.phone.financeTitle': 'Finance',
            'hero.phone.financeSub': 'Track your income and spending',
            'hero.phone.financeMonth': '‹ Oct 2026 ›',
            'hero.phone.incomeLabel': 'Income',
            'hero.phone.incomeAmount': 'Rp 7,500,000',
            'hero.phone.incomeCount': '8 Entries',
            'hero.phone.expenseLabel': 'Expenses',
            'hero.phone.expenseAmount': 'Rp 3,250,000',
            'hero.phone.expenseCount': '14 Entries',
            'hero.phone.txTotal': '22 Entries Total',
            'hero.phone.txNet': 'Net + Rp 4,250,000 (Surplus)',
            'hero.phone.cashSummary': 'Cash Flow Summary',
            'hero.phone.detail': 'Details',
            'hero.phone.tabDaily': 'Daily',
            'hero.phone.tabWeekly': 'Weekly',
            'hero.phone.tabMonthly': 'Monthly',
            'hero.phone.wk1': 'Wk 1',
            'hero.phone.wk2': 'Wk 2',
            'hero.phone.wk3': 'Wk 3',
            'hero.phone.wk4': 'Wk 4',
            'hero.phone.recentTx': 'Recent Entries',
            'hero.phone.tx1Title': 'Monthly Salary',
            'hero.phone.tx1Sub': 'Yesterday • Income',
            'hero.phone.tx1Val': '+ Rp 7,500,000',
            'hero.phone.tx2Title': 'Groceries',
            'hero.phone.tx2Sub': 'Today • Shopping',
            'hero.phone.tx2Val': '- Rp 850,000',
            'hero.phone.tx3Title': 'Coffee & Breakfast',
            'hero.phone.tx3Sub': 'Today • Food',
            'hero.phone.tx3Val': '- Rp 45,000',

            'hero.phone.nutritionTitle': 'Nutrition',
            'hero.phone.nutritionSub': 'Track meals and daily intake',
            'hero.phone.nutritionBadge': 'Food Scan',
            'hero.phone.calTargetUnit': '/ 2,000 kcal',
            'hero.phone.calToday': 'Calories Today',
            'hero.phone.calPct': '62% of your daily energy target',
            'hero.phone.macroTitle': 'Daily Macros',
            'hero.phone.protein': 'Protein',
            'hero.phone.carbs': 'Carbs',
            'hero.phone.fat': 'Fat',
            'hero.phone.water': 'Water',
            'hero.phone.waterVal': '5 / 8 glasses',
            'hero.phone.scannedFood': 'Grilled Chicken & Rice',
            'hero.phone.scannedMeta': '520 kcal • 28g Protein • AI Checked',

            'hero.phone.mementoTitle': 'Memento',
            'hero.phone.mementoBadge': 'Batam',
            'hero.phone.mementoSub': 'Moments saved along your trips',
            'hero.phone.mapTitle': 'Memory Map',
            'hero.phone.mapRegion': 'Batam Island',
            'hero.phone.pin1': 'Barelang',
            'hero.phone.pin2': 'Nongsa',
            'hero.phone.focusMap': 'Center Map',
            'hero.phone.savedCount': '34 Saved Moments',
            'hero.phone.savedPlaces': '12 Places in Batam',
            'hero.phone.place1': 'Barelang Bridge',
            'hero.phone.place1Sub': '8 Photos • Batam',
            'hero.phone.place2': 'Nongsa Beach',
            'hero.phone.place2Sub': '6 Photos • Sunset',

            'hero.phone.profileTitle': 'Profile',
            'hero.phone.profileName': 'Megah',
            'hero.phone.profileEmail': 'megah@lifesync.id',
            'hero.phone.statStreak': 'Day Streak',
            'hero.phone.statDone': 'Completed',
            'hero.phone.statJoinedDate': 'Oct 2026',
            'hero.phone.statJoined': 'Joined',
            'hero.phone.accountHeading': 'Account',
            'hero.phone.editProfile': 'Edit Profile',
            'hero.phone.devices': 'Signed-in Devices',
            'hero.phone.syncNow': 'Sync Now',
            'hero.phone.syncStatus': 'Status: Just synced',
            'hero.phone.prefsHeading': 'Preferences',
            'hero.phone.dailyNotif': 'Daily Notifications',
            'hero.phone.dailyNotifSub': 'Daily habit reminders',

            'hero.phone.tabHome': 'Home',
            'hero.phone.tabFinance': 'Finance',
            'hero.phone.tabNutrition': 'Nutrition',
            'hero.phone.tabMemento': 'Memento',
            'hero.phone.tabProfile': 'Profile',

            /* Features section */
            'fitur.eyebrow': 'Six Core Modules',
            'fitur.h2': 'Six everyday tools that fit together.',
            'fitur.subtitle': 'Instead of juggling half a dozen separate apps, LifeSync keeps your notes, habits, schedule, spending, meal nutrition, and location memories under one roof.',
            'fitur.card1Tag': 'Notes & Ideas',
            'fitur.card1Title': 'Structured Notes',
            'fitur.card1Desc': 'Draft ideas, project checklists, or rich-text notes without clutter. Organize with nested folders and tags, and keep conflict copies safe if you edit offline on two devices.',
            'fitur.card1Bullet1': 'Nested folders & quick tag search',
            'fitur.card1Bullet2': 'Conflict copies prevent overwritten edits',
            'fitur.card1Cta': 'See Notes Details',

            'fitur.card2Tag': 'Habits',
            'fitur.card2Title': 'Dedicated Habit Tracker',
            'fitur.card2Desc': 'Habits live separately from your work backlog so a busy week doesn\'t bury your daily health routines. Set daily or weekly goals and follow your progress at your own pace.',
            'fitur.card2Bullet1': 'Separate from work to-dos to cut noise',
            'fitur.card2Bullet2': 'Flexible daily or weekly targets',
            'fitur.card2Bullet3': 'Reminders tuned to your day (Premium)',
            'fitur.card2Cta': 'See Habits & To-Do',

            'fitur.card3Tag': 'Schedule & Tasks',
            'fitur.card3Title': 'Planner & Calendar',
            'fitur.card3Desc': 'Check your day, week, or month on a clean calendar. Recurring events and reminders keep running on your phone even without a connection.',
            'fitur.card3Bullet1': 'Automatic reminders for recurring events',
            'fitur.card3Bullet2': 'Priority levels so urgent tasks stand out',
            'fitur.card3Cta': 'See Calendar Details',

            'fitur.card4Tag': 'Personal Finance',
            'fitur.card4Title': 'Cash Flow Tracker',
            'fitur.card4Desc': 'Log income and expenses in seconds, even offline. See where your money goes with clean category charts and monthly summaries.',
            'fitur.card4Bullet1': 'Automatic monthly totals, no spreadsheets',
            'fitur.card4Bullet2': 'Custom categories with clear breakdown charts',
            'fitur.card4Cta': 'See Finance Details',

            'fitur.card5Tag': 'Food & Nutrition',
            'fitur.card5Title': 'Nutrition & Food Scan',
            'fitur.card5Desc': 'Snap a photo of your meal. LifeSync identifies what\'s on your plate and estimates calories, protein, carbs, and fats without weighing every ingredient.',
            'fitur.card5Bullet1': 'Scan a meal photo in seconds',
            'fitur.card5Bullet2': 'Clear breakdown of calories and macros',
            'fitur.card5Cta': 'See Nutrition Scanner',

            'fitur.card6Tag': 'Memories',
            'fitur.card6Title': 'Memento Journal',
            'fitur.card6Desc': 'Save personal notes alongside photos pinned to the places you visited. Kept as a private archive for yourself rather than a public social feed.',
            'fitur.card6Bullet1': 'Browse memories on an interactive map',
            'fitur.card6Bullet2': 'Private photo archive, no public feed',
            'fitur.card6Cta': 'See Memento Details',

            /* Offline section */
            'offline.eyebrow': 'Offline-First & Sync',
            'offline.h2': 'Keeps working when your connection drops.',
            'offline.subtitle': 'Your daily tracker shouldn\'t stall on a flight, train, or dead zone. LifeSync stores everything locally on your phone for instant opening and syncs quietly in the background once you\'re back online.',
            'offline.item1Title': 'Instant Response, Zero Wait',
            'offline.item1Desc': 'Opening notes, checking off habits, and logging expenses happen directly in local phone storage without waiting on a server or burning mobile data.',
            'offline.item2Title': 'Automatic Multi-Device Sync',
            'offline.item2Badge': 'Free',
            'offline.item2Desc': 'Sign in with your account and changes made on your phone carry over to your other devices automatically.',
            'offline.item3Title': 'No Overwritten Edits',
            'offline.item3Desc': 'If you edit the same note offline on two devices, LifeSync keeps both versions as safe conflict copies instead of deleting one.',
            'offline.item4Title': 'No Ads or Third-Party Trackers',
            'offline.item4Desc': 'We don\'t show ads or sell your personal logs. Your notes, finances, and journal entries stay private.',
            'offline.flowTitle': 'How Offline Sync Works',
            'offline.flowBadge': 'Automatic',
            'offline.step1Title': 'While Offline',
            'offline.step1Desc': 'Write notes, check off habits, and log spending normally without any signal.',
            'offline.step2Title': 'Back Online',
            'offline.step2Desc': 'LifeSync quietly sends your latest edits in the background without interrupting what you\'re doing.',
            'offline.step3Title': 'Open Anywhere',
            'offline.step3Desc': 'Pick up another phone or tablet and your updated notes and habit progress are already there.',
            'offline.flowFooter': 'Cloud sync is always free',
            'offline.flowFooterBadge': 'Free',

            /* AI section */
            'ai.eyebrow': 'Quiet Built-In AI',
            'ai.h2': 'Built directly into your daily screens, no chat window needed.',
            'ai.subtitle': 'You don\'t need to prompt a chatbot or copy-paste context. LifeSync runs AI straight inside the screens you already use, from scanning meals to timing helpful reminders.',
            'ai.card1Tag': 'Nutrition',
            'ai.card1Title': 'Camera Food Scanner',
            'ai.card1Desc': 'Point your camera at your plate. LifeSync detects the foods, matches nutrition data, and estimates calories and macros in seconds without storing your photos on our servers.',
            'ai.card1Footer': 'Editable portions before saving',
            'ai.card2Tag': 'Reminders • Premium',
            'ai.card2Title': 'Context-Aware Reminders',
            'ai.card2Desc': 'Instead of repeating the same static alert, Premium writes reminders around your real day, taking upcoming meetings, unfinished habits, and rest hours into account.',
            'ai.card2Footer': 'Adapts to your schedule and habits',
            'ai.card3Tag': 'Finance',
            'ai.card3Title': 'Spending Pattern Notes',
            'ai.card3Desc': 'Spots categories where weekly spending is creeping up and summarizes your monthly cash flow so budgeting stays straightforward.',
            'ai.card3Footer': 'Highlights monthly spending trends',
            'ai.scanEyebrow': 'Simpler Meal Tracking',
            'ai.scanH3': 'Log meals without a food scale.',
            'ai.scanDesc': 'Most nutrition logs fail because typing every gram gets exhausting. LifeSync keeps it down to three quick steps:',
            'ai.scanStep1Title': 'Snap Your Plate',
            'ai.scanStep1Desc': 'Take a quick photo of breakfast, lunch, or dinner.',
            'ai.scanStep2Title': 'Review Items & Portions',
            'ai.scanStep2Desc': 'AI identifies the meal and lets you adjust portion sizes before saving.',
            'ai.scanStep3Title': 'Track Daily Macros',
            'ai.scanStep3Desc': 'Calories, protein, carbs, and fat are saved offline to your daily totals.',
            'ai.scanCta': 'See Premium Plan',
            'ai.previewTitle': 'Morning Summary',
            'ai.previewTime': 'Today, 07:15 AM',
            'ai.previewInsightHtml': '“You kept your <strong>lights-out before 11 PM habit for 8 days straight</strong>. You have 3 meetings today, so try taking a 10-minute breather around noon.”',
            'ai.previewInsightTag': 'Daily Rhythm Note',
            'ai.previewInsightMode': 'Automatic',
            'ai.previewReminderTitle': 'Contextual Reminder (Premium)',
            'ai.previewReminderBadge': 'Dynamic',
            'ai.previewReminderBody': '“Megah, your 90-minute meeting starts in 30 minutes at 2:00 PM. Grab a glass of water before joining.”',
            'ai.previewScanTitle': 'Scan Result: Salmon & Brown Rice Bowl',
            'ai.previewScanBadge': 'Portion Detected',
            'ai.previewScanEnergyLabel': 'Estimated Energy',
            'ai.previewScanEnergyVal': '540 kcal',
            'ai.previewMacroP': 'Protein 42g',
            'ai.previewMacroC': 'Carbs 48g',
            'ai.previewMacroF': 'Fat 14g',

            /* Pricing section */
            'pricing.eyebrow': 'Simple, Honest Pricing',
            'pricing.h2': 'Core features stay free. Premium covers AI compute.',
            'pricing.subtitle': 'We don\'t lock cloud sync behind a subscription. Your notes, habits, and multi-device sync stay free forever; Premium simply pays for camera vision and AI reminders.',
            'pricing.freeLabel': 'Core Plan',
            'pricing.freeBadge': 'Free Forever',
            'pricing.freePrice': 'IDR 0',
            'pricing.freePeriod': '/ forever',
            'pricing.freeDesc': 'All six core daily tools on your phone plus two-way multi-device cloud sync at zero cost.',
            'pricing.freeListLabel': 'Included for free:',
            'pricing.freeItem1Html': '<strong>Offline-First Storage:</strong> Every core tool works without an internet connection',
            'pricing.freeItem2Html': '<strong>Free Cloud Sync:</strong> Automatic multi-device sync when signed in',
            'pricing.freeItem3Html': '<strong>Structured Notes:</strong> Nested folders, tags, and safe conflict copies',
            'pricing.freeItem4Html': '<strong>Dedicated Habit Tracker:</strong> Separate from your work to-dos',
            'pricing.freeItem5Html': '<strong>Planner &amp; Calendar:</strong> Structured schedules with recurring reminders',
            'pricing.freeItem6Html': '<strong>Cash Flow Tracker:</strong> Income, expense logs, and category charts',
            'pricing.freeItem7Html': '<strong>Food Scan Preview:</strong> Try camera meal scanning with a limited free quota',
            'pricing.freeItem8Html': '<strong>Memento Journal:</strong> Private photo memories pinned on a map',
            'pricing.freeCta': 'Get the Free Plan',

            'pricing.premBadge': 'Recommended',
            'pricing.premLabel': 'Full AI Access',
            'pricing.premPrice': 'IDR 29,000',
            'pricing.premPeriod': '/ month',
            'pricing.premDesc': 'For frequent meal scanning and daily reminders tailored to your actual schedule.',
            'pricing.premListLabel': 'Everything in Free, plus:',
            'pricing.premItem1Html': '<strong class="text-on-surface">Unlimited Meal Scans:</strong> Snap any meal to estimate calories and macros',
            'pricing.premItem2Html': '<strong class="text-on-surface">Context-Aware Reminders:</strong> Reminders adapt to your meetings, pending habits, and rest windows',
            'pricing.premItem3Html': '<strong class="text-on-surface">Morning Rhythm Summary:</strong> Daily insights right on your home screen, no chat required',
            'pricing.premItem4Html': '<strong class="text-on-surface">Smart Spending Insights:</strong> Flags rising expense categories and monthly savings pace',
            'pricing.premItem5': 'Priority queue for camera vision and AI processing',
            'pricing.premCta': 'Choose Premium',
            'pricing.premFootnote': 'Cancel anytime with no lock-in.',

            'pricing.trust1Title': 'Why Is Cloud Sync Free?',
            'pricing.trust1Desc': 'Syncing notes and habits costs very little. We don\'t believe in charging a fee just to keep your own data across devices.',
            'pricing.trust2Title': 'Honest AI Pricing',
            'pricing.trust2Desc': 'Premium exists strictly to cover the compute cost of camera nutrition scanning and adaptive reminders.',
            'pricing.trust3Title': 'No Data Lock-In',
            'pricing.trust3Desc': 'Even if you cancel Premium, all your past notes, meal logs, and finances remain yours to access.',

            /* Dev modal */
            'modal.closeAria': 'Close dialog',
            'modal.subLabel': 'Availability Notice',
            'modal.title': 'Still in Active Development',
            'modal.freeTitle': 'Free Core Plan',
            'modal.freeDesc': 'The LifeSync mobile app is still in active development and hasn\'t launched on Google Play or the App Store yet.',
            'modal.premTitle': 'Premium Access Plan',
            'modal.premDesc': 'Premium subscriptions aren\'t open yet while the LifeSync mobile app is still in active development.',
            'modal.optionsHeading': 'What you can try right now:',
            'modal.option1Html': '<strong class="text-on-surface font-semibold">Browser Simulator:</strong> Try the interactive LifeSync prototype right in your browser to see how the screens and flows feel.',
            'modal.option2Html': '<strong class="text-on-surface font-semibold">Questions &amp; Feedback:</strong> Have a feature idea or launch question? Reach out to our team via email or Instagram.',
            'modal.ctaMockup': 'Open Demo Simulator',
            'modal.ctaContact': 'Contact Us',

            /* Contact */
            'contact.eyebrow': 'Contact • Batam, Indonesia',
            'contact.h2': 'Questions or collaboration ideas?',
            'contact.subtitle': 'Whether you want to ask about the release timeline, share feedback, or explore a partnership, you can reach our team directly below.',
            'contact.locLabel': 'Based In',
            'contact.locTitle': 'Batam, Riau Islands',
            'contact.locDesc': 'Where LifeSync is designed and built in Indonesia.',
            'contact.locTime': 'Western Indonesia Time (WIB / UTC+7)',
            'contact.emailLabel': 'Direct Email',
            'contact.emailDesc': 'For product questions, feature feedback, and partnership inquiries.',
            'contact.emailCta': 'Send Email',
            'contact.igLabel': 'Updates & Release Notes',
            'contact.igDesc': 'Follow build updates, feature previews, and launch announcements.',
            'contact.igCta': 'Open Instagram',
            'contact.bannerEyebrow': 'Partnerships & Research',
            'contact.bannerTitle': 'Interested in working with LifeSync?',
            'contact.bannerDesc': 'If you\'re part of a community, research group, or team interested in daily habits, nutrition, or offline-first apps, drop us an email.',
            'contact.bannerEmailCta': 'Email Our Team',
            'contact.bannerIgCta': 'Official Instagram',

            /* Footer */
            'footer.tagline': 'Daily Habit Tracker and Assistance',
            'footer.copy': '© 2026 LifeSync: Daily Habit Tracker and Assistance.',
            'footer.privacy': 'Local Storage • No Ads • Private by Design',
            'footer.location': 'Batam, Riau Islands, Indonesia',

            /* Shared feature subpage strings */
            'page.backLink': 'Back to LifeSync Features',

            /* Feature Page: Notes */
            'page.notes.h1': 'Structured Notes & Checklists',
            'page.notes.sub': 'Rich Formatting • Nested Folders • Conflict Copies',
            'page.notes.intro': 'A quiet space for notes, reading summaries, and project checklists without distraction. Every keystroke saves straight to local phone storage, with safe conflict copies so edits on two devices never overwrite each other.',
            'page.notes.col1Title': 'Clean Formatting & Fast Lookup',
            'page.notes.col1Item1': 'Rich text support: headings, checklists, quotes, and simple tables',
            'page.notes.col1Item2': 'Organize notes inside nested folders by topic or project',
            'page.notes.col1Item3': 'Cross-topic tags so older notes stay easy to find',
            'page.notes.col1Item4': 'Pin priority notes right to the top of your list',
            'page.notes.col2Title': 'Conflict-Safe & Ready Offline',
            'page.notes.col2Item1Html': '<strong>Safe Conflict Copies:</strong> Edits made offline on two devices are saved separately instead of overwriting',
            'page.notes.col2Item2': '30-day trash retention before permanent deletion',
            'page.notes.col2Item3': 'Stored in local SQLite on your phone with zero signal required',
            'page.notes.col2Item4': 'Syncs automatically across devices when connected to free cloud sync',
            'page.notes.noteTitle': 'Why It Works This Way',
            'page.notes.noteBody': 'Ideas rarely wait for good Wi-Fi. Because notes save locally first, you can start writing the moment the app opens without worrying about losing a draft.',

            /* Feature Page: Habit & To-Do */
            'page.todo.h1': 'Dedicated Habit Tracker & To-Do',
            'page.todo.sub': 'Separate From Work Backlog • Flexible Goals • 30-Day Progress',
            'page.todo.intro': 'Building good habits takes headspace, not a stressful work queue. LifeSync keeps your habit tracker separate from your to-do list so daily routines stay calm and steady.',
            'page.todo.col1Title': 'Habit Tracker',
            'page.todo.col1Item1': 'Set daily, weekday, or weekly targets that fit your schedule',
            'page.todo.col1Item2': 'Track points and realistic streaks without guilt traps',
            'page.todo.col1Item3': '30-day progress heatmap to review consistency at a glance',
            'page.todo.col1Item4': 'Gentle reminders without noisy notification spam',
            'page.todo.col1Item5Html': '<strong>Context-Aware Reminders (Premium):</strong> Reminders adapt to your actual schedule and day',
            'page.todo.col2Title': 'Tasks & Priorities (To-Do)',
            'page.todo.col2Item1': 'Priority levels from Low and Normal to High and Urgent',
            'page.todo.col2Item2': 'Due dates linked directly with your calendar timeline',
            'page.todo.col2Item3': 'Track task states: Not Started, In Progress, and Done',
            'page.todo.col2Item4': 'Universal tags for quick cross-project filtering',
            'page.todo.noteTitle': 'Consistency Without Burnout',
            'page.todo.noteBody': 'When work piles up, basics like drinking water or stretching are usually the first to slip. Keeping habits in their own lane helps protect them.',

            /* Feature Page: Calendar */
            'page.cal.h1': 'Planner & Event Calendar',
            'page.cal.sub': 'Clean Views • Recurring Reminders • Works Offline',
            'page.cal.intro': 'See your time clearly without staring at a cramped wall of text. LifeSync brings meetings, recurring schedules, and task due dates together in one calm timeline.',
            'page.cal.col1Title': 'Events & Recurring Reminders',
            'page.cal.col1Item1': 'Add events with titles, notes, locations, and custom alerts',
            'page.cal.col1Item2': 'Flexible repeat rules: daily, weekdays, weekly, or custom schedules',
            'page.cal.col1Item3': 'Local notifications still fire on time when your phone is offline',
            'page.cal.col1Item4': 'Link events directly to related to-do checklists',
            'page.cal.col2Title': 'Day, Week & Month Views',
            'page.cal.col2Item1': 'Monthly view for planning ahead across weeks',
            'page.cal.col2Item2': 'Weekly and daily views to focus on what matters today',
            'page.cal.col2Item3': 'Color-coded categories for work, health, family, and rest',
            'page.cal.col2Item4': 'Automatic multi-device sync via free cloud backup',
            'page.cal.noteTitle': 'A Realistic View of Your Day',
            'page.cal.noteBody': 'Open spacing helps you see how full your day actually is, leaving room to breathe between commitments.',

            /* Feature Page: Finance */
            'page.fin.h1': 'Personal Cash Flow Tracker',
            'page.fin.sub': 'Quick Logging • Category Breakdown • Monthly Summaries',
            'page.fin.intro': 'Keep tabs on daily income and spending without maintaining a spreadsheet. LifeSync makes logging fast even offline and summarizes your cash flow in clear charts.',
            'page.fin.col1Title': 'Fast Entry & Custom Categories',
            'page.fin.col1Item1': 'Record a transaction in seconds with amount, date, and category',
            'page.fin.col1Item2': 'Customize categories for groceries, transit, bills, or savings',
            'page.fin.col1Item3': 'Log purchases immediately even with no signal',
            'page.fin.col1Item4': 'Edit or remove entries anytime without breaking totals',
            'page.fin.col2Title': 'Charts & Monthly Totals',
            'page.fin.col2Item1': 'Donut chart showing spending share across each category',
            'page.fin.col2Item2': 'Automatic monthly totals for income, expenses, and net balance',
            'page.fin.col2Item3': 'Compare money in versus money out across weeks',
            'page.fin.col2Item4': 'Optional AI spending trend notes available in Premium',
            'page.fin.noteTitle': 'Financial Records Stay Private',
            'page.fin.noteBody': 'Your transaction logs are never sold or used for ad profiling. Everything stays local on your phone and tied strictly to your account.',

            /* Feature Page: Nutrition */
            'page.nut.h1': 'Camera Nutrition & Food Scan',
            'page.nut.sub': 'Camera Scan • Nutrition Reference • Macro Breakdown',
            'page.nut.intro': 'Skip typing every ingredient gram by gram. Point your camera at your meal and LifeSync identifies the dishes, matches nutrition references, and estimates calories and macros.',
            'page.nut.col1Title': 'Scan Meals With Your Camera',
            'page.nut.col1Item1Html': '<strong>Dish &amp; Portion Detection:</strong> Camera recognizes foods and estimates portions on your plate',
            'page.nut.col1Item2Html': '<strong>Easy Adjustments:</strong> Correct dish names or serving sizes before saving',
            'page.nut.col1Item3Html': '<strong>Full Estimate:</strong> Breaks down calories, protein, carbs, fat, and fiber',
            'page.nut.col1Item4': 'Photos are analyzed directly from your phone without being stored on our servers',
            'page.nut.col2Title': 'Daily Intake & Water Log',
            'page.nut.col2Item1': 'Automatic daily calorie totals compared against your goal',
            'page.nut.col2Item2': 'Gram-by-gram view of protein, carbs, healthy fats, and fiber',
            'page.nut.col2Item3': 'Organized by Breakfast, Lunch, Dinner, and Snacks',
            'page.nut.col2Item4': 'Track daily water glasses alongside your meals',
            'page.nut.noteTitle': 'Clear Awareness Without Diet Guilt',
            'page.nut.noteBody': 'Food scanning is here to give you an objective snapshot of daily fuel, not to lecture you over every bite.',

            /* Feature Page: Memento */
            'page.mem.h1': 'Memento Journal & Memory Map',
            'page.mem.sub': 'Photos & Stories • Map Pins • Private Archive',
            'page.mem.intro': 'Life isn\'t just tasks checked off a list. Memento lets you save reflections and photos linked to the exact places on a map where those moments happened.',
            'page.mem.col1Title': 'Photo Journal & Map Pins',
            'page.mem.col1Item1': 'Attach photos directly alongside your written journal reflections',
            'page.mem.col1Item2': 'Pin memories to geographic coordinates on your map',
            'page.mem.col1Item3': 'Add mood notes and turn favorite photos into stickers',
            'page.mem.col1Item4': 'Photos compress efficiently so they don\'t bloat phone storage',
            'page.mem.col2Title': 'Revisit Places on Your Map',
            'page.mem.col2Item1': 'Browse pins across your personal travel and everyday map',
            'page.mem.col2Item2': 'Tap any location pin to reopen its photos and story',
            'page.mem.col2Item3': 'Filter memories by date range or place album',
            'page.mem.col2Item4': 'Completely private, visible only to you',
            'page.mem.noteTitle': 'Memories Without a Public Feed',
            'page.mem.noteBody': 'Memento is built as a private archive for your own life, free from public likes, comments, or social feeds.',

            /* Dynamic / Script Feedback */
            'js.sectionLoadError': 'Failed to load page section. Make sure the site is served over a local web server.',
            'js.sending': 'Sending...',
            'js.sendMessage': 'Send Message',
            'js.sendFailed': 'Could not send message. Please try again later or email partnership@lifesync.id directly.'
        }
    };

    var currentLang = 'id';

    function normalizeLang(lang) {
        if (!lang || typeof lang !== 'string') return null;
        var clean = lang.trim().toLowerCase().slice(0, 2);
        return SUPPORTED.indexOf(clean) !== -1 ? clean : null;
    }

    function detectInitialLang() {
        try {
            var params = new URLSearchParams(global.location.search);
            var fromQuery = normalizeLang(params.get('lang'));
            if (fromQuery) return fromQuery;
        } catch (e) {
            // Ignore URL parsing issues
        }
        try {
            var fromStorage = normalizeLang(global.localStorage.getItem(STORAGE_KEY));
            if (fromStorage) return fromStorage;
        } catch (e) {
            // Ignore storage access errors
        }
        return normalizeLang(document.documentElement.getAttribute('lang')) || 'id';
    }

    function t(key, lang) {
        var targetLang = normalizeLang(lang) || currentLang;
        var dict = TRANSLATIONS[targetLang] || TRANSLATIONS.id;
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
            return dict[key];
        }
        if (Object.prototype.hasOwnProperty.call(TRANSLATIONS.id, key)) {
            return TRANSLATIONS.id[key];
        }
        return '';
    }

    function updateMetadata(lang) {
        var titleKey = document.body && document.body.getAttribute('data-i18n-title');
        if (titleKey) {
            var nextTitle = t(titleKey, lang);
            if (nextTitle) document.title = nextTitle;
        }
        var descKey = document.body && document.body.getAttribute('data-i18n-desc');
        if (descKey) {
            var nextDesc = t(descKey, lang);
            if (nextDesc) {
                var metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) metaDesc.setAttribute('content', nextDesc);
                var ogDesc = document.querySelector('meta[property="og:description"]');
                if (ogDesc) ogDesc.setAttribute('content', nextDesc);
                var twDesc = document.querySelector('meta[name="twitter:description"]');
                if (twDesc) twDesc.setAttribute('content', nextDesc);
            }
        }
        if (titleKey) {
            var ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.setAttribute('content', document.title);
            var twTitle = document.querySelector('meta[name="twitter:title"]');
            if (twTitle) twTitle.setAttribute('content', document.title);
        }
    }

    function updateSwitcherUI(lang, root) {
        var scope = root || document;
        scope.querySelectorAll('[data-lang-option]').forEach(function (btn) {
            var option = btn.getAttribute('data-lang-option');
            var active = option === lang;
            btn.setAttribute('aria-pressed', String(active));
            btn.classList.toggle('is-active', active);
            btn.classList.toggle('bg-primary', active);
            btn.classList.toggle('text-on-primary', active);
            btn.classList.toggle('shadow-xs', active);
            btn.classList.toggle('text-on-surface-variant', !active);
            btn.classList.toggle('hover:text-on-surface', !active);
            btn.classList.toggle('hover:bg-surface-container-lowest/80', !active);
        });
    }

    function apply(lang, root) {
        var targetLang = normalizeLang(lang) || currentLang;
        var scope = root || document;

        document.documentElement.setAttribute('lang', targetLang);
        updateMetadata(targetLang);

        scope.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var val = t(key, targetLang);
            if (val) el.textContent = val;
        });

        scope.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            var val = t(key, targetLang);
            if (val) el.innerHTML = val;
        });

        scope.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-aria');
            var val = t(key, targetLang);
            if (val) el.setAttribute('aria-label', val);
        });

        scope.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            var val = t(key, targetLang);
            if (val) el.setAttribute('placeholder', val);
        });

        updateSwitcherUI(targetLang, scope);
    }

    function setLang(lang, options) {
        var next = normalizeLang(lang);
        if (!next) return currentLang;

        var persist = !options || options.persist !== false;
        currentLang = next;

        if (persist) {
            try {
                global.localStorage.setItem(STORAGE_KEY, next);
            } catch (e) {
                // Ignore storage access errors
            }
        }

        apply(next, document);

        try {
            document.dispatchEvent(new CustomEvent('lifesync:langchange', {
                detail: { lang: next }
            }));
        } catch (e) {
            // Ignore CustomEvent issues in legacy environments
        }

        return next;
    }

    var listenerBound = false;

    function bindSwitcherEvents() {
        if (listenerBound) return;
        listenerBound = true;

        document.addEventListener('click', function (e) {
            var btn = e.target && e.target.closest ? e.target.closest('[data-lang-option]') : null;
            if (!btn) return;
            var lang = btn.getAttribute('data-lang-option');
            if (lang) setLang(lang);
        });
    }

    function init() {
        currentLang = detectInitialLang();
        bindSwitcherEvents();
        apply(currentLang, document);
        return currentLang;
    }

    global.LifeSyncI18n = {
        init: init,
        apply: apply,
        getLang: function () { return currentLang; },
        setLang: setLang,
        t: t,
        translations: TRANSLATIONS
    };
})(window);
