js
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-btn");
    const searchBar = document.querySelector(".search-bar");

    searchButton.addEventListener("click", function () {
        const videoLink = searchBar.value.trim();

        if (videoLink === "") {
            alert("⚠ Please enter a video link!");
            return;
        }

        // Simuliamo un controllo: se il link non contiene "youtube.com" o "tiktok.com", diciamo che il podcast non è stato trovato.
        if (!videoLink.includes("youtube.com") && !videoLink.includes("tiktok.com")) {
            showPopup("❌ Podcast not found! Your credits have been refunded. 💰");
        } else {
            showPopup("✅ Podcast found! Processing your request...");
        }
    });

    function showPopup(message) {
        const popup = document.createElement("div");
        popup.textContent = message;
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "#8000ff";
        popup.style.color = "white";
        popup.style.padding = "20px";
        popup.style.borderRadius = "10px";
        popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
        popup.style.zIndex = "1000";
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 3000);
    }
});


