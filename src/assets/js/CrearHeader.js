//  **********************************************
//  **********  /src/js/CrearHeader.js  **********
//  **********************************************


import $ from 'jquery';

//  -----  Importación Imagenes  -----
// import imgUdemy from '../../../public/cliente-2.png';
// import imgjQuery from '../../../public/jquery-logo2.png';

import imgUdemy from '/img/cliente-2.png';
import imgjQuery from '/img/jquery-logo2.png';


//  -----  Importacion Archivos del Curso  -----
import leccion1Url from '/archivos-curso/01-leccion-01/index.html?url';
import leccion2Url from '/archivos-curso/02-leccion-02/index.html?url';
import leccion3Url from '/archivos-curso/03-leccion-03/index.html?url';
import leccion4Url from '/archivos-curso/04-leccion-04/index.html?url';
import leccion5Url from '/archivos-curso/05-leccion-05/index.html?url';
import leccion6Url from '/archivos-curso/06-leccion-06/index.html?url';
import leccion7Url from '/archivos-curso/07-leccion-07/index.html?url';
import leccion8Url from '/archivos-curso/08-leccion-08/index.html?url';
import leccion9Url from '/archivos-curso/09-leccion-09/index.html?url';
import leccion9_2_Url from '/archivos-curso/09-leccion-09-2/index.html?url';
import leccion10Url from '/archivos-curso/10-leccion-10/index.html?url';
import leccion11Url from '/archivos-curso/11-leccion-11/index.html?url';
import leccion12Url from '/archivos-curso/12-leccion-12/index.html?url';
import leccion13Url from '/archivos-curso/13-leccion-13/index.html?url';
import leccion14Url from '/archivos-curso/14-leccion-14/index.html?url';
import leccion15Url from '/archivos-curso/15-leccion-15/index.html?url';
import leccion16Url from '/archivos-curso/16-leccion-16/index.html?url';
import leccion17Url from '/archivos-curso/17-leccion-17/index.html?url';
import leccion18Url from '/archivos-curso/18-leccion-18/index.html?url';
import leccion19Url from '/archivos-curso/19-leccion-19/index.html?url';
import leccion20Url from '/archivos-curso/20-leccion-20/index.html?url';
import leccion21Url from '/archivos-curso/21-leccion-21/index.html?url';
import leccion22Url from '/archivos-curso/22-leccion-22/index.html?url';






