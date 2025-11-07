/*
Task: extend the dice-rolling exercise so the number of sides is configurable. 
The program should ask the user for the number of sides and then roll that dice repeatedly 
until the maximum value (the number of sides) appears.

Notes:
    - Ask the user for the number of sides (integer) and store it in sides.
    - Implement rollDice so it returns an integer in the inclusive range 1..sides.
    - Roll repeatedly and output each roll into an unordered list (<ul>) until the roll equals `sides`.
*/

document.addEventListener('DOMContentLoaded', () => {
    let sidesInput = prompt("Enter the number of sides on the dice:");
    let sides = parseInt(sidesInput);

    function rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    const ul = document.createElement('ul');
    let roll;
    do {
        roll = rollDice(sides);
        const li = document.createElement('li');
        li.textContent = "Die roll: " + roll;
        ul.appendChild(li);
    } while (roll !== sides);
    output.appendChild(ul);
});
