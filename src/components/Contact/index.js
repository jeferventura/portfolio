import React from 'react';

import  {FaInstagram, FaWhatsapp, FaTelegramPlane, FaRegEnvelope, FaCheck } from 'react-icons/fa';
import './assets/css/style.min.css';

const Contact = () => {
    return (
        <section className="contato">
            <div className="container">
                <h2 className="section-title">Contato</h2>
                <div className="icons-contato">
                    <div className="icon-groups">
                        <a href="https://www.instagram.com/jeferventura" target="_blank" rel="noreferrer">
                            <FaInstagram className="icon" /> <p>jeferventura</p>
                        </a>
                    </div>
                    <div className="icon-groups">
                        <a href="mailto:jeferventura@gmail.com"  target="_blank" rel="noreferrer">
                            <FaRegEnvelope className="icon" /> <p>jefersonventura91@gmail.com</p>
                        </a>
                    </div>
                    <div className="icon-groups">
                        <a href="https://wa.me/message/AJJJGGAIOG5PP1" target="_blank" rel="noreferrer">
                            <FaWhatsapp className="icon"  /> <p>+55 71 9 9264-7669</p>
                        </a>
                    </div>
                    <div className="icon-groups"> 
                        <a href="https://t.me/jeferventura" target="_blank" rel="noreferrer">
                            <FaTelegramPlane className="icon" />  <p>+55 71 9 9264-7669</p>
                        </a>
                    </div>
                </div>
                <form className="form-contato" method="post" action="">
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-fields" name="nome" placeholder="Nome" />
                    </div>
                    <div className="form-box-group">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-fields" name="email" placeholder="Seu e-mail" />
                        </div>
                        <div className="form-group">
                            <label>Celular</label>
                            <input type="text" className="form-fields" name="celular" placeholder="(xx) x xxxx-xxxx" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Mensagem</label>
                        <textarea name="mensagem" className="form-fields" placeholder="Digite sua mensagem"></textarea>
                    </div>
                    <div className="form-group align-button">
                        <button type="submit" className="btn"><FaCheck className="icon"/> Enviar </button>
                    </div>
                </form>
            </div>
        </section>
    );
    
}

export default Contact;