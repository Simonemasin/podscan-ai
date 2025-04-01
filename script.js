js
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".search-btn");

    // Messaggio di errore
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.fontWeight = "bold";
    errorMessage.style.marginTop = "10px";
    errorMessage.style.display = "none"; // Nascosto di default
    errorMessage.textContent = "❌ Invalid link. Please enter a valid URL.";
    
    // Aggiungiamo il messaggio di errore sotto la barra di ricerca
    const searchContainer = document.querySelector(".search-container");
    searchContainer.appendChild(errorMessage);

    // Funzione per validare il link
    function isValidURL(url) {
        const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|tiktok\.com|instagram\.com|facebook\.com|twitter\.com)\/.+$/;
        return pattern.test(url);
    }

    // Aggiunge un bordo viola quando l'utente clicca nella barra
    searchBar.addEventListener("focus", function () {searchBar.style.border = "2px solid #8000ff";
    });

    searchBar.addEventListener("blur", function () {
        searchBar.style.border = "2px solid #8000ff"; // Mantiene il bordo viola
    });

    // Evento al click sul bottone
    searchBtn.addEventListener("click", function () {
        const userInput = searchBar.value.trim(); // Rimuove gli spazi all'inizio e alla fine

        if (!isValidURL(userInput)) {
            errorMessage.style.display = "block"; // Mostra il messaggio di errore
            searchBar.style.border = "2px solid red"; // Bordo rosso se il link non è valido
        } else {
            errorMessage.style.display = "none"; // Nasconde il messaggio di errore
            searchBar.style.border = "2px solid #8000ff"; // Bordo viola normale

            // Simuliamo una ricerca (qui in futuro ci sarà la chiamata al backend)
            console.log("🔍 Searching for podcast from:", userInput);
        }
    });
});
