/**
 * LifeSync - Product Profile Website
 * Loader section + interaksi navbar (mobile menu, scroll spy, smooth scroll)
 *
 * Catatan arsitektur:
 * - Semua section dimuat paralel via fetch() lalu di-inject ke <div id="section-*">.
 * - Karena section baru tersedia SETELAH fetch selesai, seluruh interaksi
 *   (navbar, scroll spy, reveal) WAJIB diinisialisasi setelah SEMUA section
 *   selesai dimuat. Jika tidak, scroll spy akan mencari target yang belum ada.
 */

/* Konfigurasi situs */
/**
 * URL toko resmi (Google Play / App Store / website).
 * TODO: ganti dengan URL resmi saat sudah tersedia; selama kosong, mengarah ke #pricing.
 */
const STORE_URL = '';
const ANDROID_STORE_URL = '';
const IOS_STORE_URL = '';
const DOWNLOAD_SELECTOR = '[data-download]';
const DOWNLOAD_ANDROID_SELECTOR = '[data-download-android]';
const DOWNLOAD_IOS_SELECTOR = '[data-download-ios]';

// Ganti YOUR_FORM_ID_HERE dengan Form ID dari dashboard Formspree.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID_HERE';

const SECTIONS = [
    { id: 'section-header',  file: 'sections/header.html' },
    { id: 'section-hero',    file: 'sections/hero.html' },
    { id: 'section-fitur',   file: 'sections/fitur.html' },
    { id: 'section-offline', file: 'sections/offline.html' },
    { id: 'section-ai',      file: 'sections/ai.html' },
    { id: 'section-pricing', file: 'sections/pricing.html' },
    { id: 'section-kontak',  file: 'sections/kontak.html' },
    { id: 'section-footer',  file: 'sections/footer.html' },
];

function t(key, fallback) {
    if (window.LifeSyncI18n && typeof window.LifeSyncI18n.t === 'function') {
        var val = window.LifeSyncI18n.t(key);
        if (val) return val;
    }
    return fallback || '';
}

/* Loader section */
async function loadSection({ id, file }) {
    try {
        // Cache-buster agar browser tidak menyajikan HTML partial lama yang rusak.
        const response = await fetch(file + '?v=' + Date.now());
        if (!response.ok) {
            console.error('Gagal memuat ' + file + ' (HTTP ' + response.status + ')');
            const container = document.getElementById(id);
            if (container) {
                container.innerHTML = '<div class="max-w-xl mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-2xl text-center text-red-700 text-sm font-medium">' + t('js.sectionLoadError', 'Gagal memuat bagian halaman.') + ' (' + file + ' - HTTP ' + response.status + ')</div>';
            }
            return false;
        }
        const html = await response.text();
        const container = document.getElementById(id);
        if (!container) {
            console.error('Container #' + id + ' tidak ditemukan');
            return false;
        }
        container.innerHTML = html;
        return true;
    } catch (error) {
        console.error('Error loading ' + file + ':', error);
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = '<div class="max-w-xl mx-auto my-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl text-center text-amber-800 text-sm font-medium"><p class="font-bold mb-1">' + file + '</p><p class="text-xs text-amber-700">' + t('js.sectionLoadError', 'Gagal memuat bagian halaman. Pastikan website dijalankan lewat server lokal.') + '</p></div>';
        }
        return false;
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    if (window.LifeSyncI18n) {
        window.LifeSyncI18n.init();
    }

    const results = await Promise.all(SECTIONS.map(loadSection));

    const failed = SECTIONS.filter(function (_, i) { return !results[i]; });
    if (failed.length) {
        console.warn('Section gagal dimuat:', failed.map(function (s) { return s.file; }).join(', '));
    }

    if (window.LifeSyncI18n) {
        window.LifeSyncI18n.apply(window.LifeSyncI18n.getLang(), document);
    }

    var modules = [
        { name: 'Navbar', fn: initNavbar },
        { name: 'Reveal Animations', fn: initReveal },
        { name: 'Feature Cards', fn: initFeatureCards },
        { name: 'Showcase Navigation', fn: initShowcaseNavigation },
        { name: 'Download Links', fn: initDownloadLinks },
        { name: 'Kontak Form', fn: initKontakForm },
        { name: 'Smooth Scroll', fn: initSmoothScroll },
        { name: 'Pricing Modal', fn: initPricingModal },
        { name: 'Analytics Telemetry', fn: initAnalytics }
    ];

    modules.forEach(function (mod) {
        try {
            mod.fn();
        } catch (err) {
            console.error('Gagal menginisialisasi modul ' + mod.name + ':', err);
        }
    });

    // 3) Jika URL memiliki hash (#kontak, #pricing, dll.), scroll ulang dengan offset navbar setelah section ter-render
    if (window.location.hash) {
        setTimeout(function () {
            try {
                var target = document.querySelector(window.location.hash);
                if (target) {
                    var navbar = document.getElementById('navbar');
                    var offset = navbar ? navbar.offsetHeight : 80;
                    var top = target.getBoundingClientRect().top + window.scrollY - offset - 10;
                    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
                }
            } catch (e) {
                // Ignore invalid selector
            }
        }, 150);
    }
});

