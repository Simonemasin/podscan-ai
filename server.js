const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Abilita CORS
app.use(cors());

// Configura il body parser per gestire i dati in formato JSON
app.use(bodyParser.json());

// Servi i file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint API per analizzare il link
app.post('/api/analyze', (req, res) => {
  const { link } = req.body; // Ottieni il link dal corpo della richiesta

  if (!link || link.trim() === '') {
    // Se il link è vuoto o non valido, rispondi con un errore
    return res.status(400).json({ error: 'Invalid link' });
  }

  // Qui dovresti aggiungere la logica per analizzare il link e determinare se è valido o meno.
  // Ad esempio, puoi verificare se il link è di un tipo di contenuto specifico.
  
  // Simulazione di successo (puoi modificare con la tua logica)
  res.json({ message: 'Video link is valid!' });
});

// Endpoint di default per servire l'index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
