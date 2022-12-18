const menu = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');

menu.addEventListener('click', function() {
    if (burger.classList.contains('active')) {
        burger.classList.toggle("non-active");
        document.body.classList.toggle("overflow-off");
    }
    else {
        burger.classList.toggle("active");
        document.body.classList.toggle("overflow-off");
    }
});