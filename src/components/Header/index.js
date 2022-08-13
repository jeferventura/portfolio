import React, { useState } from 'react';

import './assets/css/style.min.css';
import { Navbar, NavbarMobile } from './navbar'

const Header = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false)

    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="logotipo">
                        <figure>
                            <a href="#home">
                                <img src="assets/images/header/logotipo.svg" alt="logotipo" className="logotipo-color"/>
                                <img src="assets/images/header/logotipo-white.svg" alt="logotipo" className="logotipo-white"/>
                            </a>
                        </figure>
                    </div>
                    <div className="menu">
                        <Navbar 
                            menuIsVisible={menuIsVisible}
                            setMenuIsVisible={setMenuIsVisible}
                        />
                        <NavbarMobile />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;