/* Make a hover effect with JavaScript. (2p)
when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg
when user mouses off, change the picture back to original
*/
const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

// Mouser over element event listener -> change picture to img/picB.jpg
trigger.addEventListener('mouseover', () => {
    target.src = 'img/picB.jpg';
});
// Mouse out element event listener -> change picture back to img/picA.jpg
trigger.addEventListener('mouseout', () => {
    target.src = 'img/picA.jpg';
});