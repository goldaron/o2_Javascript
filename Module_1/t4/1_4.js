document.addEventListener('DOMContentLoaded', () => {
    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    let name = prompt("Enter your name:");
    let house = Math.floor(Math.random() * 4) + 1;

    const h = document.createElement('h1');
    switch (house) {
        case 1:
            h.textContent = `${name}, you are Gryffindor.`;
            break;
        case 2:
            h.textContent = `${name}, you are Slytherin.`;
            break;
        case 3:
            h.textContent = `${name}, you are Hufflepuff.`;
            break;
        case 4:
            h.textContent = `${name}, you are Ravenclaw.`;
            break;
    }
    output.appendChild(h);
});
