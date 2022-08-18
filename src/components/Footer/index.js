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
                        <a href="https://codepen.io/jeferventura" target="_blank" rel="noopener noreferrer"><FaCodepen className="icons"/></a>
                    </div>

                    <div className="footer-icons-box linkedin">
                        <div className="icon-tooltip">
                            LinkedIn
                        </div>
                        <a href="https://www.linkedin.com/in/jefersonventura" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="icons" /></a>
                    </div>

                    <div className="footer-icons-box github">
                        <div className="icon-tooltip">
                            GitHub
                        </div>
                        <a href="https://github.com/jeferventura/" target="_blank" rel="noopener noreferrer"> <FaGithub className="icons" /></a>
                    </div>

                    <div className="footer-icons-box whatsapp">
                        <div className="icon-tooltip">
                            WhatsApp
                        </div>
                        <a href="https://wa.me/message/AJJJGGAIOG5PP1" target="_blank" rel="noopener noreferrer" ><FaWhatsapp className="icons" /></a>
                    </div>

                    <div className="footer-icons-box instagram">
                        <div className="icon-tooltip">
                            Instagram
                        </div>
                        <a href="https://www.instagram.com/jeferventura" target="_blank" rel="noopener noreferrer" ><FaInstagram className="icons" /></a>
                    </div>

                    <div className="footer-icons-box behance">
                        <div className="icon-tooltip">
                            Behance
                        </div>
                        <a href="https://behance.net/jefersonventura/" target="_blank" rel="noopener noreferrer" ><FaBehance className="icons" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;