/* Open t3 folder in your IDE/editor. Add HTML by using innerHTML property. (2p)
Add the following HTML code to the element with id="target". Add the values from 'names' array to the <li> elements in a for-loop.
<li>John</li>
<li>Paul</li>
<li>Jones</li> */

'use strict';
const names = ['John', 'Paul', 'Jones'];

document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('target');
    if (!target) return; // guard
    let listItems = '';
    for (let i = 0; i < names.length; i++) {
        listItems += '<li>' + names[i] + '</li>';
    }
    target.innerHTML = listItems;
});