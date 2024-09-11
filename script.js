const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle hamburger icon to "X"
    menu.classList.toggle('open'); // Toggle menu visibility
});