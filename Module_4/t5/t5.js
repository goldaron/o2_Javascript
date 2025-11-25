/* Make an app that retrieves a random Chuck Norris joke and displays it in the console. (2p)
API to use: chucknorris.io
Send a request to https://api.chucknorris.io/jokes/random and print only the joke to the console (that would be the 'value' property)
No need to add a form. */

const apiUrl = 'https://api.chucknorris.io/jokes/random';

async function fetchJoke() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data.value); // Display the joke in the console
        const jokeContainer = document.getElementById('result');
        jokeContainer.innerHTML = ''; // Clear previous joke
        const pElement = document.createElement('p');
        pElement.textContent = data.value;
        jokeContainer.appendChild(pElement);

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Load initial joke
    fetchJoke();

    // Add event listener to reload button
    const reloadBtn = document.getElementById('reload-btn');
    reloadBtn.addEventListener('click', fetchJoke);
});