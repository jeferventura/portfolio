<<<<<<< HEAD
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
                <div className={"navbar "+activeNavbarMobile+""} onClick={hidenNavbarMobile}>
                    <span> <FaTimes className="icon" onClick={hidenNavbarMobile}/></span>
                    <a href="#home" onClick={hidenNavbarMobile} >Home</a>
                    <a href="#about" onClick={hidenNavbarMobile}>Sobre</a>
                    <a href="#journey" onClick={hidenNavbarMobile}>Jornada</a>
                    <a href="#portfolio" onClick={hidenNavbarMobile}>Portfolio</a>
                    <a href="#contact" onClick={hidenNavbarMobile}>Contato</a>
                </div>
            </div>
        </nav>
    );
}
=======
import React, { useState, useContext } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { ThemeContext } from "./../../_config/ThemeContext";

export const ToggleTheme = () => {
  const context = useContext(ThemeContext);

  return (
    <label for="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle"
          type="checkbox"
          onClick={context.toggleThemeMode}
        />
      </span>
    </label>
  );
};

export function Navbar() {
  return (
    <nav className="navbar-main">
      <div className="navbar-desktop">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            {" "}
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#journey">Jornada</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <div className="button-mode">
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}

export function NavbarMobile() {
  const [activeNavbarMobile, setActiveNavbarMobile] = useState("obj-hiden");

  function showNavbarMobile() {
    setActiveNavbarMobile("");
  }

  function hidenNavbarMobile() {
    setActiveNavbarMobile("obj-hiden");
  }

  return (
    <nav>
      <div className="navbar-mobile">
        <div id="nav-menu">
          <FaBars className="icon" onClick={showNavbarMobile} />
        </div>
        <div className="button-mode">
          <ToggleTheme />
        </div>
        <div
          className={"navbar " + activeNavbarMobile + ""}
          onClick={hidenNavbarMobile}
        >
          <span>
            {" "}
            <FaTimes className="icon" onClick={hidenNavbarMobile} />
          </span>
          <a href="#home" onClick={hidenNavbarMobile}>
            Home
          </a>
          <a href="#about" onClick={hidenNavbarMobile}>
            Sobre
          </a>
          <a href="#journey" onClick={hidenNavbarMobile}>
            Jornada
          </a>
          <a href="#portfolio" onClick={hidenNavbarMobile}>
            Portfolio
          </a>
          <a href="#contact" onClick={hidenNavbarMobile}>
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
>>>>>>> b70aabc163db74fa5031d4c57eb245a5aab82f1a
