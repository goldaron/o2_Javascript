/*
Task: repeatedly prompt the user for numbers until the user enters 0.
After input collection, print the numbers from largest to smallest.

Notes:
    - Use prompt() to collect values until 0 is entered (0 stops input).
    - Convert prompt input to Number (parseFloat used here) before storing.
    - After collection, sort and reverse the array so the output is largest-to-smallest and print to the console.
    - The current implementation uses Array.prototype.sort() without a numeric comparator; 
        because values are stored as numbers this generally works, but a numeric comparator (a-b) is safer for
        guaranteed numeric ordering. We intentionally do not change the program logic here — only add comments. 
*/

document.addEventListener('DOMContentLoaded', () => {
    // Collect numeric inputs until the user enters 0.
    let numbers = [];
    while (true) {
        let input = prompt("Enter a number (0 stops): ");
        let num = parseFloat(input);
        if (num === 0) break;
        numbers.push(num);
    }

    // Sort numerically (largest to smallest)
    numbers.sort((a,b) => b - a);

    // Print output to console for verification
    console.log("Numbers from largest to smallest:");
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) console.log(numbers[i]);
});
