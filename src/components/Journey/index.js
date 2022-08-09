import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

import { Education } from  './Education';
import { Experience }  from  './Experience';

import './assets/css/style.min.css';

const Journey = () => {

    return ( 
        <section>
            <div className="journey container">
                <div className="title">
                    <h2 className="section-title">Minhas Jornadas</h2>
                </div>
                <div className="journey-experience">
                    <div className="title-content">
                        <FaBriefcase className="icons" /> <p>Experiencias Profissionais</p>
                    </div>
                    <div className="journey-content">
                        <Experience />
                    </div>
                </div>
                <div className="journey-education">
                    <div className="title-content">
                        <FaBriefcase className="icons" /> <p>Educação</p>
                    </div>
                    <div className="journey-content">
                        <Education />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Journey;