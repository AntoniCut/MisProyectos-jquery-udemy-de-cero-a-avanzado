//  *******************************
//  ********** /main.js  **********
//  *******************************  


//  -----  Importación Hojas de Estilos  -----
import './src/assets/css/reset.css';
import './style.css';
import './src/assets/css/header.css';
import './src/assets/css/home.css';

//  -----  Importación Librerias  -----
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery';                                           //  Importación de jQuery

//  -----  Importación Archivos JS  -----
import { CrearHeader } from './src/assets/js/CrearHeader';
import { CrearTarjetas } from './src/assets/js/CrearTarjetas';

//  -----  Importación de Datos  -----
import { imagenes } from './src/data/imagenes';
import { links } from './src/data/links';
import { titulos } from './src/data/titulos';



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

            <header class="layout__title-home">
                <h1 class="title-home__title"> Curso jQuery de Cero a Avanzado </h1>
            </header>

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

        //  ----------  Cargar el contenido de la lección 23  ----------
        //loadLeccion23Html(); // Llama a la función para cargar la lección 23


        //  ----------  Llamar a $.addCards con opciones  ----------
        if ($.addCards) {

            $.addCards({

                img: imagenes,
                titulo: titulos,
                link: links

            });

        } else console.error('$.addCards no está definida');

    } else console.error('No se encontró el elemento con id #app.');

};


//  ----------  Ejecutar la función para cargar el contenido cuando el DOM esté completamente cargado  ----------
document.addEventListener('DOMContentLoaded', App);

