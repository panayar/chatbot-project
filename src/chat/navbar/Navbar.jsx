import React from "react";
import { Link } from "wouter";
import Icon from "../../images/Icons/robot-icon.svg";

function Navbar({ handleClick }) {
  return (
    <nav className="nav-chat">
      <Link to="/" className="navbar-brand menu-title">
        <img
          style={{ marginLeft: "10px", width: "30px" }}
          src={Icon}
          className="robot-icon"
          alt="robot-icon"
        />
        Adda Chat
      </Link>
      <button className="btn-badge">Beta Version</button>

      <div className="mt-3 menu-options d-flex justify-content-center flex-wrap">
        <button
          onClick={() => handleClick({ option: "conversational" })}
          className="btn btn-success menu-option"
          style={{ marginRight: "5px" }}
        >
          Conversacional
        </button>
        <button
          onClick={() => handleClick({ option: "informative" })}
          className="btn btn-primary menu-option ml-3"
        >
          Informativo
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
