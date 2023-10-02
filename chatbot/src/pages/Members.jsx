import React from "react";
import "./Members.scss";
import Memoji1 from "../images/memoji1.svg";
import Memoji2 from "../images/memoji2.svg";
import Memoji3 from "../images/memoji3.svg";

const Members = () => {
  return (
    <div className="members">
      <div className="container">
        <div className="row">
          <div className="col-md-12 titles">
            <span className="member-subtitle">ABOUT US</span>
            <h1 className="member-title">Members</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={Memoji1} alt="memoji1" className="memoji" />
            <h4 className="member-name">Esteban Cardenas</h4>
            <span className="member-position">Software developer</span>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={Memoji2} alt="memoji2" className="memoji" />
            <h4 className="member-name">Paula Anaya</h4>
            <span className="member-position">Software developer</span>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={Memoji3} alt="memoji3" className="memoji" />
            <h4 className="member-name">Cristian Sanchez</h4>
            <span className="member-position">Software developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
