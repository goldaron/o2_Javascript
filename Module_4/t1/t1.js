/* 
Make an app that retrieves information about a TV series you enter and displays it in the console. (2p)
API to use: TVMaze API
First, make a valid HTML page with a search form. Example form:
<form action="https://api.tvmaze.com/search/shows">
  <input id="query" name="q" type="text">
  <input type="submit" value="Search">
</form>
Test the form. The result should be a page full of JSON formatted data.
query example: https://api.tvmaze.com/search/shows?q=girls
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
            console.log(data); // Display the retrieved data in the console
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    });
});