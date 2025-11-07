/* Open t2 folder in your IDE/editor. Add HTML by using createElement() and appendChild methods. (2p)
Add the following HTML code to the element with id="target"
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
Add class my-item to the second list item */

document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('target');
    if (!target) return; // guard 
    // Create and append the first list item
    const firstItem = document.createElement('li');
    firstItem.textContent = 'First item';
    target.appendChild(firstItem);

    // Create and append the second list item with class 'my-item'
    const secondItem = document.createElement('li');
    secondItem.textContent = 'Second item';
    secondItem.classList.add('my-item');
    target.appendChild(secondItem);

    // Create and append the third list item
    const thirdItem = document.createElement('li');
    thirdItem.textContent = 'Third item';
    target.appendChild(thirdItem);
});