window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav-list'),
    menuItem = document.querySelectorAll('.header__nav-list-item'),
    hamburger = document.querySelector('.humburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('humburger-active');
        menu.classList.toggle('header__nav-list-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('humburger-active');
            menu.classList.toggle('header__nav-list-active');
        })
    })
})