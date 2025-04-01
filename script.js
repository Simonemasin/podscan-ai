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

        alert(`✅ Searching podcast for: ${videoLink}`);
    });
});

