import React from 'react';
import { 
    FaAngular, 
    FaBootstrap,
    FaSass, 
    FaWordpressSimple, 
    FaReact, 
    FaDocker, 
    FaNodeJs, 
    FaGitSquare, 
    FaElementor
} from 'react-icons/fa'

export function Carousel(){
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h5>Outros conhecimentos e estudando no momento</h5>
            </div>
            <div className="carousel-box scroll-bar-ajustes">
                <div className="carousel-box-single">
                    <FaAngular className="carousel-icons"/>
                </div>  

                <div className="carousel-box-single">
                    <FaBootstrap className="carousel-icons"/>
                </div> 

                <div className="carousel-box-single">
                    <FaSass className="carousel-icons"/>
                </div>

                <div className="carousel-box-single">
                    <FaWordpressSimple className="carousel-icons"/>
                </div>    

                <div className="carousel-box-single">
                    <FaReact className="carousel-icons"/>
                </div>    

                <div className="carousel-box-single">
                    <FaDocker className="carousel-icons"/>
                </div>  

                <div className="carousel-box-single">
                    <FaNodeJs className="carousel-icons"/>
                </div> 

                <div className="carousel-box-single">
                    <FaGitSquare className="carousel-icons"/>
                </div> 

                <div className="carousel-box-single">
                    <FaElementor className="carousel-icons"/>
                </div> 

                <div className="carousel-box-single">
                    <FaNodeJs className="carousel-icons"/>
                </div>                  
            </div>
        </div>
    );
}