import React from "react";
import { Link } from "wouter";
import Menu from "../components/navBar/Menu";
import ArrowIcon from "../images/Icons/arrow.svg";
import Person1 from "../images/c-icon.png";
import Person2 from "../images/p-icon.png";
import Person3 from "../images/t-icon.png";
import Icon from "../images/Icons/robot-icon.svg";
import Clock from "../images/Icons/clock-icon.svg";
import Arrow from "../images/Icons/half-arrow-icon.svg";
import Robot from "../images/robot.svg";
import "./Home.scss";
import { useSelector } from "react-redux";

const Home = () => {
  const userLog = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="container home" id="home">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <Menu  />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
          <div className="home-square">
            <div>
              <h2 className="home-square-title">
                Adda Chabot <span className="home-square-dot">.</span>
              </h2>
              <p>
                Conoce a nuestro ChatBot de Diagnóstico de Depresión, <br></br>{" "}
                una útil herramienta de salud mental.
              </p>
            </div>

            <div>
              <Link className="link-text" to={userLog ? "/chat" : "/login"}>
                <span className="home-try-it-out">
                  Pruebalo
                  <button className="home-arrow-icon">
                    <img src={ArrowIcon} alt="arrow-icon"></img>
                  </button>
                </span>
              </Link>
            </div>

            <div className="home-team">
              <p>Conoce a nuestro equipo</p>
              <div className="home-team-img">
                <a href="#members">
                  <img src={Person1} alt="person1"></img>
                  <img src={Person2} alt="person2"></img>
                  <img src={Person3} alt="person3"></img>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="home-purple-square">
                <h4> Empezar conversación</h4>
                <div className="robot-section">
                  <img
                    src={Icon}
                    alt="robot-icon"
                    style={{ marginLeft: "2px" }}
                    className="robot-icon"
                  />

                  <p className="text-robot-section">
                    Tiempo de respuesta habitual <br />
                    <span className="text-robot-section-time">
                      <img
                        src={Clock}
                        alt="clock-icon"
                        className="clock-icon"
                        style={{ marginRight: "5px" }}
                      />
                      1-2 minutos
                    </span>
                  </p>
                </div>
                <button className="home-purple-square-button">
                  <Link className="link-text" to={userLog ? "/chat" : "/login"}>
                    Empezar conversación
                  </Link>
                </button>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12 col-sm-12 animated"
              style={{ marginBottom: "100px" }}
            >
              <div className="home-light-square-button">
                <a href="#about" className="link">
                  <h3>Conoce más sobre nuestro proyecto</h3>
                </a>
                <img src={Arrow} alt="arrow" className="arrow-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 d-sm-none d-lg-block">
          <img className="robot-img" src={Robot} alt="robot"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
