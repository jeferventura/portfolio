import React from "react";

import {
  Codepen,
  GitHub,
  WhatsApp,
  LinkedIn,
  Behance,
} from "../icons/icons_midias_sociais";

import "./assets/css/style.min.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-box">
          <p>Design and developer by Jeferson Ventura</p>
          <p>&copy; 2023 | Todos os direitos reservados</p>
        </div>
        <div className="footer-box box-icons">
          <div className="icons-box codepen">
            <div className="icon-tooltip">Codepen</div>
            <a href="https://codepen.io/jeferventura" rel="_blank">
              <Codepen />
            </a>
          </div>

          <div className="icons-box github ">
            <div className="icon-tooltip">GitHub</div>
            <a href="https://github.com/jeferventura" rel="_blank">
              <GitHub />
            </a>
          </div>

          <div className="icons-box linkedin">
            <div className="icon-tooltip">LinkedIn</div>
            <a href="https://www.linkedin.com/in/jefersonventura" rel="_blank">
              <LinkedIn />
            </a>
          </div>

          <div className="icons-box whatsapp">
            <div className="icon-tooltip">WhatsApp</div>
            <a href="https://wa.me/5571992647669" rel="_blank">
              <WhatsApp />
            </a>
          </div>

          <div className="icons-box behance">
            <div className="icon-tooltip">Behance</div>
            <a href="https://www.behance.net/jefersonventura" rel="_black">
              <Behance />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
