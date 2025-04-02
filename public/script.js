document.getElementById('search-btn').addEventListener('click', searchPodcast);

function searchPodcast() {
    const linkInput = document.getElementById('link-input');
    const errorMessage = document.getElementById('error-message');
    const videoLink = linkInput.value.trim();

    const validPlatforms = [
        'youtube.com', 'youtu.be',
        'tiktok.com', 'instagram.com',
        'facebook.com', 'twitter.com', 'x.com'
    ];

    // Validazione URL
    if (!validPlatforms.some(domain => videoLink.includes(domain))) {
        linkInput.classList.add('invalid');
        errorMessage.textContent = '❌ Invalid link. Use YouTube, TikTok, Instagram, Facebook, Twitter/X.';
        return;
    } else {
        linkInput.classList.remove('invalid');
        errorMessage.textContent = '';
    }

    // Chiamata al server
    fetch('http://localhost:3000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoLink })
    })
    .then(response => response.json())
    .then(data => {
        if (data.valid) {
            linkInput.classList.add('valid');
            errorMessage.textContent = '✅ Valid link! You can now search for the podcast.';
        } else {
            linkInput.classList.add('invalid');
            errorMessage.textContent = '❌ Podcast not found.';
        }
    })
    .catch(error => {
        linkInput.classList.add('invalid');
        errorMessage.textContent = '❌ Error connecting to the server.';
        console.error(error);
    });
}
