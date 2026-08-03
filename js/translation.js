/* ==========================================
   SIMPLE & WORKING GOOGLE TRANSLATOR
=========================================== */

// 1. Google Translate Hidden Element Init
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ar,hi',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

window.googleTranslateElementInit = googleTranslateElementInit;

// 2. Inject Google Script dynamically
(function loadGoogleTranslateScript() {
    if (!document.getElementById('google_translate_element')) {
        const div = document.createElement('div');
        div.id = 'google_translate_element';
        div.style.display = 'none';
        document.body.appendChild(div);
    }

    if (!document.getElementById('google-translate-js')) {
        const script = document.createElement('script');
        script.id = 'google-translate-js';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.head.appendChild(script);
    }
})();

// 3. Dropdown Change Handler Function
function triggerGoogleTranslate(langCode) {
    if (!langCode) return;

    // Save Selection
    localStorage.setItem('selectedLanguage', langCode);

    // RTL for Arabic
    if (langCode === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', langCode);
    }

    // Direct Select Dropdown in Google's Hidden Frame
    var attempt = 0;
    var interval = setInterval(function() {
        var googleCombo = document.querySelector('.goog-te-combo');
        if (googleCombo) {
            googleCombo.value = langCode;
            googleCombo.dispatchEvent(new Event('change'));
            clearInterval(interval);
        }
        attempt++;
        if (attempt > 25) { // Stop after 5 seconds if Google API blocked
            clearInterval(interval);
        }
    }, 200);
}

// 4. Navbar Change Listener
document.addEventListener('change', function(e) {
    if (e.target && (e.target.classList.contains('navbar-language-select') || e.target.id === 'customLangSelect')) {
        triggerGoogleTranslate(e.target.value);
    }
});

// 5. Restore Language on Page Load
function syncLanguageUI() {
    var savedLang = localStorage.getItem('selectedLanguage') || 'en';
    var langSelect = document.querySelector('.navbar-language-select') || document.getElementById('customLangSelect');

    if (langSelect) {
        langSelect.value = savedLang;
    }

    if (savedLang !== 'en') {
        triggerGoogleTranslate(savedLang);
    }
}

// Sync when layout loaded or DOM ready
document.addEventListener('headerLoaded', syncLanguageUI);
document.addEventListener('DOMContentLoaded', syncLanguageUI);