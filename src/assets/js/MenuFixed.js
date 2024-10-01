//  ********************************************
//  **********  /src/js/MenuFixed.js  **********
//  ********************************************


import $ from 'jquery';


export const MenuFixed = () => {

    const $navBar = $('.menu__navbar');

    $(window).on('scroll', () => {

        const scroll = window.scrollY;
        if(scroll > 120)  $navBar.addClass('menu__navbar--fixed');
        else $navBar.removeClass('menu__navbar--fixed');

    });
    
}







