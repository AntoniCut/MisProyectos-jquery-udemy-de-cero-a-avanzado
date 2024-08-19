//  ************************************************
//  **********  /src/js/CrearTarjetas.js  **********
//  ************************************************


import $ from 'jquery';


//  **********************************************
//  **********  Función Crear Tarjetas  **********
//  **********************************************
export const CrearTarjetas = () => {

    console.warn('Documento Cargado en JS!!!  ----- ', 'jQuery version:', $.fn.jquery);

    $.addCards = function (opciones) {

        opciones = $.extend({
            img: undefined,
            titulo: undefined,
            link: undefined
        }, opciones);

        console.log("entra en extends");

        // Lógica para crear las tarjetas dinámicamente
        const cardContainer = $('.home__cards');

        // Array para almacenar todo el HTML
        let cardsHtmlArray = [];

        // ----- Creación de tarjetas Dinamicamente  -----
        for (let i = 0; i < opciones.img.length; i++) {

            const cardHtml = `
                
                <div class="cards__card">
                    <h2 class="card__title"> ${opciones.titulo[i]} </h2>
                    <div class="card__container-img">
                        <img src="${opciones.img[i]}" class="card__img">
                    </div>
                    <div class="card-container-links">
                        
                        <a href="${opciones.link[i]}" class="card_button" target="_blank">APP</a>
                                                
                        <a class="card__link">HTML</a>
                        <a class="card__link">CSS</a>
                        <a class="card__link">JS</a>
                    </div>
                </div>
            `;

            // Agregar el HTML de la tarjeta al array
            cardsHtmlArray.push(cardHtml);
        }

        // Agregar la tarjeta al contenedor
        cardContainer.append(cardsHtmlArray);
    };
};










