import React from "react";
import Icon from "../../images/Icons/robot-icon.svg";
import MenuIcon from "../../images/Icons/menu-icon.svg";
import "./Menu.scss";

const Menu = () => {
  return (
    <nav className="navbar fixed-top">
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
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="menu-title" id="offcanvasExampleLabel">
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a className="navbar-brand menu-title" href="/">
          ADDA CHAT
          <img src={Icon} className="robot-icon" alt="robot-icon" />
        </a>
        <div></div>
      </div>
    </nav>
  );
};

export default Menu;
