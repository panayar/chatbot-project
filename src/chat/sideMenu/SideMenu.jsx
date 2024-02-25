import React from "react";
import Robot from "../../images/robot-figure.svg";
import LogoutICon from "../../images/Icons/logout-icon.svg";
import Icon from "../../images/Icons/robot-icon.svg";

import Navbar from "../navbar/Navbar";
import { Link } from "wouter";

function SideMenu({ handleLogout }) {
  return (
    <aside className="sideMenu">
      <div className="side-menu-icon mb-3">
        <Navbar />
      </div>
      <div className="side-menu-icon mb-3">
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
      </div>
      <img src={Robot} alt="robot-figure" className="robot-figure floating" />
      <div className="side-menu-logout" style={{ marginLeft: "-20px" }}>
        <button className="logout-button" onClick={handleLogout}>
          Cerrar Sesión
          <img src={LogoutICon} alt="logoutIcon" />
        </button>
      </div>
    </aside>
  );
}

export default SideMenu;
