/*  
Task: implement a dice roll function and repeatedly roll until a 6 appears, 
printing each roll to an unordered list (<ul>) in the page.

Notes:
    - Function rollDice(): no parameters, returns an integer 1..6.
    - Main program: call rollDice repeatedly until it returns 6.
    - Render each roll as a <li> inside a <ul> using document.write.
    - The implementation uses Math.random() and keeps the original loop
*/

document.addEventListener('DOMContentLoaded', () => {
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    const ul = document.createElement('ul');
    let roll;
    do {
        roll = rollDice();
        const li = document.createElement('li');
        li.textContent = String(roll);
        ul.appendChild(li);
    } while (roll !== 6);
    output.appendChild(ul);
});
