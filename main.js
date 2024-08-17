//  *******************************
//  ********** /main.js  **********
//  *******************************  

import './src/assets/css/reset.css';
import './src/assets/css/header.css';
import './src/assets/css/home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery';                                     //  Importación de jQuery
import { crearTarjetas } from './src/assets//js/home';
import headerHtml from './src/header.html?raw';             //  Importar el contenido de header.html como texto crudo
import homeHtml from './src/home.html?raw';                 //  Importar el contenido de home.html como texto crudo

// Función para cargar y mostrar el contenido
const loadPageContent = () => {

   const app = document.querySelector('#app');

   if (app) {
      
      app.innerHTML = `${headerHtml} ${homeHtml}`; // Agregar el contenido de header y home
      crearTarjetas(); // Llamar a la función para crear tarjetas

      // Llamar a $.addCards con opciones
      if ($.addCards) {
         
         $.addCards({

            img: [
               "./public/assets/img/leccion-01.jpg",
               "./public/assets/img/leccion-02.jpg",
               "./public/assets/img/leccion-03.jpg",
               "./public/assets/img/leccion-04.jpg",
            ],

            titulo: [
               "jQuery y Bootstrap",
               "Selectores y Encadenamiento",
               "Eventos",
               "Acordeones"
            ],

            link: [
               "public/archivos-curso/01-leccion-01/leccion01.html",
               "public/archivos-curso/02-leccion-02/leccion02.html",
               "public/archivos-curso/03-leccion-03/leccion03.html",
               "public/archivos-curso/04-leccion-04/leccion04.html",
               
            ]

         });

      } else console.error('$.addCards no está definida');
      
   } else console.error('No se encontró el elemento con id #app.');
   
};

// Ejecutar la función para cargar el contenido cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', loadPageContent);
