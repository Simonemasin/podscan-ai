js
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");  // ✅ Verifica che il file viene caricato

    const searchButton = document.querySelector(".search-btn");
    const searchBar = document.querySelector(".search-bar");

    if (!searchButton || !searchBar) {
        console.error("❌ Elementi non trovati! Controlla classi nel file HTML.");
        return;
    }

    searchButton.addEventListener("click", function () {
        console.log("🔍 Bottone cliccato!");  // ✅ Verifica se il bottone viene premuto
        const link = searchBar.value.trim();

        if (link === "") {
            alert("⚠ Inserisci un link prima di cercare un podcast!");
            return;
        }

        alert("✅ Link ricevuto: " + link); // Simula l'azione del bottone
    });
});
