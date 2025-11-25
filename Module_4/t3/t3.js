/* Develop the app even further. Print the following information for all series from the search result on the web page. (7p)
required information: Name, link to details (url), medium image and summary
show the name in <h2> element
show the url in <a> element. Also add target="_blank" to the link.
show the medium image with <img src="" alt="">. Add medium image to src attribute and name property to alt attribute.
some TV-shows don't have images. This will cause an error. You can fix this by adding ? operator to image property. 
Example: tvShow.show.image?.medium;. This is called optional chaining.
show summary in <div> element (not <p>). This is because the summary is already in <p> element, and the result will not be valid if <p> is inside another <p>.
collect the elements to <article> elements and append <article> elements to the HTML document.
make <div id="results"> element to the HTML document where you append the <article> elements.
clear the old results with innerHTML = '' before you append the new results.
 */

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
            console.log(data); // Display the retrieved data in the console, keeping this for debugging
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
                if (tvShow.image?.medium) {
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