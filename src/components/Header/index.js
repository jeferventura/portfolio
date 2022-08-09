import React from 'react';

import './assets/css/style.min.css';
import { Navbar } from './navbar'
const Header = () => {

    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="logotipo">
                        <figure>
                            <img src="assets/images/header/logotipo.svg" alt="logotipo" className="logotipo-color"/>
                            <img src="assets/images/header/logotipo-white.svg" alt="logotipo" className="logotipo-white"/>
                        </figure>
                    </div>
                    <div className="menu">
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;