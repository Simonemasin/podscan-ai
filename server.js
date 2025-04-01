const express = require("express");
const app = express();
const port = 3000;

// Serve i file statici dalla cartella attuale
app.use(express.static(__dirname));

// Avvia il server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});

