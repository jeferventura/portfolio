<<<<<<< HEAD
import React from 'react';
import {FaCodepen, FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram, FaBehance} from 'react-icons/fa';

import './assets/css/style.min.css';

const Footer = () => {

    return (
        <footer>    
            <div className="container">
                <div className="footer-box">
                    <p>Design and developer by Jeferson Ventura</p>
                    <p>&copy;  2022 | Todos os direitos reservados</p>
                </div>
                <div className="footer-box box-icons">
                    <div className="footer-icons-box codepen">
                        <div className="icon-tooltip">
                            Codepen
                        </div>
                        <FaCodepen className="icons"/>
                    </div>

                    <div className="footer-icons-box linkedin">
                        <div className="icon-tooltip">
                            LinkedIn
                        </div>
                        <FaLinkedinIn className="icons" />
                    </div>

                    <div className="footer-icons-box github">
                        <div className="icon-tooltip">
                            GitHub
                        </div>
                        <FaGithub className="icons" />
                    </div>

                    <div className="footer-icons-box whatsapp">
                        <div className="icon-tooltip">
                            WhatsApp
                        </div>
                        <FaWhatsapp className="icons" />
                    </div>

                    <div className="footer-icons-box instagram">
                        <div className="icon-tooltip">
                            Instagram
                        </div>
                        <FaInstagram className="icons" />
                    </div>

                    <div className="footer-icons-box behance">
                        <div className="icon-tooltip">
                            Behance
                        </div>
                        <FaBehance className="icons" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
=======
import React from "react";
import {
  FaCodepen,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

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
          <div className="footer-icons-box codepen">
            <div className="icon-tooltip">Codepen</div>
            <a href="https://codepen.io/jeferventura" rel="_blank">
              <FaCodepen className="icons" />
            </a>
          </div>

          <div className="footer-icons-box linkedin">
            <div className="icon-tooltip">LinkedIn</div>
            <a href="https://www.linkedin.com/in/jefersonventura" rel="_blank">
              <FaLinkedinIn className="icons" />
            </a>
          </div>

          <div className="footer-icons-box github">
            <div className="icon-tooltip">GitHub</div>
            <a href="https://github.com/jeferventura" rel="_blank">
              <FaGithub className="icons" />
            </a>
          </div>

          <div className="footer-icons-box whatsapp">
            <div className="icon-tooltip">WhatsApp</div>
            <a href="https://wa.me/5571992647669" rel="_blank">
              <FaWhatsapp className="icons" />
            </a>
          </div>

          <div className="footer-icons-box behance">
            <div className="icon-tooltip">Behance</div>
            <a href="https://www.behance.net/jefersonventura" rel="_black">
              <FaBehance className="icons" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> b70aabc163db74fa5031d4c57eb245a5aab82f1a
