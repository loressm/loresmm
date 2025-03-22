// Funzione per aprire/chiudere il menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    const body = document.body;

    // Verifica se è in modalità mobile (max-width: 768px)
    if (window.innerWidth <= 768) {
        // Se il menu è già aperto
        if (menu.classList.contains('open')) {
            // Solo chiudi se il menu è aperto
            menu.classList.remove('open');  // Rimuovi 'open' prima di chiudere
            menu.classList.add('closed');   // Aggiungi 'closed' per chiudere con animazione

            // Dopo 0.5s, rimuovi le classi 'open' e 'closed'
            setTimeout(() => {
                menu.classList.remove('closed');
            }, 500); // Timeout per sincronizzare con la durata dell'animazione
        } else {
            // Se il menu è chiuso, aprilo con animazione
            menu.classList.add('open');
            menu.classList.remove('closed');
        }

        // Blocca o sblocca lo scroll del body
        body.classList.toggle("no-scroll");
    }
}

// Aggiungi un listener per il clic sul documento
document.addEventListener('click', function(event) {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");
    const languageSelector = document.querySelector('.language-selector');
    
    // Se il clic non è stato fatto né sul menu né sull'hamburger né sul selettore lingua
    if (window.innerWidth <= 768 && !menu.contains(event.target) && !hamburger.contains(event.target) && !languageSelector.contains(event.target)) {
        // Verifica se il menu è effettivamente aperto prima di provare a chiuderlo
        if (menu.classList.contains('open')) {
            menu.classList.add('closed'); // Chiudi il menu con l'animazione
            setTimeout(() => {
                menu.classList.remove('open', 'closed');
            }, 500); // Timeout per sincronizzare con durata animazione
            document.body.classList.remove('no-scroll');
        }
    }
});
