//  ************************************************
//  **********  /src/js/CrearTarjetas.js  **********
//  ************************************************


import $ from 'jquery';
import imgLeccion23 from '/img/leccion-23.png';
import { linksGitHub } from '../../data/linksGitHub';


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
                                       
                        <a href="${linksGitHub[i]}" target="_blank" class="card__link"> 
                                <i class="fab fa-github fa-2x"> </i>
                        </a>
 
                    </div>

                </div>
            `;

            // Agregar el HTML de la tarjeta al array
            cardsHtmlArray.push(cardHtml);
        }

        const cardHtmlLeccion23 = `
        
            <div class="cards__card">
                <h2 class="card__title"> 23 - Peticiones Ajax </h2>
                <div class="card__container-img">
                    <img src="${imgLeccion23}" class="card__img">
                </div>
                <div class="card-container-links">
                        
                    <a href="https://www.oldschoolcode.antonydev.tech/jquery-ajax" class="card_button" target="_blank">APP</a>
                    
                    <a href="${linksGitHub[23]}" target="_blank" class="card__link"> 
                        <i class="fab fa-github fa-2x"> </i>
                    </a>
                    
                </div>

            </div>
        
        `;

        //  ----------  Añadir el div para el contenido de la lección 23  ----------
        cardsHtmlArray.push(cardHtmlLeccion23);


        // Agregar la tarjeta al contenedor
        cardContainer.append(cardsHtmlArray);

    };
};










