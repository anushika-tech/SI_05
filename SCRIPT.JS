document.getElementById('searchBtn').addEventListener('click', function() {
    const movieTitle = document.getElementById('movieInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovieInfo(data);
            } else {
                document.getElementById('movieInfo').innerHTML = `<p>${data.Error}</p>`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayMovieInfo(movie) {
    const movieInfo = `
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <img src="${movie.Poster}" alt="${movie.Title} poster" />
    `;
    document.getElementById('movieInfo').innerHTML = movieInfo;
}