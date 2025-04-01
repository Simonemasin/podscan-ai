document.getElementById('search-btn').addEventListener('click', function () {
    const link = document.getElementById('link-input').value.trim();

    if (link === '') {
        alert('Please enter a valid link');
        return;
    }

    searchPodcast(link);
});

function searchPodcast(link) {
    fetch('http://localhost:3000/api/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ link: link }) // Invia il link nel corpo della richiesta
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json(); // Risposta attesa in formato JSON
    })
    .then(data => {
        // Gestisci la risposta
        if (data.message) {
            alert(data.message); // Mostra il messaggio di successo
        } else {
            alert(data.error); // Mostra il messaggio di errore
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred');
    });
}
