/* 
Task: prompt the user for numbers and stop when a number that was previously entered is entered again. 
Then print all previously given numbers in ascending order.

Notes:
    - Use prompt() repeatedly to collect numbers from the user.
    - Convert prompt responses to numbers (parseFloat) before storing.
    - When a duplicate is detected (numbers.includes(num)), report it and stop collecting inputs.
    - Finally, sort the collected numbers numerically and print them. 
*/

document.addEventListener('DOMContentLoaded', () => {
    // Collect numbers until a duplicate is entered.
    let numbers = [];
    while (true) {
        let input = prompt("Enter a number (enter a previously given number to stop): ");
        let num = parseFloat(input);

        if (numbers.includes(num)) {
            console.log("The number " + num + " has already been given.");
            break;
        }
        numbers.push(num);
    }

    // Sort numerically (ascending) and print results
    numbers.sort(function(a, b) { return a - b; });
    console.log("Given numbers in ascending order:");
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
});
