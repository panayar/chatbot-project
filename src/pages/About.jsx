import React from "react";
import AboutImage from "../images/about-img.svg";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="container" id="about">
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-6 d-lg-block d-md-none s-sm-none">
            <img src={AboutImage} alt="about-img" className="about-img" />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 about-info">
            <div className="content">
              <span className="about-title">SOBRE NOSOTROS</span>
              <h2>
                Sistema Conversacional Inteligente para el Bienestar Emocional
              </h2>
              <p>
                Hemos creado un chatbot para detectar signos de depresión y
                brindar apoyo. Utiliza tecnología avanzada para interactuar con
                los usuarios de manera integral y fomentar la búsqueda de ayuda
                cuando sea necesario. Nuestro objetivo es promover la detección
                temprana y el cuidado de la salud mental.
              </p>

              <a href="#accordion">
                <button className="about-button">MÁS SOBRE NOSOTROS</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
