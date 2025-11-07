document.addEventListener('DOMContentLoaded', () => {
	const output = document.createElement('div');
	output.className = 'output';
	document.body.appendChild(output);

	let name = prompt("What is your name?");
	const h1 = document.createElement('h1');
	h1.textContent = `Hello, ${name}!`;
	output.appendChild(h1);
});