/* Navbar: menu mobile, sticky state, dan scroll spy */
function initNavbar() {
    var navbar  = document.getElementById('navbar');
    var bar     = document.getElementById('navbar-bar');
    var toggle  = document.getElementById('nav-toggle');
    var icon    = document.getElementById('nav-toggle-icon');
    var menu    = document.getElementById('nav-mobile-menu');

    if (!navbar || !toggle || !menu) return;

    function setMenu(open) {
        menu.classList.toggle('hidden', !open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute(
            'aria-label',
            open ? t('nav.menuClose', 'Tutup menu navigasi') : t('nav.menuOpen', 'Buka menu navigasi')
        );
        if (icon) {
            if (icon.classList.contains('material-symbols-outlined')) {
                icon.textContent = open ? 'close' : 'menu';
            } else {
                icon.classList.toggle('fa-bars', !open);
                icon.classList.toggle('fa-xmark', open);
            }
        }
    }

    toggle.addEventListener('click', function () {
        setMenu(menu.classList.contains('hidden'));
    });

    menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target)) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
            setMenu(false);
            toggle.focus();
        }
    });

    document.addEventListener('lifesync:langchange', function () {
        var isOpen = !menu.classList.contains('hidden');
        toggle.setAttribute(
            'aria-label',
            isOpen ? t('nav.menuClose', 'Tutup menu navigasi') : t('nav.menuOpen', 'Buka menu navigasi')
        );
    });

    var navLinks = document.querySelectorAll('.nav-link');

    function updateScrollSpy() {
        var sections = document.querySelectorAll('section[id], header[id]');
        var scrollY = window.scrollY;
        var current = '';

        sections.forEach(function (sec) {
            var top = sec.offsetTop - 120;
            if (scrollY >= top) current = sec.id;
        });

        navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            var active = href === '#' + current;
            link.classList.toggle('is-active', active);
            link.classList.toggle('text-primary', active);
            link.classList.toggle('font-bold', active);
        });
    }

    function onScroll() {
        var y = window.scrollY;
        var scrolled = y > 10;

        navbar.classList.toggle('is-scrolled', scrolled);
        if (scrolled) {
            navbar.classList.add('bg-surface/90', 'backdrop-blur-xl', 'shadow-soft');
            navbar.classList.remove('bg-transparent');
            if (bar) {
                bar.classList.add('border-outline-variant/30');
                bar.classList.remove('border-transparent');
            }
        } else {
            navbar.classList.remove('bg-surface/90', 'bg-white/95', 'backdrop-blur-xl', 'shadow-soft', 'shadow-sm');
            navbar.classList.add('bg-transparent');
            if (bar) {
                bar.classList.remove('border-outline-variant/30', 'border-slate-100');
                bar.classList.add('border-transparent');
            }
        }

        updateScrollSpy();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* Smooth scroll */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var hash = anchor.getAttribute('href');
            if (hash === '#') return;

            var target = document.querySelector(hash);
            if (!target) return;

            e.preventDefault();

            var navbar = document.getElementById('navbar');
            var offset = navbar ? navbar.offsetHeight : 72;

            var top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });
}

