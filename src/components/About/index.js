import React from 'react';

import { Skills } from  './skills'
import { Carousel } from  './carousel'

import './assets/css/style.min.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about">
                    <div className="about-photo">
                        <figure>
                            <img src="assets/images/about/foto-perfil-frontal.svg" alt="Foto do Perfil" />
                        </figure>
                    </div>
                    <div className="about-information">
                        <div className="about-information-box">
                            <h2 className="section-title">Quem Sou</h2>
                            <p>
                                Nascido na região metropolitana de Salvador, na cidade de Simões Filho - BA, Técnico em TI, estudante de Ciência da Computação, curioso, criativo, observador e focado. SOu extremamente motivado, organizado e estou sempre em constante busca de conhecimento e melhorias em minhas habilidades.
                            </p>
                        </div>
                        <div className="about-information-box">
                            <Skills />
                        </div>
                        <div className="about-information-box">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default About;