document.getElementById('searchBtn').addEventListener('click', () => {
    const movieTitle = document.getElementById('movieTitle').value;
    const movieInfoDiv = document.getElementById('movieInfo');

    if (!movieTitle) {
        movieInfoDiv.innerHTML = "<p>Please enter a movie title.</p>";
        movieInfoDiv.style.display = 'block';
        return;
    }
    const apiKey = 'YOUR_API_KEY';
    fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Movie not found');
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === "False") {
                throw new Error(data.Error);
            }
            movieInfoDiv.innerHTML = `
                <img src="${data.Poster !== "N/A" ? data.Poster : 'https://via.placeholder.com/200'}" alt="${data.Title}" />
                <h2>${data.Title} (${data.Year})</h2>
                <p><strong>Plot:</strong> ${data.Plot}</p>
                <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
            `;
            movieInfoDiv.style.display = 'block';
        })
        .catch(error => {
            movieInfoDiv.innerHTML = `<p>${error.message}</p>`;
            movieInfoDiv.style.display = 'block';
        });
});