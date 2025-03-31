js
document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-btn");
    const searchBar = document.querySelector(".search-bar");

    searchBtn.addEventListener("click", function () {
        const videoLink = searchBar.value.trim();

        if (videoLink === "") {
            alert("⚠ Please enter a video link!"); // Messaggio se l'input è vuoto
            return;
        }

        // Controlliamo se il link è valido (YouTube, TikTok, etc.)
        const validPlatforms = ["youtube.com", "youtu.be", "tiktok.com", "instagram.com", "facebook.com", "x.com", "twitter.com"];const isValidLink = validPlatforms.some(platform => videoLink.includes(platform));

        if (!isValidLink) {
            alert("❌ Invalid link! Please enter a valid video URL.");
            return;
        }

        // ✅ Se il link è valido, lo mostriamo in console (per ora)
        console.log("✅ Valid link:", videoLink);
        alert("🎉 Link accepted! Processing...");
    });
});
