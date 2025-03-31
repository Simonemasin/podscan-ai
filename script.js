css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #ffffff;
    color: #000;
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 20px;
}

/* 🔹 Contenitore della barra di ricerca */
.search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 350px;
}

.search-bar {
    width: 100%;
    padding: 10px;
    border: 2px solid #8000ff;
    border-radius: 8px;
    font-size: 1rem;
    text-align: center;
}

.search-btn {
    background-color: #8000ff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
}

.search-btn:hover {
    background-color: #5d00b3;
}

/* 🔹 Ottimizzazione per Mobile */
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.2rem;
    }
    .search-container {
        max-width: 90%;
    }
}
