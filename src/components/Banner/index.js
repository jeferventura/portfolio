import React from "react";
import {
  FaDownload,
  FaRegEnvelope,
  FaFigma,
  FaCss3Alt,
  FaHtml5,
  FaAngular,
  FaBootstrap,
  FaPhp,
  FaJsSquare,
} from "react-icons/fa";

import "./assets/css/style.min.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container container">
        <div className="banner-wrapper">
          <div className="banner-wrapper-box">
            <div className="banner-title">
              <h1>
                Eu sou <span className="name-pessoal">Jeferson Ventura</span>
              </h1>
              <div className="element">
                <p>desenvolvedor front-end,</p>
                <p>designer gráfico,</p>
                <p>UX e UI design</p>
              </div>
            </div>
            <div className="banner-icons">
              <FaCss3Alt className="icons" id="css" alt="CSS 3" />
              <FaHtml5 className="icons" id="html" alt="HTML 5" />
              <FaJsSquare className="icons" id="js" alt="JavaScript" />
              <FaFigma className="icons obj-hiden" id="figma" alt="Figma" />
              <img
                className="icons"
                id="figma"
                src="/assets/images/banner/icons/figma.svg"
                alt="Figma"
              />
              <FaPhp className="icons" id="php" alt="PHP" />
              <FaAngular className="icons" id="angular" alt="Angular" />
              <FaBootstrap className="icons" id="bootstrap" alt="Bootstrap" />
            </div>
            <div className="banner-buttons">
              <a
                href="assets/docs/curriculo.pdf"
                className="btn btn-bg-yellow btn-uppercase"
                target="_blank"
              >
                <FaDownload className="icon" />
                download cv
              </a>
              <a href="/#contact" className="btn btn-line-blue btn-uppercase">
                <FaRegEnvelope className="icon" />
                Contate-me
              </a>
            </div>
          </div>
          <div className="banner-photo-profile">
            <img
              src="/assets/images/banner/foto-perfil-bg.webp"
              alt="Foto do perfil"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
