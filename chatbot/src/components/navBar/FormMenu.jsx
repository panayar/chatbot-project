import React from "react";
import { Link } from "wouter";

import Icon from "../../images/Icons/robot-icon.svg";

const FormMenu = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12 mt-2 text-center">
          <Link to="/" className="navbar-brand menu-title">
            ADDA CHAT
            <img
              style={{ marginLeft: "12px" }}
              src={Icon}
              className="robot-icon"
              alt="robot-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormMenu;
