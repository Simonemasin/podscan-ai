document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".search-btn");

    searchBtn.addEventListener("click", function() {
        const userInput = searchBar.value.trim();

        // Lista delle piattaforme supportate
        const validPlatforms = [
            "youtube.com",
            "youtu.be",
            "tiktok.com",
            "instagram.com",
            "facebook.com",
            "snapchat.com",
            "twitter.com",
            "x.com"
        ];

        // Controlla se l'URL inserito contiene uno dei domini validi
        const isValid = validPlatforms.some(platform => userInput.includes(platform));

        if (isValid) {searchBar.style.borderColor = "green";  // Cambia il bordo in verde
        alert("✅ Link valido! Stiamo cercando il podcast...");
    } else {
        searchBar.style.borderColor = "red";  // Cambia il bordo in rosso
        alert("❌ Link non valido! Inserisci un link da YouTube, TikTok, Instagram, Facebook, Snapchat o Twitter.");
    }
});
});
