/*  Write a program that prompts the user for the start and end year. 
    The program prints all leap years from the interval given by the user. 
    Printing is done in an unordered list to the HTML document. */

document.addEventListener('DOMContentLoaded', () => {
    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    let startYear = prompt("Enter the start year:");
    let endYear = prompt("Enter the end year:");
    startYear = parseInt(startYear);
    endYear = parseInt(endYear);

    const ul = document.createElement('ul');
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            const li = document.createElement('li');
            li.textContent = `${year}`;
            ul.appendChild(li);
        }
    }
    output.appendChild(ul);
});
