document.addEventListener('DOMContentLoaded', () => {
    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    let numRolls = prompt("Enter the number of dice rolls:");
    numRolls = parseInt(numRolls);
    let sum = 0;

    for (let i = 0; i < numRolls; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
        const h2 = document.createElement('h2');
        h2.textContent = `Roll ${i + 1}: ${roll}`;
        output.appendChild(h2);
    }
    const total = document.createElement('h1');
    total.textContent = `The sum of the dice rolls is: ${sum}`;
    output.appendChild(total);
});
