import React from 'react';

import './assets/css/style.min.css';
import { Navbar, NavbarMobile } from './navbar'

const Header = () => {

    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="logotipo">
                        <figure>
                            <a href="#home">
                                <img src="assets/images/header/logotipo.webp" alt="logotipo" className="logotipo-color"/>
                                <img src="assets/images/header/logotipo-white.webp" alt="logotipo" className="logotipo-white"/>
                            </a>
                        </figure>
                    </div>
                    <div className="menu">
                        <Navbar />
                        <NavbarMobile />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;