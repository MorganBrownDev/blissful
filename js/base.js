const menu = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');

menu.addEventListener('click', function() {
    burger.classList.toggle("active");
});