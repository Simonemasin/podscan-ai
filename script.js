document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".search-btn");
    
    // Create an element for success/error messages
    const message = document.createElement("p");
    message.style.fontSize = "14px";
    message.style.marginTop = "5px";
    message.style.fontWeight = "bold";
    document.querySelector(".search-container").appendChild(message);

    searchBtn.addEventListener("click", function () {
        const videoLink = searchBar.value.trim();
        const validPlatforms = ["youtube.com", "youtu.be", "tiktok.com", "instagram.com", "facebook.com", "x.com", "twitter.com"];

        // Check if the link contains one of the valid domains
        const isValid = validPlatforms.some(platform => videoLink.includes(platform));

        if (isValid) {
            searchBar.style.border = "2px solid #00b300"; // Green ✅message.textContent = "✅ Valid link! You can now search for the podcast.";
            message.style.color = "#00b300";
        } else {
            searchBar.style.border = "2px solid #ff0000"; // Red ❌
            message.textContent = "❌ Error: Please enter a link from YouTube, TikTok, Instagram, etc.";
            message.style.color = "#ff0000";

            // Shake effect for error
            searchBar.classList.add("shake");
            setTimeout(() => searchBar.classList.remove("shake"), 300);
        }
    });

    // Reset the search bar when the user starts typing
    searchBar.addEventListener("input", function () {
        searchBar.style.border = "2px solid #8000ff"; // Default purple border
        message.textContent = ""; // Hide the message
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-btn");

    searchBar.addEventListener("input", function () {
        const link = searchBar.value.trim();
        const validPlatforms = ["youtube.com", "youtu.be", "tiktok.com", "instagram.com", "facebook.com", "twitter.com", "x.com"];
        
        // Check if the link contains one of the valid platformsconst isValid = validPlatforms.some(platform => link.includes(platform));

        if (isValid) {
            searchBar.classList.remove("invalid", "shake");
            searchBar.classList.add("valid");
        } else {
            searchBar.classList.remove("valid");
            searchBar.classList.add("invalid");
        }
    });

    searchButton.addEventListener("click", function () {
        if (searchBar.classList.contains("invalid")) {
            searchBar.classList.add("shake");
            setTimeout(() => searchBar.classList.remove("shake"), 300);
        }
    });
});
