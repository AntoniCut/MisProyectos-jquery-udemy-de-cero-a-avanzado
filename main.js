//  *******************************
//  ********** /main.js  **********
//  *******************************  


//  -----  Importación Hojas de Estilos  -----
import './src/assets/css/reset.css';
import './style.css';
import './src/assets/css/header.css';
import './src/assets/css/home.css';
import './src/assets/css/responsive.css';

//  -----  Importación Libreria 'fontawesomw'  -----
import '@fortawesome/fontawesome-free/css/all.min.css';

//  -----  Importación de jQuery  -----
import $ from 'jquery';                                           

//  -----  Importación Archivos JS  -----
import { CrearHeader } from './src/assets/js/CrearHeader';
import { CrearTarjetas } from './src/assets/js/CrearTarjetas';
import { CrearMenuMobile } from './src/assets/js/CrearMenuMobile';
import { ActionsMenuMobile } from './src/assets/js/ActionsMenuMobile';
import { MenuFixed } from './src/assets/js/MenuFixed';

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
      
            <div class="menu-mobile">
                <!-- Aquí se Renderizara el Menu Mobile -->
            </div>

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

        //  ----------  Llama a la función para crear el menu responsive  mobile  -----
        CrearMenuMobile();

        //  ----------  Llamar a la función para crear la cabecera  ----------
        CrearHeader();

        //  ----------  Llamar a la función para dejar el Menu Fijo  ----------
        MenuFixed();


        //  ----------  Llamar a la función para crear tarjetas  ----------
        CrearTarjetas();

        //  ----------  Llama a la función para manejar el menu responsive mobile  -----
        ActionsMenuMobile();


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

