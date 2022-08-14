import React from 'react';

import { FaChevronRight } from 'react-icons/fa';

import './assets/css/style.min.css';

export function Amg(){

    return (
        <div className="company-box">
            <div className="company-header">
                <h4>Assistente Administrativo - Saúde Ocupacional</h4>
                <p className="company-subtitle">Março de 2014 - Março de 2016</p>
            </div>
            <div className="company-description-job">
                <p><FaChevronRight className="icons" /> Emissão e controle de ASO (Atestado de Saúde Ocupacional)</p>
                <p><FaChevronRight className="icons" /> Controle e liberação exames de empresas, e PCMSO (programa de controle médico ocupacional)</p>
            </div>
        </div>
    );
}
