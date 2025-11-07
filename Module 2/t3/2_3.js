/* Task: ask the user for the names of six dogs and display them in an
unordered list (<ul>) in reverse alphabetical order.

Notes:
- Prompt six times for dog names and collect into an array.
- Sort the array alphabetically and then reverse it so that the order is reverse-alphabetical when printed. */

document.addEventListener('DOMContentLoaded', () => {
    // Collect six dog names from the user.
    let dogNames = [];
    for (let i = 0; i < 6; i++) {
        let name = prompt("Enter the name of dog " + (i + 1) + ":");
        dogNames.push(name);
    }

    // Sort alphabetically, then reverse the order to produce reverse-alphabetical output
    dogNames.sort();
    dogNames.reverse();

    // Render the results as an unordered list
    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    const ul = document.createElement('ul');
    dogNames.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        ul.appendChild(li);
    });
    output.appendChild(ul);
});
