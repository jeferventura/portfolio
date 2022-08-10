import React from 'react';

import { Unifacs } from './unifacs';
import { Tecnicoti } from './ifba';
import { Uxui } from './ux-unicornio';

import './assets/css/style.min.css';

export function Education(){

    return(
        <div className="journey-educaction">
            <div className="education-box">
                <div className="education-box-single">
                    <Unifacs />
                </div>
                <div className="education-box-single">
                    <Tecnicoti />
                </div>
                <div className="education-box-single">
                    <Uxui />
                </div>
            </div>
            <div className="education-box education-box-hidden">
                <div className="education-box-single">
                    <Unifacs />
                </div>
                <div className="education-box-single">
                    <Tecnicoti />
                </div>
                <div className="education-box-single">
                    <Uxui />
                </div>
            </div>
            <div className="buttom-red-More">
                <button className="btn button-show" id="btn-mais"> 
                    Exibe mais
                </button>
                <button className="btn button-hiden" id="btn-menos"> 
                    Exibe menos
                </button>
            </div>
        </div>
    );
}