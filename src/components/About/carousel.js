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
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd } from 'react-icons/si'

export function Carousel(){
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h5>Outros conhecimentos ou estudando no momento</h5>
            </div>
            <div className="carousel-box scroll-bar-ajustes">
                <div className="carousel-box-single">
                    <FaAngular className="carousel-icons"/>
                    <p>Angular</p>
                </div>  

                <div className="carousel-box-single">
                    <FaBootstrap className="carousel-icons"/>
                    <p>Bootstrap</p>
                </div> 

                <div className="carousel-box-single">
                    <FaSass className="carousel-icons"/>
                    <p>Sass</p>
                </div>

                <div className="carousel-box-single">
                    <SiAdobeillustrator className="carousel-icons"/>
                    <p>Illustrator</p>
                </div>  

                <div className="carousel-box-single">
                    <FaWordpressSimple className="carousel-icons"/>
                    <p>Wordpress</p>
                </div>    

                <div className="carousel-box-single">
                    <FaReact className="carousel-icons"/>
                    <p>React.JS</p>
                </div>    

                <div className="carousel-box-single">
                    <FaDocker className="carousel-icons"/>
                    <p>Docker</p>
                </div>  

                <div className="carousel-box-single">
                    <FaNodeJs className="carousel-icons"/>
                    <p>Node.JS</p>
                </div> 

                <div className="carousel-box-single">
                    <FaGitSquare className="carousel-icons"/>
                    <p>Git/Github</p>
                </div> 

                <div className="carousel-box-single">
                    <FaElementor className="carousel-icons"/>
                    <p>Elementor</p>
                </div> 

                <div className="carousel-box-single">
                    <SiAdobephotoshop className="carousel-icons"/>
                    <p>Photoshop</p>
                </div>    

                <div className="carousel-box-single">
                    <SiAdobexd className="carousel-icons"/>
                    <p>Adobe XD</p>
                </div>                  
            </div>
        </div>
    );
}