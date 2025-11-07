/* Read the first name and last name values from the form and print them in the <p id="target"> (2p)
remember to stop the default action of the form
you can use attribute selectors in querySelector() to select the <input> elements
example output: Your name is Luke Skywalker */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const target = document.getElementById('target');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the default form submission behavior
        // The HTML uses name attributes "firstname" and "lastname" (lowercase).
        // Query using the exact attribute names to avoid returning null.
        const firstInput = form.querySelector('input[name="firstname"]');
        const lastInput = form.querySelector('input[name="lastname"]');

        // Guard in case form structure changed
        const firstName = firstInput ? firstInput.value.trim() : '';
        const lastName = lastInput ? lastInput.value.trim() : '';

        // Use the previously selected `target` element reference.
        if (firstName || lastName) {
            target.textContent = `Your name is ${firstName} ${lastName}`.trim();
        } else {
            target.textContent = 'Please enter both first and last name.';
        }
    });
});