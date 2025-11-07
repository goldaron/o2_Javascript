/* Make a simple calculator. (4p)
There are two input fields where user enters numbers. Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
Show the result in <p id="result"> when the button is clicked. */

document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const calculateButton = document.getElementById('start');
    const resultParagraph = document.getElementById('result');
    
    calculateButton.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;
        let result;

        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'multi':
                result = num1 * num2;
                break;
            case 'div':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error: Division by zero';
                }
                break;
            default:
                result = 'Error: Unknown operation';
        }
        
        resultParagraph.textContent = 'Result: ' + result;
    });
});