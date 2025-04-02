const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve la cartella public

// API route
app.post('/api/analyze', (req, res) => {
    const { link } = req.body;

    if (!link || !link.startsWith("http")) {
        return res.status(400).json({ message: "Link non valido" });
    }

    res.status(200).json({ message: "Link valido! Puoi cercare il podcast." });
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
