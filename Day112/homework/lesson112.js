document.getElementById('searchBtn').addEventListener('click', async () => {
    const cryptoInput = document.getElementById('cryptoInput').value;
    const cryptoInfoDiv = document.getElementById('cryptoInfo');

    if (!cryptoInput) {
        cryptoInfoDiv.innerHTML = "<p>Please enter a cryptocurrency name.</p>";
        cryptoInfoDiv.style.display = 'block';
        return;
    }
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(cryptoInput.toLowerCase())}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`);
        if (!response.ok) {
            throw new Error('Cryptocurrency not found');
        }
        const data = await response.json();
        if (!data[cryptoInput.toLowerCase()]) {
            throw new Error('Cryptocurrency not found');
        }
        const cryptoData = data[cryptoInput.toLowerCase()];

        cryptoInfoDiv.innerHTML = `
            <h2>${cryptoInput.charAt(0).toUpperCase() + cryptoInput.slice(1)}</h2>
            <p><strong>Price:</strong> $${cryptoData.usd}</p>
            <p><strong>Market Cap:</strong> $${cryptoData.usd_market_cap}</p>
            <p><strong>24h Change:</strong> ${cryptoData.usd_24h_change.toFixed(2)}%</p>
        `;
        cryptoInfoDiv.style.display = 'block';
    } catch (error) {
        cryptoInfoDiv.innerHTML = `<p>${error.message}</p>`;
        cryptoInfoDiv.style.display = 'block';
    }
});

setInterval(() => {
    const cryptoInput = document.getElementById('cryptoInput').value;
    if (cryptoInput) {
        document.getElementById('searchBtn').click();
    }
}, 10000);