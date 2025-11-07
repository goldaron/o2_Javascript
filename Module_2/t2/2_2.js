/*  Task: ask the user for a number of participants, then prompt for each
    participant's name and display the names on the page as an ordered list
    (<ol>) in alphabetical order.

    Notes:
    - Prompt once for the number of participants (expected integer input).
    - Prompt that many times to collect participant names into an array.
    - Use Array.prototype.sort() to alphabetize names before rendering.
    - Render results as an ordered list using document.write() for this */

document.addEventListener('DOMContentLoaded', () => {
    // Prompt for how many participants we will collect.
    let numParticipants = parseInt(prompt("Enter the number of participants:"), 10);

    // Collect names into an array
    let participants = [];
    for (let i = 0; i < numParticipants; i++) {
        let name = prompt("Enter the name of participant " + (i + 1) + ":");
        participants.push(name);
    }

    // Sort alphabetically (default string sort)
    participants.sort();

    // Render as ordered list
    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    const ol = document.createElement('ol');
    participants.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        ol.appendChild(li);
    });
    output.appendChild(ol);
});
