/* Develop the app further (4p).
Now add a form where you can enter a search term like in assignments 1-3
Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
Print each joke in this format:
<article>
    <p>Joke here</p>
</article> */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('result');

    async function fetchJokes(query) {
        const apiUrl = `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();

            // Clear previous results
            resultsContainer.innerHTML = '';

            if (!data.result || data.result.length === 0) {
                const info = document.createElement('p');
                info.textContent = 'No jokes found for "' + query + '".';
                resultsContainer.appendChild(info);
                return;
            }

            // Render each joke as <article><p>...</p></article>
            data.result.forEach(item => {
                const article = document.createElement('article');
                const p = document.createElement('p');
                p.textContent = item.value;
                article.appendChild(p);
                resultsContainer.appendChild(article);
            });

        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            resultsContainer.innerHTML = '<p>Error fetching jokes: ' + error.message + '</p>';
        }
    }

    // Click handler for search button
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query.length === 0) {
            resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
            return;
        }
        fetchJokes(query);
    });

    // Allow pressing Enter inside the input to trigger search
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchButton.click();
        }
    });
});