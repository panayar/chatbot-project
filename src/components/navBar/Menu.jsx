import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useSelector, useDispatch } from "react-redux";

import Icon from "../../images/Icons/robot-icon.svg";
import MenuIcon from "../../images/Icons/menu-icon.svg";
import { login } from "../../redux/userSlice";
import Modal from "../Modal/Modal";
import "./Menu.scss";

const Menu = () => {
  // Redux
  const [, setLocation] = useLocation();
  const dispatch = useDispatch();

  const userLog = useSelector((state) => state.user.isLoggedIn);
  const log = userLog ? "/chat" : "/login";
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuOptions = [
    { label: "Home", href: "#home", isActive: true, router: false },
    { label: "About Us", href: "#about", isActive: false, router: false },
    { label: "Chat", href: log, isActive: false, router: true },
  ];

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  userLog
    ? menuOptions.push({
        label: "Logout",
        action: handleLogout,
        isActive: false,
        router: false,
      })
    : menuOptions.push({});

  const confirmLogout = () => {
    const isLogged = false;
    setLocation("/");
    // Dispatch login action with token and isLoggedIn
    dispatch(login({ isLogged, token: "" }));
    setShowLogoutModal(false);
  };

  return (
    <>
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
                      <Link
                        onClick={option.action}
                        to={option.href}
                        className={`nav-link ${
                          option.isActive ? "active" : ""
                        } ${option.label === "Logout" ? "text-danger" : ""}`}
                      >
                        {option.label}
                      </Link>
                    ) : (
                      <a
                        onClick={option.action}
                        className={`nav-link ${
                          option.isActive ? "active" : ""
                        }  ${option.label === "Logout" ? "text-danger" : ""}`}
                        href={option.href}
                      >
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

        {/* Modal de logout  */}
        <Modal
          title="Cerrar Sesión"
          body="¿Estás seguro de cerrar sesión?"
          onSave={confirmLogout}
          onCancel={() => setShowLogoutModal(false)}
          show={showLogoutModal}
        />
      </nav>
    </>
  );
};

export default Menu;
