import React  from 'react';

import { FaChevronRight } from 'react-icons/fa';

import './assets/css/style.min.css';

export function Continental (){
    
    return (
        <div className="company-box">
            <div className="company-header">
                <h4>Estagiário de TI</h4>
                <p className="company-subtitle">julho de 2019 - julho de 2021</p>
            </div>
            <div className="company-description-job">
                <p><FaChevronRight className="icons" /> Atendimento com suporte em TI, resolução de problemas, presencial e remoto</p>
                <p><FaChevronRight className="icons" /> Impressoras industriais (Zebra Print), Coletores Mobile</p>
                <p><FaChevronRight className="icons" /> Criação de usuários de Redes(IAM) gerenciamento de usuários e equipamentos (AD)</p>
                <p><FaChevronRight className="icons" /> Configurações e instalação de impressoras em rede, configuração e manutenção de computadores</p>
                <p><FaChevronRight className="icons" /> Suporte e monitoramento de sistemas, VPN, TCP/IP, Vital QIP</p>
                <p><FaChevronRight className="icons" /> Controle de equipamentos de TI. Instalação de softwares, Microsoft Office, Outlook, IBM Notes</p>
                <p><FaChevronRight className="icons" /> Suporte a telefonia VOIP (AVAYA Softphone)</p>
            </div>
        </div>
    );
    
}
