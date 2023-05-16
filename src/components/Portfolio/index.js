import React from "react";

<<<<<<< HEAD
import { Agencia, Hotel, Clinica, Upconsultoria } from "./Jobs/carousel";

//import "./assets/css/style.min.css";
=======
import {
  Agencia,
  Hotel,
  Clinica,
  Upconsultoria,
  Beauty,
} from "./Jobs/carousel";

import "./assets/css/style.min.css";
>>>>>>> b70aabc163db74fa5031d4c57eb245a5aab82f1a

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
<<<<<<< HEAD
=======
            <Beauty />
>>>>>>> b70aabc163db74fa5031d4c57eb245a5aab82f1a
          </div>
        </div>
      </div>
      <div className="format-bg"></div>
    </section>
  );
};

export default Portfolio;
