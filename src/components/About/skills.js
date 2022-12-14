import React from "react";

export function Skills(){
    return (
        <div className="skills">
            <div className="skills-box"> 
                <div className="skills-box-title">
                    <p>HTML</p>
                    <span>90%</span>
                </div>
                <div className="skills-progress-bar">
                    <span className="progress-bar bar-90"></span>
                </div>
            </div>

            <div className="skills-box"> 
                <div className="skills-box-title">
                    <p>CSS</p>
                    <span>90%</span>
                </div>
                <div className="skills-progress-bar">
                    <span className="progress-bar bar-90"></span>
                </div>
            </div>

            <div className="skills-box"> 
                <div className="skills-box-title">
                    <p>JavaScript</p>
                    <span>83%</span>
                </div>
                <div className="skills-progress-bar">
                    <span className="progress-bar bar-83"></span>
                </div>
            </div>

            <div className="skills-box"> 
                <div className="skills-box-title">
                    <p>React.Js</p>
                    <span>51%</span>
                </div>
                <div className="skills-progress-bar">
                    <span className="progress-bar bar-51"></span>
                </div>
            </div>

            <div className="skills-box"> 
                <div className="skills-box-title">
                    <p>UX & UI Design </p>
                    <span>63%</span>
                </div>
                <div className="skills-progress-bar">
                    <span className="progress-bar bar-63"></span>
                </div>
            </div>
            
        </div>
    );
}