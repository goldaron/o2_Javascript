const target = document.getElementById('target');
if (target) {
  target.innerHTML = [
    '<li>First item</li>',
    '<li>Second item</li>',
    '<li>Third item</li>'
  ].join('');
  target.classList.add('my-list');
} else {
  console.warn('Element #target not found');
}