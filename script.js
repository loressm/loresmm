// Funzione per aprire/chiudere il menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");

    // Aggiungi o rimuovi la classe "open" per il menu e l'icona dell'hamburger
    menu.classList.toggle("open");
    hamburger.classList.toggle("open");
}
