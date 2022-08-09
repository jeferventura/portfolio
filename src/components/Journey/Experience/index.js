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
                        <li>
                            <button className="button-show">Solutis</button> 
                        </li>
                        
                        <li>
                            <button className="button-show">Continental</button>
                        </li>

                        <li>
                            <button className="button-show">IMES Faculdade</button>
                        </li>
                        <li>
                            <button className="button-show">AMG Policlínica</button>
                        </li>
                    </div>
                </div>
                <div className="experience-company">
                        <Solutis />
                        <Continental />
                        <Imes />
                        <Amg />
                </div>
            </div>
        </div>
    );
}

