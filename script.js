js
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".search-btn");

    searchBtn.addEventListener("click", function () {
        const videoLink = searchBar.value.trim();

        if (videoLink === "") {
            alert("⚠ Please enter a video link!");
            return;
        }

        if (!isValidURL(videoLink)) {
            alert("❌ Invalid video link! Please enter a correct URL.");
            return;
        }

        alert("✅ Searching for the podcast...");
        // Qui metteremo la funzione vera quando avremo il backend.
    });

    function isValidURL(str) {
        const pattern = new RegExp(
            "^(https?:\\/\\/)?" + // Protocollo (http o https)
            "((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})|" + // Dominio
            "localhost|" + // Permette localhost
            "((\1̣,̣3̣\\.){3}\1̣,̣3̣))" + // Indirizzo IP
            "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%._\\+~#=])" + // Porta e percorso"(\\?[;&a-zA-Z0-9@:%._\\+~#=]*)?" + // Query string
            "(\\#[-a-zA-Z0-9_]*)?$",
            "i"
        );
        return !!pattern.test(str);
    }
});