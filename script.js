document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".search-btn");
    
    // Creiamo un elemento per i messaggi di errore/successo
    const message = document.createElement("p");
    message.style.fontSize = "14px";
    message.style.marginTop = "5px";
    message.style.fontWeight = "bold";
    document.querySelector(".search-container").appendChild(message);

    searchBtn.addEventListener("click", function () {
        const videoLink = searchBar.value.trim();const validPlatforms = ["youtube.com", "youtu.be", "tiktok.com", "instagram.com", "facebook.com", "x.com", "twitter.com"];

        // Controlliamo se il link contiene uno dei domini validi
        const isValid = validPlatforms.some(platform => videoLink.includes(platform));

        if (isValid) {
            searchBar.style.border = "2px solid #00b300"; // Verde ✅
            message.textContent = "✅ Link valido! Ora puoi cercare il podcast.";
            message.style.color = "#00b300";
        } else {
            searchBar.style.border = "2px solid #ff0000"; // Rosso ❌
            message.textContent = "❌ Errore: inserisci un link di YouTube, TikTok, Instagram, ecc.";
            message.style.color = "#ff0000";

            // Effetto vibrazione per errore
            searchBar.classList.add("shake");
            setTimeout(() => searchBar.classList.remove("shake"), 300);
        }
    });

    // Reset della barra quando l'utente inizia a scrivere
    searchBar.addEventListener("input", function () {
        searchBar.style.border = "2px solid #8000ff"; // Contorno viola normale
        message.textContent = ""; // Nasconde il messaggio
    });
});

