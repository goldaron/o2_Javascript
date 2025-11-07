/* 
Task: Write a function called concat() that receives an array of strings 
and returns a single string formed by concatenating all elements.

Notes:
    - Function name: concat
    - Parameter: an array of strings (e.g. ["a", "b", "c"]).
    - Return: a single string containing all array items concatenated in order.
    - Do NOT use Array.prototype.join() — implement concatenation manually.
    - Hardcoding the array for demonstration is fine (no prompt needed).
    - Print the result into the HTML document for verification.

Example: input ["Johnny","DeeDee","Joey","Marky"] -> output "JohnnyDeeDeeJoeyMarky"  */

document.addEventListener('DOMContentLoaded', () => {
    function concat(strings) {
        let result = "";
        for (let i = 0; i < strings.length; i++) {
            result += String(strings[i]);
        }
        return result;
    }

    let names = ["Johnny", "DeeDee", "Joey", "Marky"];
    let concatenatedNames = concat(names);

    const output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);

    const p = document.createElement('p');
    p.textContent = concatenatedNames;
    output.appendChild(p);
});
