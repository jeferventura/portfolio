<<<<<<< HEAD
import React from 'react';
import { FaGithubSquare, FaCode } from 'react-icons/fa';
//mport { ImBehance2 } from 'react-icons/im';


export const Agencia = () => {
    return (
        <div className="portfolio-carousel-box" id="agencia">
            <div className="title-carousel-box">
                <p>Site Agência de Viagens <span>| Ficticio |</span></p>
                <div className="icons-carousel-box">
                    <a href="https://github.com/jeferventura/site_AgenciaViagens" rel='_blank'>
                        <FaGithubSquare className="icon" />
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export const Hotel = () => {
    return (
        <div className="portfolio-carousel-box" id="hotel">
            <div className="title-carousel-box">
                <p>Site Hotel <span>| Ficticio |</span></p>
                <div className="icons-carousel-box">
                    <a href="https://github.com/jeferventura/site_Pousada" rel='_blank' >
                        <FaGithubSquare className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export const Clinica = () => {
    return (
        <div className="portfolio-carousel-box" id="clinica">
            <div className="title-carousel-box">
                <p>Site Clínica Médica <span>| Ficticio |</span></p>
                <div className="icons-carousel-box">
                    <a href="https://github.com/jeferventura/siteClinica" rel='_blank' >
                        <FaGithubSquare className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export const Upconsultoria = () => {
    return (
        <div className="portfolio-carousel-box" id="upconsultoria">
            <div className="title-carousel-box">
                <p>Site Institucional <span>| Cliente Freelancer |</span></p>
                <div className="icons-carousel-box">
                    <FaCode className="icon" />
                    <p>Em construção</p>
                </div>
            </div>
        </div>
    );
}



=======
import React from "react";
import { FaGithubSquare, FaCode, FaBehance } from "react-icons/fa";
//mport { ImBehance2 } from 'react-icons/im';

export const Agencia = () => {
  return (
    <div className="portfolio-carousel-box" id="agencia">
      <div className="title-carousel-box">
        <p>
          Site Agência de Viagens <span>| Ficticio |</span>
        </p>
        <div className="icons-carousel-box">
          <a
            href="https://github.com/jeferventura/site_AgenciaViagens"
            rel="_blank"
          >
            <FaGithubSquare className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Hotel = () => {
  return (
    <div className="portfolio-carousel-box" id="hotel">
      <div className="title-carousel-box">
        <p>
          Site Hotel <span>| Ficticio |</span>
        </p>
        <div className="icons-carousel-box">
          <a href="https://github.com/jeferventura/site_Pousada" rel="_blank">
            <FaGithubSquare className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Clinica = () => {
  return (
    <div className="portfolio-carousel-box" id="clinica">
      <div className="title-carousel-box">
        <p>
          Site Clínica Médica <span>| Ficticio |</span>
        </p>
        <div className="icons-carousel-box">
          <a href="https://github.com/jeferventura/siteClinica" rel="_blank">
            <FaGithubSquare className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Beauty = () => {
  return (
    <div className="portfolio-carousel-box" id="beautyidv">
      <div className="title-carousel-box">
        <p>
          Identidade Visual <span>| Cliente Freelancer |</span>
        </p>
        <div className="icons-carousel-box">
          <a
            href="https://www.behance.net/gallery/170482529/Identidade-Visual-Beauty-Royalle-Studio"
            target="_blank"
          >
            <FaBehance className="icon" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export const Upconsultoria = () => {
  return (
    <div className="portfolio-carousel-box" id="upconsultoria">
      <div className="title-carousel-box">
        <p>
          Site Institucional <span>| Cliente Freelancer |</span>
        </p>
        <div className="icons-carousel-box">
          <FaCode className="icon" />
          <p>Em construção</p>
        </div>
      </div>
    </div>
  );
};
>>>>>>> b70aabc163db74fa5031d4c57eb245a5aab82f1a
