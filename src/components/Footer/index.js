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