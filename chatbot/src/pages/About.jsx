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
              <span className="about-title">ABOUT US</span>
              <h2>
                Intelligent Conversational System for Emotional Well-being
              </h2>
              <p>
                We've created a chatbot to detect signs of depression and
                provide support. It utilizes advanced technology to interact
                with users in a comprehensive manner and encourage seeking help
                when needed. Our goal is to promote early detection and mental
                health care.
              </p>

              <a href="#accordion">
                <button className="about-button">MORE ABOUT US</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
