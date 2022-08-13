import React from 'react';
import { FaBars, FaTimes }from 'react-icons/fa'

export function Navbar() {
    return(
        <nav>
            <div className="navbar-desktop">
                <a href="#home">Home</a>
                <a href="#about">Sobre</a>
                <a href="#journey">Jornada</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contato</a>
            </div>  
        </nav>
    );
}


export function NavbarMobile() {

    return(

        <nav>
            <div className="navbar-mobile">
                <div id="nav-menu">
                    <FaBars className="icon" />
                </div>
                <div className="navbar obj-hiden">
                    <span><FaTimes className="icon" /></span>
                    <a href="#home">Home</a>
                    <a href="#about">Sobre</a>
                    <a href="#journey">Jornada</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contato</a>
                </div>
            </div>
        </nav>
    );
}