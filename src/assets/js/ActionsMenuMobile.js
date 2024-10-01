//  ****************************************************
//  **********  /src/js/ActionsMenuMobile.js  con jQuery**********
//  ****************************************************


import $ from 'jquery';


export const ActionsMenuMobile = () => {

    //alert('Script Cargado!!!');

    //  -----  Referencias al HTML  -----
    const $mobileBtn = $('.navbar__mobile-btn');
    const $mobileMenu = $('.menu-mobile');
    const $btnClose = $('.menu-mobile__close');
    const $menuItem = $('.menu-mobile__item');
    //const $submenuMobile = $('menu-mobile__submenu-mobile');

    //$submenuMobile.hide();

    // const mobile_btn = document.querySelector('.navbar__mobile-btn');
    // const mobile_menu = document.querySelector('.menu-mobile');
    // const btn_close = document.querySelector('.menu-mobile__close');
    // const menu_item = document.querySelectorAll('.menu-mobile__item');



    //  -----  Función Mostrar y Ocultar el Menu  -----
    const showHiddenMenu = () => {

        //mobile_menu.style.display = "block";
        const $show = $('.menu-mobile--show');

        if ($show.length) $mobileMenu.removeClass('menu-mobile--show');
        else $mobileMenu.addClass('menu-mobile--show');
    }

    //  -----  Click en el botón del Menu hamburguesa  -----
    $mobileBtn.on('click', showHiddenMenu);


    //  -----  Redimensionar la ventana del Navegador por debajo de 1000px ocultar el menu si es necesario  -----
    window.addEventListener('resize', () => {

        const window_width = parseInt(document.body.clientWidth);
        if (window_width >= 1000) $mobileMenu.removeClass('menu-mobile--show');
    });


    //  -----  Poder cerrar el menu con el botón X  -----
    $btnClose.on('click', showHiddenMenu);


    // //  -----  Desplegar Submenus  -----
    // $menuItem.each(function () {

    //     const item = $(this); // Referencia al elemento actual en el bucle

    //     item.on('click', function (event) {

    //         const submenu = item.children().last(); // Obtiene el último hijo

    //         // Verifica si el elemento tiene la clase 'menu-mobile__submenu-mobile'
    //         if (submenu.hasClass('menu-mobile__submenu-mobile')) {
    //             if (submenu.css('display') === 'block') {
    //                 submenu.css('display', 'none');
    //             } else {
    //                 submenu.css('display', 'block');
    //             }
    //         }
    //     });
    // });

    //  -----  Desplegar Submenus  -----
    $menuItem.each(function () {

        const item = $(this); // Referencia al elemento actual en el bucle

        item.on('click', function () {

            const submenu = item.children().last(); // Obtiene el último hijo

            // Verifica si el elemento tiene la clase 'menu-mobile__submenu-mobile'
            if (submenu.hasClass('menu-mobile__submenu-mobile')) {
                submenu.slideToggle(1000); // Alterna la visibilidad con animación
            }
        });
    });




}







