import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { ImBehance2 } from 'react-icons/im';


export const Agencia = () => {
    return (
        <div className="portfolio-carousel-box" id="agencia">
            <div className="title-carousel-box">
                <p>Site Agência de Viagens <span>| Ficticio |</span></p>
                <div className="icons-carousel-box">
                    <ImBehance2 className="icon" />
                    <FaGithubSquare className="icon" />
                </div>
            </div>
            
        </div>
    );
}

export const Hotel = () => {
    return (
        <div className="portfolio-carousel-box" id="hotel">
            <div className="title-carousel-box">
                <p>Site Hotel <span>| Ficticio |</span></p>
                <div className="icons-carousel-box">
                    <ImBehance2 className="icon" />
                    <FaGithubSquare className="icon" />
                </div>
            </div>
        </div>
    );
}

export const Clinica = () => {
    return (
        <div className="portfolio-carousel-box" id="clinica">
            <div className="title-carousel-box">
                <p>Site Clínica Médica <span>| Ficticio |</span></p>
                <div className="icons-carousel-box">
                    <ImBehance2 className="icon" />
                    <FaGithubSquare className="icon" />
                </div>
            </div>
        </div>
    );
}

