document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".search-btn");

    const message = document.createElement("p");
    message.style.fontSize = "14px";
    message.style.marginTop = "5px";
    message.style.fontWeight = "bold";
    document.querySelector(".search-container").appendChild(message);

    searchBtn.addEventListener("click", async function () {
        const videoLink = searchBar.value.trim();
        const validPlatforms = ["youtube.com", "youtu.be", "tiktok.com", "instagram.com", "facebook.com", "x.com", "twitter.com"];

        const isValid = validPlatforms.some(platform => videoLink.includes(platform));

        if (isValid) {
            searchBar.style.border = "2px solid #00b300"; // Verde ✅
            message.textContent = "✅ Valid link! You can now search for the podcast.";
            message.style.color = "#00b300";

            // 🔹 INVIA IL LINK AL BACKEND
            try {const response = await fetch("http://localhost:3000/api/analyze", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ link: videoLink })
});

const data = await response.json();
alert(data.message); // Mostra la risposta del server
} catch (error) {
console.error("Error:", error);
alert("❌ Server error. Try again later.");
}

} else {
searchBar.style.border = "2px solid #ff0000"; // Rosso ❌
message.textContent = "❌ Error: Please enter a valid YouTube, TikTok, Instagram, Facebook, or Twitter/X link.";
message.style.color = "#ff0000";

// Effetto vibrazione
searchBar.classList.add("shake");
setTimeout(() => searchBar.classList.remove("shake"), 300);
}
});

// Reset del campo input quando l'utente inizia a scrivere
searchBar.addEventListener("input", function () {
searchBar.style.border = "2px solid #8000ff";
message.textContent = "";
});
});
