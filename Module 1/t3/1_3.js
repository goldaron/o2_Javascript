document.addEventListener('DOMContentLoaded', () => {
	const output = document.createElement('div');
	output.className = 'output';
	document.body.appendChild(output);

	let num = prompt("Enter a first number:");
	let num2 = prompt("Enter a second number:");
	let num3 = prompt("Enter a third number:");
	let sum = parseInt(num) + parseInt(num2) + parseInt(num3);
	const sumH = document.createElement('h1');
	sumH.textContent = `The sum is: ${sum}`;
	output.appendChild(sumH);

	let product = parseInt(num) * parseInt(num2) * parseInt(num3);
	const prodH = document.createElement('h1');
	prodH.textContent = `The product is: ${product}`;
	output.appendChild(prodH);

	let average = sum / 3;
	const avgH = document.createElement('h1');
	avgH.textContent = `The average is: ${average}`;
	output.appendChild(avgH);
});
