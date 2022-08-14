import React from 'react';

import { FaChevronRight } from 'react-icons/fa';

import './assets/css/style.min.css';

export  function Imes (){

        return (
            <div className="company-box">
                <div className="company-header">
                    <h4>Assistente Adminstrativo e Financeiro</h4>
                    <p className="company-subtitle">Abril de 2016 - Junho de 2019</p>
                </div>
                <div className="company-description-job">
                    <p><FaChevronRight className="icons" /> Controle financeiro empresarial, negociação de dividas, emissão e controle de cobranças</p>
                    <p><FaChevronRight className="icons" /> Suporte a sistemas educacionais, instrutor de treinamentos de informática e sistemas AVA</p>
                    <p><FaChevronRight className="icons" /> Administração e controles de acesso Moodle. Suporte acadêmico, atendimento a alunos e professores</p>
                    <p><FaChevronRight className="icons" /> Emissão e controle de documentos acadêmicos e financeiros.</p>
                </div>
            </div>
        );
    }
