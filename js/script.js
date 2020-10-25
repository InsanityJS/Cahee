window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_nav'),
    menuItem = document.querySelectorAll('.header_link'),
    burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('header_nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('header_nav_active');
        })
    })
})