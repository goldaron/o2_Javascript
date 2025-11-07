/* his is continuation to previous task. There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
You can use the includes and split methods.
eval() function is prohibited
No need to support decimal numbers, calculating integers is enough.
Example inputs: 3+5, 2-78, 3/6, etc... */

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('calculation');
    const calculateButton = document.getElementById('start');
    const resultParagraph = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        const rawInput = inputField.value || '';
        const expression = rawInput.replace(/\s+/g, ''); // remove all whitespace
        let result;

        const operators = ['+', '-', '*', '/'];
        let operator = null;
        let operatorIndex = -1;

        // Find operator position; start search from index 1 to allow a leading minus sign for negative numbers
        for (const op of operators) {
            const index = expression.indexOf(op, 1);
            if (index !== -1) {
                operator = op;
                operatorIndex = index;
                break;
            }
        }

        if (!operator) {
            resultParagraph.textContent = 'Error: Please enter an expression like 5+5';
            return;
        }

        const left = expression.slice(0, operatorIndex);
        const right = expression.slice(operatorIndex + 1);

        if (left === '' || right === '') {
            resultParagraph.textContent = 'Error: Expression must include two numbers';
            return;
        }

        const num1 = parseInt(left, 10);
        const num2 = parseInt(right, 10);

        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            resultParagraph.textContent = 'Error: Invalid number in expression';
            return;
        }

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
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