import React, { useState, useContext }from 'react';
import { FaBars, FaTimes }from 'react-icons/fa';
import { ThemeContext } from './../../_config/ThemeContext'

export const ToggleTheme = () => {
    const context = useContext(ThemeContext)

    return (
        <label for="theme" className="theme">
            <span className="theme__toggle-wrap">
                <input id="theme" className="theme__toggle" type="checkbox" onClick={context.toggleThemeMode}/>
            </span>
        </label>
        )
};

export function Navbar() {

    return(
        <nav className="navbar-main">
            <div className="navbar-desktop">
                <a href="#home">Home</a>
                <a href="#about">Sobre</a>
                <a href="#journey">Jornada</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contato</a>
                <div className="button-mode">
                    <ToggleTheme />
                </div>
            </div>  
        </nav>
    );
}


export function NavbarMobile() {

    const [activeNavbarMobile, setActiveNavbarMobile] = useState('obj-hiden');

    function showNavbarMobile(){
        setActiveNavbarMobile('');
    }

    function hidenNavbarMobile(){
        setActiveNavbarMobile('obj-hiden');

    }

    return(

        <nav>
            <div className="navbar-mobile">
                <div id="nav-menu">
                    <FaBars className="icon" onClick={showNavbarMobile} />
                </div>
                <div className="button-mode">
                    <ToggleTheme />
                </div>
                <d iv className={"navbar "+activeNavbarMobile+""}>
                    <span> <FaTimes onClick={hidenNavbarMobile}/></span>
                    <a href="#home" onClick={hidenNavbarMobile} >Home</a>
                    <a href="#about" onClick={hidenNavbarMobile}>Sobre</a>
                    <a href="#journey" onClick={hidenNavbarMobile}>Jornada</a>
                    <a href="#portfolio" onClick={hidenNavbarMobile}>Portfolio</a>
                    <a href="#contact" onClick={hidenNavbarMobile}>Contato</a>
                </d>
            </div>
        </nav>
    );
}