/* Download links */
function initDownloadLinks() {
    var links = document.querySelectorAll(DOWNLOAD_SELECTOR);
    links.forEach(function (link) {
        if (STORE_URL) {
            link.setAttribute('href', STORE_URL);
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        } else {
            link.setAttribute('href', '#pricing');
        }
    });

    document.querySelectorAll(DOWNLOAD_ANDROID_SELECTOR).forEach(function (link) {
        if (ANDROID_STORE_URL) {
            link.setAttribute('href', ANDROID_STORE_URL);
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        } else {
            link.setAttribute('href', '#pricing');
        }
    });

    document.querySelectorAll(DOWNLOAD_IOS_SELECTOR).forEach(function (link) {
        if (IOS_STORE_URL) {
            link.setAttribute('href', IOS_STORE_URL);
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        } else {
            link.setAttribute('href', '#pricing');
        }
    });
}

/* Reveal on scroll */
function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (items.length === 0) return;

    if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });

    items.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('is-visible');
        } else {
            observer.observe(el);
        }
    });
}

/* Interaksi kartu fitur */
var FEATURE_PAGE = {
    todo:     'pages/fitur-todo.html',
    calendar: 'pages/kalender.html',
    keuangan: 'pages/keuangan.html',
    nutrisi:  'pages/nutrisi.html',
    memento:  'pages/memento.html',
    notes:    'pages/fitur-notes.html',
};

function initFeatureCards() {
    var cards = document.querySelectorAll('.feature-card');
    if (!cards.length) return;

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            var key  = card.getAttribute('data-feature');
            var page = FEATURE_PAGE[key];
            if (page) window.location.href = page;
        });
    });
}

/* Showcase app navigation */
function initShowcaseNavigation() {
    var tabs = document.querySelectorAll('[data-showcase-tab]');
    var views = document.querySelectorAll('[data-showcase-view]');
    if (!tabs.length || !views.length) return;

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var selectedView = tab.getAttribute('data-showcase-tab');
            var viewExists = false;

            views.forEach(function (view) {
                var isSelected = view.getAttribute('data-showcase-view') === selectedView;
                view.classList.toggle('hidden', !isSelected);
                view.hidden = !isSelected;
                if (isSelected) viewExists = true;
            });

            if (!viewExists) {
                console.error('Showcase view "' + selectedView + '" tidak ditemukan');
                return;
            }

            tabs.forEach(function (item) {
                var isSelected = item === tab;
                item.classList.toggle('is-active', isSelected);
                item.setAttribute('aria-pressed', String(isSelected));
            });
        });
    });
}

/* Kontak form */
function initKontakForm() {
    var form = document.getElementById('kontak-form');
    if (!form) return;

    var successBox = document.getElementById('kontak-success');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var nama   = document.getElementById('nama').value.trim();
        var email  = document.getElementById('email').value.trim();
        var subjek = document.getElementById('subjek').value;
        var pesan  = document.getElementById('pesan').value.trim();

        var valid = true;

        ['nama', 'email', 'subjek', 'pesan'].forEach(function (id) {
            var el = document.getElementById('error-' + id);
            if (el) el.classList.add('hidden');
        });

        if (!nama) {
            var el = document.getElementById('error-nama');
            if (el) el.classList.remove('hidden');
            valid = false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            var el = document.getElementById('error-email');
            if (el) el.classList.remove('hidden');
            valid = false;
        }

        if (!subjek) {
            var el = document.getElementById('error-subjek');
            if (el) el.classList.remove('hidden');
            valid = false;
        }

        if (!pesan) {
            var el = document.getElementById('error-pesan');
            if (el) el.classList.remove('hidden');
            valid = false;
        }

        if (!valid) return;

        var btn     = document.getElementById('btn-kirim');
        var btnText = document.getElementById('btn-text');
        var btnIcon = document.getElementById('btn-icon');

        if (btn) btn.disabled = true;
        if (btnText) btnText.textContent = t('js.sending', 'Mengirim...');
        if (btnIcon) btnIcon.className = 'fa-solid fa-circle-notch fa-spin';

        var formData = new FormData(form);

        fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' }
        })
        .then(function (response) {
            if (response.ok) {
                form.reset();
                var wrapper = document.getElementById('kontak-form-wrapper');
                if (wrapper) wrapper.classList.add('hidden');
                if (successBox) successBox.classList.remove('hidden');
            } else {
                throw new Error('Gagal mengirim pesan');
            }
        })
        .catch(function () {
            alert(t('js.sendFailed', 'Gagal mengirim pesan. Coba lagi nanti atau kirim email langsung ke partnership@lifesync.id.'));
        })
        .finally(function () {
            if (btn) btn.disabled = false;
            if (btnText) btnText.textContent = t('js.sendMessage', 'Kirim Pesan');
            if (btnIcon) btnIcon.className = 'fa-solid fa-paper-plane';
        });
    });
}

