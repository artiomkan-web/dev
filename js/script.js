'use strict';
// Burger Menu
let menu = document.querySelector('.header__menu'),
    menuBurger = document.querySelector('.header__burger')

menuBurger.addEventListener('click', ()=>{
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
        menuBurger.classList.remove('active')
    }
    else{
        menu.classList.add('active')
        menuBurger.classList.add('active')
    }
})
