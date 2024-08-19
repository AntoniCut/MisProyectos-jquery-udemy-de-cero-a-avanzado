//  *******************************
//  ********** /main.js  **********
//  *******************************  

//  -----  Importación Hojas de Estilos  -----
import './src/assets/css/reset.css';
import './src/assets/css/header.css';
import './src/assets/css/home.css';

//  -----  Importación Imagenes  -----
import './public/leccion-01.jpg';
import './public/leccion-02.jpg';
import './public/leccion-03.jpg';
import './public/leccion-04.jpg';

//  -----  Importacion Archivos del Curso  -----
import leccion1Url from '/archivos-curso/01-leccion-01/index.html?url';
import leccion2Url from '/archivos-curso/02-leccion-02/index.html?url';
import leccion3Url from '/archivos-curso/03-leccion-03/index.html?url';
import leccion4Url from '/archivos-curso/04-leccion-04/index.html?url';



//  -----  Importación Otros Archivos y Librerias  -----
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery';                                           //  Importación de jQuery

import { CrearHeader } from './src/assets/js/CrearHeader';
import { CrearTarjetas } from './src/assets/js/CrearTarjetas';



//  *******************************************************
//  **********  Función Principal ------  App()  **********
//  *******************************************************
const App = () => {

   const app = document.querySelector('#app');

   if (app) {
      
      //  ----------  Agregar el contenido de header y home  ----------
      app.innerHTML = `
      
         <section class="layout__menu"> 
            <!-- Aquí se Renderizara la Cabecera -->
         </section>

         <div id="home">
            <div class="home__cards">
               <!-- Aquí se Renderizara las tarjetas dinámicamente -->
            </div>
         </div>
      `; 
      
      //  ----------  Llamar a la función para crear la cabecera  ----------
      CrearHeader();
      
      //  ----------  Llamar a la función para crear tarjetas  ----------
      CrearTarjetas(); 

      //  ----------  Array con los links de los htmls  ----------
      const links = [
         leccion1Url,
         leccion2Url,
         leccion3Url,
         leccion4Url
      ];

      //  ----------  Llamar a $.addCards con opciones  ----------
      if ($.addCards) {
         
         $.addCards({

            img: [
               "leccion-01.jpg",
               "leccion-02.jpg",
               "leccion-03.jpg",
               "leccion-04.jpg",
            ],

            titulo: [
               "jQuery y Bootstrap",
               "Selectores y Encadenamiento",
               "Eventos",
               "Acordeones"
            ],

            link: links

            // link: [
            //    "src/archivos-curso/01-leccion-01/index.html",
            //    "src/archivos-curso/02-leccion-02/index.html",
            //    "src/archivos-curso/03-leccion-03/index.html",
            //    "src/archivos-curso/04-leccion-04/index.html"
            // ]

         });

      } else console.error('$.addCards no está definida');
      
   } else console.error('No se encontró el elemento con id #app.');
   
};


//  ----------  Ejecutar la función para cargar el contenido cuando el DOM esté completamente cargado  ----------
document.addEventListener('DOMContentLoaded', App);