/* Dipanggil oleh tombol "Kirim Pesan Lagi" di kontak.html. */
window.resetKontakForm = function resetKontakForm() {
    var form       = document.getElementById('kontak-form');
    var wrapper    = document.getElementById('kontak-form-wrapper');
    var successBox = document.getElementById('kontak-success');

    if (form) form.reset();
    if (wrapper) wrapper.classList.remove('hidden');
    if (successBox) successBox.classList.add('hidden');

    ['nama', 'email', 'subjek', 'pesan'].forEach(function (id) {
        var el = document.getElementById('error-' + id);
        if (el) el.classList.add('hidden');
    });
};


/* Analytics telemetry (GA4) */
function sendAnalyticsEvent(eventName, params) {
    try {
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, params || {});
        }
    } catch (err) {
        console.warn('Analytics telemetry error:', err);
    }
}


/* Modal status pengembangan */
function initPricingModal() {
    var modal = document.getElementById('modal-pricing-dev');
    if (!modal) return;

    var planTitleEl = document.getElementById('dev-modal-plan-title');
    var planDescEl  = document.getElementById('dev-modal-plan-desc');
    var backdrop    = document.getElementById('dev-modal-backdrop');
    var closeBtn    = document.getElementById('dev-modal-close-btn');
    var ctaKontak   = document.getElementById('dev-modal-cta-kontak');
    var ctaMockup   = document.getElementById('dev-modal-cta-mockup');
    var activePlan  = 'free';
    var previousFocus = null;

    function renderModalCopy(plan) {
        if (plan === 'premium') {
            if (planTitleEl) planTitleEl.textContent = t('modal.premTitle', 'Paket Premium');
            if (planDescEl) {
                planDescEl.textContent = t('modal.premDesc', 'Langganan berbayar dan fitur AI tambahan belum dibuka karena aplikasinya masih dalam tahap pengembangan.');
            }
        } else {
            if (planTitleEl) planTitleEl.textContent = t('modal.freeTitle', 'Paket Gratis');
            if (planDescEl) {
                planDescEl.textContent = t('modal.freeDesc', 'Aplikasi mobile LifeSync saat ini masih dalam pengembangan, jadi file unduhan resminya belum dirilis.');
            }
        }
    }

    function openModal(plan) {
        previousFocus = document.activeElement;
        activePlan = plan === 'premium' ? 'premium' : 'free';
        renderModalCopy(activePlan);

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');

        if (closeBtn && typeof closeBtn.focus === 'function') {
            closeBtn.focus();
        }

        sendAnalyticsEvent('dev_modal_open', {
            plan_type: activePlan
        });
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        if (previousFocus && typeof previousFocus.focus === 'function') {
            previousFocus.focus();
            previousFocus = null;
        }
    }

    document.querySelectorAll('[data-open-dev-modal]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            var plan = btn.getAttribute('data-open-dev-modal') || 'free';
            openModal(plan);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if (modal.classList.contains('hidden')) return;
        if (e.key === 'Escape') {
            closeModal();
            return;
        }
        if (e.key === 'Tab') {
            var focusables = modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
            if (!focusables.length) return;
            var first = focusables[0];
            var last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });

    document.addEventListener('lifesync:langchange', function () {
        if (!modal.classList.contains('hidden')) {
            renderModalCopy(activePlan);
        }
    });

    if (ctaKontak) {
        ctaKontak.addEventListener('click', function () {
            closeModal();
            sendAnalyticsEvent('dev_modal_contact_click', {});
        });
    }

    if (ctaMockup) {
        ctaMockup.addEventListener('click', function () {
            sendAnalyticsEvent('dev_modal_mockup_click', {});
        });
    }

    window.openPricingDevModal = openModal;
    window.closePricingDevModal = closeModal;
}

