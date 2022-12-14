import React from "react";

import { Agencia, Hotel, Clinica, Upconsultoria } from "./Jobs/carousel";

//import "./assets/css/style.min.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <div className="container">
          <h2 className="section-title">Portfólio</h2>
          <div className="portfolio-carousel scroll-bar-ajustes">
            <Agencia />
            <Hotel />
            <Clinica />
            <Upconsultoria />
          </div>
        </div>
      </div>
      <div className="format-bg"></div>
    </section>
  );
};

export default Portfolio;