//  ********************************************
//  **********  Función Crear Header  **********
//  ********************************************
export const CrearHeader = () => {


    const layoutMenu = $('.layout__menu');

    const headerHTML = `

        <header class="menu__navbar">
        
            <div class="navbar__logo">
                <a href="#" class="navbar__link-logo">
                    <img src=${imgUdemy} class="navbar__logo-light">
                    <img src=${imgjQuery} class="navbar__logo-light">
                </a>
            </div>
            
            <!--  -----  Navegación  -----  -->
            <nav class="navbar__nav">
                
                <!--  -----  Lista de Navegación  ------->
                <ul class="nav__list">


                    <!--  -----  Item 1 - Primeros Pasos  -----  -->
                    <li class="nav__item">
                        
                        <a href="#" class="nav__title">
                            Primeros pasos
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        
                        <!--  -----  Submenu Item 1  ------->
                        <ul class="nav__submenu">
                            
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion1Url}" target="_blank" class="submenu__title"> 1 - jQuery y Bootstrap </a>
                            </li>

                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion2Url}" target="_blank" class="submenu__title"> 2 - Selectores y Encadenamiento </a>
                            </li>
                            
                        </ul>
                    </li>


                    <!--  -----  Item 2 - Eventos  -----  -->
                    <li class="nav__item">
                        
                        <a href="#" class="nav__title">
                            Eventos
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        
                        <!--  -----  Submenu Item 2  ------->
                        <ul class="nav__submenu">
                            
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion3Url}" target="_blank" class="submenu__title"> 3 - Eventos </a>
                            </li>

                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion4Url}" target="_blank" class="submenu__title"> 4 - Acordeones </a>
                            </li>

                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion5Url}" target="_blank" class="submenu__title"> 5 - On y Bind </a>
                            </li>

                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion6Url}" target="_blank" class="submenu__title"> 6 - Tabla de Multiplicar </a>
                            </li>
                            
                        </ul>

                    </li>


                    <!--  -----  Item 3 - Objetos  -----  -->
                    <li class="nav__item">
                        
                        <a href="#" class="nav__title">
                            Objetos
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        
                        <!--  -----  Submenu Item 3  ------->
                        <ul class="nav__submenu">
                            
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion7Url}" target="_blank" class="submenu__title"> 7 - Objetos JavaScript </a>
                            </li>

                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion8Url}" target="_blank" class="submenu__title"> 8 - Objetos jQuery </a>
                            </li>

                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion9Url}" target="_blank" class="submenu__title"> 9.1 - Tesla Motor Parte 1 </a>
                            </li>

                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion9_2_Url}" target="_blank" class="submenu__title"> 9.2 - Tesla Motor Parte 2 </a>
                            </li>
                            
                            <!--  5º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion10Url}" target="_blank" class="submenu__title"> 10 - Datta Attribute </a>
                            </li>

                            <!--  6º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion11Url}" target="_blank" class="submenu__title"> 11 - Tienda de Ropa </a>
                            </li>

                        </ul>

                    </li>


                    <!--  -----  Item 4 - Animaciones  -----  -->
                    <li class="nav__item">
                        
                        <a href="#" class="nav__title">
                            Animaciones
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        
                        <!--  -----  Submenu Item 4  ------->
                        <ul class="nav__submenu">
                            
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion12Url}" target="_blank" class="submenu__title"> 12 - Animaciones 101 </a>
                            </li>

                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion13Url}" target="_blank" class="submenu__title"> 13 - Animaciones 202  </a>
                            </li>

                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion14Url}" target="_blank" class="submenu__title"> 14 - Animaciones GSAP </a>
                            </li>
                            
                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion15Url}" target="_blank" class="submenu__title"> 15 - Slider I </a>
                            </li>

                            <!--  5º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion16Url}" target="_blank" class="submenu__title"> 16 - Slider II  </a>
                            </li>
                        </ul>
                    </li>



                    <!--  -----  Item 5 - Plugins  -----  -->
                    <li class="nav__item">
                        
                        <a href="#" class="nav__title">
                            Plugins
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        
                        <!--  -----  Submenu Item 5  ------->
                        <ul class="nav__submenu">
                            
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion17Url}" target="_blank" class="submenu__title"> 17 - Slider Plugin  </a>
                            </li>

                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion18Url}" target="_blank" class="submenu__title"> 18 - Big Box Notification </a>
                            </li>

                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion19Url}" target="_blank" class="submenu__title">  19 - Small Notification </a>
                            </li>

                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion20Url}" target="_blank" class="submenu__title"> 20 - Tarea Notification </a>
                            </li>
                           
                        </ul>

                    </li>


                    <!--  -----  Item 6 - Peticiones Externas  -----  -->
                    <li class="nav__item">
                        
                        <a href="#" class="nav__title">
                            Peticiones Externas
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        
                        <!--  -----  Submenu Item 6  ------->
                        <ul class="nav__submenu">
                            
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion21Url}" target="_blank" class="submenu__title"> 21 - Ajax 01 </a>
                            </li>
                            
                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="${leccion22Url}" target="_blank" class="submenu__title"> 22 - Tarea Clima Ajax  </a>
                            </li>
                            
                        </ul>

                    </li>


                    <!--  -----  Item 7 - Peticiones AJAX  -----  -->
                    <li class="nav__item">
                        <a href="https://www.oldschoolcode.antonydev.tech/jquery-ajax" target="_blank" class="nav__title"> Peticiones AJAX </a>
                    </li>

                </ul>

            </nav>

        </header>

    `;

    layoutMenu.append(headerHTML);

}