css
body {
    font-family: Arial, sans-serif;
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
    max-width: 90%;
    margin: 0 auto;
}

h1 {
    font-size: 2.5rem;
    font-weight: bold;
}

h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 20px;
}

.search-bar {
    width: 80%;
    max-width: 400px;
    padding: 12px;
    border: 2px solid #8000ff;
    border-radius: 8px;
    font-size: 1rem;
    text-align: center;
}

.search-btn {
    background-color: #8000ff;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 1rem;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
}

.search-btn:hover {
    background-color: #5d00b3;
}

/* 🔹 Mobile Optimization */
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.2rem;
    }
    .search-bar {
        width: 90%;
    }
}
