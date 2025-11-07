document.addEventListener('DOMContentLoaded', () => {
    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    let confirmCalc = confirm("Should I calculate the square root?");
    const h = document.createElement('h1');
    if (confirmCalc) {
        let number = prompt("Enter a number:");
        number = parseFloat(number);

        if (number < 0) {
            h.textContent = `The square root of a negative number is not defined.`;
        } else {
            let squareRoot = Math.sqrt(number);
            h.textContent = `The square root of ${number} is ${squareRoot}.`;
        }
    } else {
        h.textContent = `We shall not calculate the square root.`;
    }
    output.appendChild(h);
});
