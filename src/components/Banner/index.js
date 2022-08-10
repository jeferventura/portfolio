import React from 'react';
import Typed from 'typed.js'

import './assets/css/style.min.css';

const Banner = () => {

    return(
        <section className="banner">
            <div className="banner-container container">
                <div className="banner-wrapper">
                    <div className="banner-wrapper-box">
                        <div className="banner-title">
                            <h1>Eu sou <span className="name-pessoal">Jeferson Ventura</span></h1>
                            <span className="element">desenvolvedor front-end, designer gráfico, UX e UI design</span>
                        </div>
                        <div className="banner-buttons">
                            <a href="#download" className="btn btn-bg-yellow btn-uppercase">download cv</a>
                            <a href="#contato" className="btn btn-line-blue btn-uppercase">Contate-me</a>
                        </div>
                        <div className="banner-icons">
                            <img className="icons" src="/assets/images/banner/icons/css.svg" alt="CSS 3" />
                            <img className="icons" src="/assets/images/banner/icons/html.svg" alt="CSS 3" />
                            <img className="icons" src="/assets/images/banner/icons/js.svg" alt="CSS 3" />
                            <img className="icons" src="/assets/images/banner/icons/figma.svg" alt="CSS 3" />
                            <img className="icons" src="/assets/images/banner/icons/php.svg" alt="CSS 3" />
                            <img className="icons" src="/assets/images/banner/icons/angular.svg" alt="CSS 3" />
                            <img className="icons" src="/assets/images/banner/icons/bootstrap.svg" alt="CSS 3" />
                        </div>
                    </div>
                    <div className="banner-photo-profile">
                        <figure>
                            <img src="/assets/images/banner/foto-perfil-bg.svg" alt="Foto do perfil" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );


}
export default Banner;