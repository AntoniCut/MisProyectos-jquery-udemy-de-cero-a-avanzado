//  ************************************************
//  **********  /src/js/CrearHeader.js  **********
//  ************************************************


import $ from 'jquery';

//  -----  Importación Imagenes  -----
// import imgUdemy from '../../../public/cliente-2.png';
// import imgjQuery from '../../../public/jquery-logo2.png';

import imgUdemy from '/cliente-2.png';
import imgjQuery from '/jquery-logo2.png';



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
                    <h1 class="navbar__title"> Curso jQuery de Cero a Avanzado </h1>
                </a>
            </div>
            
            <!--  -----  Navegación  -----  -->
            <nav class="navbar__nav">
                <!--  -----  Lista de Navegación  ------->
                <ul class="nav__list">


                    <!--  -----  2º. Elemento li 'Servicios'  -----  -->
                    <li class="nav__item">
                        <a href="#" class="nav__title">
                            Primeros pasos
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        <!--  -----  Submenu  ------->
                        <ul class="nav__submenu">
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Diseño Web
                                </a>
                            </li>
                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo Web
                                </a>
                            </li>
                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo de Apps
                                </a>
                            </li>
                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Programación
                                </a>
                            </li>
                            <!--  5º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Consultoría
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!--  -----  3º. Elemento li 'Portafolio'  -----  -->
                    <li class="nav__item">
                        <a href="#" class="nav__title">
                            Eventos
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        <!--  -----  Submenu  ------->
                        <ul class="nav__submenu">
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Diseño Web
                                </a>
                            </li>
                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo Web
                                </a>
                            </li>
                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo de Apps
                                </a>
                            </li>
                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Programación
                                </a>
                            </li>
                            <!--  5º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Consultoría
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!--  -----  4º. Elemento li 'Blog'  -----  -->
                    <li class="nav__item">
                        <a href="#" class="nav__title">
                            Objetos
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        <!--  -----  Submenu  ------->
                        <ul class="nav__submenu">
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Diseño Web
                                </a>
                            </li>
                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo Web
                                </a>
                            </li>
                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo de Apps
                                </a>
                            </li>
                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Programación
                                </a>
                            </li>
                            <!--  5º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Consultoría
                                </a>
                            </li>
                        </ul>
                    </li>


                    <!--  -----  4º. Elemento li 'Blog'  -----  -->
                    <li class="nav__item">
                        <a href="#" class="nav__title">
                            Animaciones
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        <!--  -----  Submenu  ------->
                        <ul class="nav__submenu">
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Diseño Web
                                </a>
                            </li>
                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo Web
                                </a>
                            </li>
                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo de Apps
                                </a>
                            </li>
                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Programación
                                </a>
                            </li>
                            <!--  5º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Consultoría
                                </a>
                            </li>
                        </ul>
                    </li>


                    <!--  -----  4º. Elemento li 'Blog'  -----  -->
                    <li class="nav__item">
                        <a href="#" class="nav__title">
                            Peticiones
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        <!--  -----  Submenu  ------->
                        <ul class="nav__submenu">
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Diseño Web
                                </a>
                            </li>
                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo Web
                                </a>
                            </li>
                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo de Apps
                                </a>
                            </li>
                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Programación
                                </a>
                            </li>
                            <!--  5º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Consultoría
                                </a>
                            </li>
                        </ul>
                    </li>



                    <!--  -----  4º. Elemento li 'Blog'  -----  -->
                    <li class="nav__item">
                        <a href="#" class="nav__title">
                            Peticiones AJAX
                            <i class="fa-solid fa-chevron-down nav__icon"> </i>
                        </a>
                        <!--  -----  Submenu  ------->
                        <ul class="nav__submenu">
                            <!--  1º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Diseño Web
                                </a>
                            </li>
                            <!--  2º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo Web
                                </a>
                            </li>
                            <!--  3º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Desarrollo de Apps
                                </a>
                            </li>
                            <!--  4º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Programación
                                </a>
                            </li>
                            <!--  5º li del Submenu  -->
                            <li class="submenu__item">
                                <a href="#" class="submenu__title">
                                    Consultoría
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </header>

    `;

    layoutMenu.append(headerHTML);


}