function initAnalytics() {
    document.addEventListener('click', function (e) {
        var target = e.target;
        if (!target) return;

        var linkOrBtn = target.closest('a, button, .feature-card');
        if (!linkOrBtn) return;

        var sectionEl = linkOrBtn.closest('section[id], header[id], footer, div[id^="section-"]');
        var sectionName = 'page';
        if (sectionEl) {
            sectionName = sectionEl.id || (sectionEl.tagName ? sectionEl.tagName.toLowerCase() : 'page');
            sectionName = sectionName.replace('section-', '');
        }

        if (linkOrBtn.classList.contains('feature-card')) {
            var featKey = linkOrBtn.getAttribute('data-feature') || 'unknown';
            sendAnalyticsEvent('select_content', {
                content_type: 'feature_card',
                item_id: featKey,
                section: sectionName
            });
            return;
        }

        if (linkOrBtn.hasAttribute('data-open-dev-modal')) {
            var planType = linkOrBtn.getAttribute('data-open-dev-modal') || 'free';
            sendAnalyticsEvent('pricing_plan_click', {
                plan: planType,
                cta_location: sectionName,
                cta_text: (linkOrBtn.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40)
            });
            return;
        }

        if (linkOrBtn.matches(DOWNLOAD_SELECTOR) || linkOrBtn.matches(DOWNLOAD_ANDROID_SELECTOR) || linkOrBtn.matches(DOWNLOAD_IOS_SELECTOR)) {
            var platform = linkOrBtn.hasAttribute('data-download-android') ? 'android' : (linkOrBtn.hasAttribute('data-download-ios') ? 'ios' : 'all_platforms');
            sendAnalyticsEvent('download_click', {
                platform: platform,
                cta_location: sectionName,
                cta_text: (linkOrBtn.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40)
            });
            return;
        }

        var href = linkOrBtn.getAttribute('href') || '';
        if (href.indexOf('mockup.html') !== -1) {
            sendAnalyticsEvent('mockup_open_click', {
                cta_location: sectionName,
                cta_text: (linkOrBtn.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40)
            });
            return;
        }

        if (href === '#pricing' || href.indexOf('#pricing') !== -1) {
            sendAnalyticsEvent('pricing_nav_click', {
                cta_location: sectionName,
                cta_text: (linkOrBtn.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40)
            });
            return;
        }

        if (href === '#kontak' || href.indexOf('#kontak') !== -1) {
            sendAnalyticsEvent('contact_nav_click', {
                cta_location: sectionName,
                cta_text: (linkOrBtn.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40)
            });
            return;
        }

        if (href && (href.startsWith('http://') || href.startsWith('https://')) && href.indexOf(window.location.hostname) === -1) {
            sendAnalyticsEvent('outbound_click', {
                link_url: href,
                link_text: (linkOrBtn.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40),
                cta_location: sectionName
            });
        }
    });

    // Section visibility tracker (>= 1.5 detik)
    if ('IntersectionObserver' in window) {
        var observedSections = document.querySelectorAll('section[id], header[id="top"]');
        var viewTimers = {};

        var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var id = entry.target.id || 'unknown';
                if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                    if (!viewTimers[id]) {
                        viewTimers[id] = setTimeout(function () {
                            sendAnalyticsEvent('section_view', {
                                section_name: id
                            });
                            sectionObserver.unobserve(entry.target);
                            delete viewTimers[id];
                        }, 1500);
                    }
                } else {
                    if (viewTimers[id]) {
                        clearTimeout(viewTimers[id]);
                        delete viewTimers[id];
                    }
                }
            });
        }, {
            threshold: [0.25]
        });

        observedSections.forEach(function (sec) {
            sectionObserver.observe(sec);
        });
    }

    // Engaged reading time milestones (detik saat tab aktif)
    var activeSeconds = 0;
    var milestones = [15, 30, 60, 120];
    var firedMilestones = {};

    setInterval(function () {
        if (!document.hidden) {
            activeSeconds++;
            milestones.forEach(function (sec) {
                if (activeSeconds >= sec && !firedMilestones[sec]) {
                    firedMilestones[sec] = true;
                    sendAnalyticsEvent('reading_milestone', {
                        seconds_engaged: sec
                    });
                }
            });
        }
    }, 1000);
}
