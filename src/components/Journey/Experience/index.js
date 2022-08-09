import React from 'react';

//import companys
import  { Solutis } from './solutis'
import  { Amg } from './amg'
import  { Continental } from './continental'
import  { Imes } from  './imes'

import './assets/css/style.min.css';


export function Experience(){

    return(
        <div className="journey-experience">
            <div className="journey-experience-box">
                <div className="experience-menu">
                    <div className="menu-single">   
                        <button className="button-show">Solutis</button> 
                    </div>
                    <div className="menu-single">   
                        <button >Continental</button>
                    </div>
                    <div className="menu-single">   
                        <button >IMES Faculdade</button>
                    </div>
                    <div className="menu-single">   
                        <button >AMG Policlínica</button>
                    </div>
                </div>
                <div className="experience-company">
                    <div className="company-single">
                        <Solutis />
                        <Continental />
                        <Imes />
                        <Amg />
                    </div>
                </div>
            </div>
        </div>
    );
}

