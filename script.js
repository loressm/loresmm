// Funzione per aprire/chiudere il menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");
    const body = document.body;

    // Verifica se è in modalità mobile (max-width: 768px)
    if (window.innerWidth <= 768) {
        // Verifica se il menu è già aperto
        if (menu.classList.contains('open')) {
            // Aggiungi la classe 'closed' per chiudere il menu con l'animazione di scorrimento
            menu.classList.add('closed'); 

            // Dopo 0.5s (durata dell'animazione di chiusura), rimuovi le classi
            setTimeout(() => {
                menu.classList.remove('open', 'closed');
            }, 500); // Timeout per sincronizzare con durata animazione
        } else {
            // Se il menu è chiuso, aprilo con l'animazione di scorrimento
            menu.classList.add('open');
        }

        // Aggiungi o rimuovi la classe "no-scroll" al body per bloccare lo scroll
        body.classList.toggle("no-scroll");
    }
}

// Aggiungi un listener per il clic sul documento
document.addEventListener('click', function(event) {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");
    
    // Se il clic non è stato fatto né sul menu né sull'hamburger, chiudi il menu
    if (window.innerWidth <= 768 && !menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.add('closed'); // Chiudi il menu con l'animazione
        setTimeout(() => {
            menu.classList.remove('open', 'closed');
        }, 500);
        document.body.classList.remove('no-scroll');
    }
});
