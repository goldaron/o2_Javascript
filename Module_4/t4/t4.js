/* Develop the app even further. Optional chaining is not the best way to handle missing image. Use ternary operator or if/else to add a default image if TV-show is missing image property. (2p)
Use https://placehold.co/210x295?text=Not%20Found as the default image.*/

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const query = document.getElementById('query').value;
        const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = ''; // Clear old results

            data.forEach(item => {
                const tvShow = item.show;

                // Create article element
                const article = document.createElement('article');

                // Create and append h2 for name
                const nameElement = document.createElement('h2');
                nameElement.textContent = tvShow.name;
                article.appendChild(nameElement);

                // Create and append a for url
                const linkElement = document.createElement('a');
                linkElement.href = tvShow.url;
                linkElement.target = '_blank';
                linkElement.textContent = 'More details';
                article.appendChild(linkElement);

                // Create and append img for medium image
                if (tvShow.image.medium) {
                    const imgElement = document.createElement('img');
                    imgElement.src = tvShow.image.medium;
                    imgElement.alt = tvShow.name;
                    article.appendChild(imgElement);
                } else { 
                    const imgElement = document.createElement('img');
                    imgElement.src = 'https://placehold.co/210x295?text=Not%20Found';
                    imgElement.alt = 'No image available';
                    article.appendChild(imgElement);
                }

                // Create and append div for summary
                const summaryElement = document.createElement('div');
                summaryElement.innerHTML = tvShow.summary || 'No summary available.';
                article.appendChild(summaryElement);

                // Append article to results container
                resultsContainer.appendChild(article);
            });
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    });
});