import React from "react";
import { Link } from 'wouter';

import Icon from "../../images/Icons/robot-icon.svg";
import MenuIcon from "../../images/Icons/menu-icon.svg";
import "./Menu.scss";

const menuOptions = [
  { label: "Home", href: "#home", isActive: true, router: false },
  { label: "About Us", href: "#about", isActive: false, router: false },
  { label: "Chat", href: "/chat", isActive: false, router: true },
];

const Menu = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <img className="menu-icon" src={MenuIcon} alt="menu-icon" />
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="menu-title" id="offcanvasExampleLabel">
              <img
                src={Icon}
                style={{ marginLeft: "10px" }}
                className="robot-icon"
                alt="robot-icon"
              />
              ADDA CHAT
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {menuOptions.map((option, index) => (
                <li className="nav-item" key={index}>
                  {option.router ? (
                    <Link to={option.href} className={`nav-link ${option.isActive ? "active" : ""}`}>
                      {option.label}
                    </Link>
                  ) : (
                    <a className={`nav-link ${option.isActive ? "active" : ""}`} href={option.href}>
                      {option.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link to="/" className="navbar-brand menu-title">
          ADDA CHAT
          <img
            src={Icon}
            style={{ marginLeft: "10px" }}
            className="robot-icon"
            alt="robot-icon"
          />
        </Link>
        <div></div>
      </div>
    </nav>
  );
};

export default Menu;