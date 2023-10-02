import React from "react";
import ArrowIcon from "../images/Icons/arrow.svg";
import Person1 from "../images/prs-1.png";
import Person2 from "../images/prs-2.png";
import Person3 from "../images/psr-3.png";
import Icon from "../images/Icons/robot-icon.svg";
import Clock from "../images/Icons/clock-icon.svg";
import Arrow from "../images/Icons/half-arrow-icon.svg";
import Robot from "../images/robot.svg";
import "./Home.scss";
import Menu from "../components/navBar/Menu";

const Home = () => {
  return (
    <>
      <div className="container home" id="home">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <Menu />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <div className="home-square">
              <h2 className="home-square-title">
                Adda Chabot <span className="home-square-dot">.</span>
              </h2>
              <p>
                Meet our Depression Diagnosis ChatBot, a helpful <br></br>{" "}
                mental health tool.
              </p>

              <span className="home-try-it-out">
                Try it out{" "}
                <button className="home-arrow-icon">
                  <img src={ArrowIcon} alt="arrow-icon"></img>
                </button>
              </span>

              <div className="home-team">
                <p>Meet our team</p>
                <div className="home-team-img">
                  <img src={Person1} alt="person1"></img>
                  <img src={Person2} alt="person2"></img>
                  <img src={Person3} alt="person3"></img>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="home-purple-square">
                  <h4>Start Conversation</h4>
                  <div className="robot-section">
                    <img
                      src={Icon}
                      alt="robot-icon"
                      style={{ marginLeft: "2px" }}
                      className="robot-icon"
                    />

                    <p className="text-robot-section">
                      Adda Usual Reply Time <br />
                      <span className="text-robot-section-time">
                        <img
                          src={Clock}
                          alt="clock-icon"
                          className="clock-icon"
                        />
                        1-2 minutes
                      </span>
                    </p>
                  </div>
                  <button className="home-purple-square-button">
                    Send Message to Adda
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 animated">
                <div className="home-light-square-button">
                  <a href="#about" className="link">
                    <h3>Get to know more about our project</h3>
                  </a>
                  <img src={Arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-sm-none d-lg-block">
            <img className="robot-img" src={Robot} alt="robot"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
