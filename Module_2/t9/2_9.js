/* 
Task: implement a function called even() that accepts an array of numbers 
and returns a new array containing only the even numbers.

Notes:
    - Function name: even
    - Parameter: numbers — an array of numbers
    - Return: a new array containing only those numbers from the input that are evenly divisible by 2 (n % 2 === 0).
    - The function must not mutate the original array — it should build and return a new array.
    - After calling the function, print both the original array 
    and the returned even-number array to the console for verification. 
*/

document.addEventListener('DOMContentLoaded', () => {
    function even(numbers) {
        let evenNumbers = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                evenNumbers.push(numbers[i]);
            }
        }
        return evenNumbers;
    }

    let originalArray = [1,2,3,4,5,6,7,8,9,10];
    let evenArray = even(originalArray);
    console.log("Original array:", originalArray);
    console.log("Even numbers array:", evenArray);
});
