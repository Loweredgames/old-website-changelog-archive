/*
 * Questo file gestisce il widget Google Translate.
 *
 * Viene creato un contenitore personalizzato per il widget e
 * viene applicato il tema visivo del menu di traduzione.
 */

// Funzione per caricare e inizializzare il widget di Google Translate
function loadTranslateWidget() {
    // Crea e configura il container per il widget
    const googleDiv = document.createElement('div');
    googleDiv.id = 'google_translate_element';
    googleDiv.style.position = 'fixed';
    googleDiv.style.top = '1rem';
    googleDiv.style.right = '1rem';
    googleDiv.style.zIndex = '1000';
    
    // Aggiunge il container al documento
    document.body.appendChild(googleDiv);

    // Carica lo script di Google Translate
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
}

/**
 * Funzione di inizializzazione del widget di Google Translate
 * Viene chiamata automaticamente dallo script di Google
 */
// Callback richiesta da Google Translate per inizializzare il widget.
window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
        pageLanguage: 'it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: false
    }, 'google_translate_element');
};

// Al caricamento della pagina carica il widget di traduzione.
document.addEventListener('DOMContentLoaded', function() {
    loadTranslateWidget();
});
