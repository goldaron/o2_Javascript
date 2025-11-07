document.addEventListener('DOMContentLoaded', () => {
    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    let year = prompt("Enter a year:");
    year = parseInt(year);

    const h = document.createElement('h1');
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        h.textContent = `${year} is a leap year.`;
    } else {
        h.textContent = `${year} is not a leap year.`;
    }
    output.appendChild(h);
});
