/* Develop the app further.
Add JavaScript that gets the value entered to the form and sends a request with fetch to https://api.tvmaze.com/search/shows?q=${value_from_input}. 
Print the search result to the console. */

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
            console.log(data); // Display the retrieved data in the console
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    });
});