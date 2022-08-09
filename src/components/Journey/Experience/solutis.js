import React from 'react';

import { FaChevronRight } from 'react-icons/fa';

import './assets/css/style.min.css';

export function Solutis(){

    return (
        <div className="company-box">
            <div className="company-header">
                <h4>Assistente de Suporte em TI</h4>
                <p className="company-subtitle">julho de 2021 - Atualmente</p>
            </div>
            <div className="company-description-job">
                <p><FaChevronRight className="icons" /> Atendimento help desk com resolução de problemas. Atendimento via telefone ou remoto</p>
                <p><FaChevronRight className="icons" /> Suporte a sistemas web, configurações de impressoras em rede, diagnósticos e configuração de computadores</p>
                <p><FaChevronRight className="icons" /> Análises de chamados e escalonamentos para grupos solucionadores, instalação de softwares, suporte Microsoft Office, Outlook, IBM Notes</p>
            </div>
        </div>
    );
    
}
