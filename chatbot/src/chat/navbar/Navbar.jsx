import React from "react";
import { Link } from "wouter";
import Icon from "../../images/Icons/robot-icon.svg";

function Navbar() {
  return (
    <nav className="nav-chat">
      <Link to="/" className="navbar-brand menu-title">
        <img style={{ marginLeft: "10px", width: "30px" }} src={Icon} className="robot-icon" alt="robot-icon" />
        Adda Chat
      </Link>
      <button className="new-chat">Beta Version</button>
    </nav>
  );
}

export default Navbar;
