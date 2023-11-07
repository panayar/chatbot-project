import React, { useState } from "react";
import { Link } from "wouter";
import { useDispatch } from "react-redux";
import { login as setLog} from "../../redux/userSlice";

import Logo from "../../images/Icons/robot-icon.svg";
import FormMenu from "../navBar/FormMenu";
import "./Forms.scss";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsAlertVisible(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsAlertVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setIsAlertVisible(true);
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    login({ email, password });
  };

  const login = async (userData) => {
    try {
      const response = await fetch(
        "https://conversemos-backend.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      dispatch(setLog({ isLoggedIn: true, token: data.token }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormMenu />
      <div className="cont-form">
        <div className="form-container">
          <div className="row">
            <div className="col-12">
              <img className="form-icon" src={Logo} alt="Logo" />
              <h2 className="form-title">
                Welcome back! Glad <br /> to see you, Again!
              </h2>
            </div>
            <div className="col-12 mt-4">
              <form onSubmit={handleSubmit}>
                {isAlertVisible && (
                  <div className="alert alert-danger transition" role="alert">
                    Please enter both email and password.
                  </div>
                )}
                <div className="col-12">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="col-12 mt-5">
                  <button type="submit" className="form-button">
                    Login
                  </button>
                </div>
              </form>
              <p className="form-text">
                <Link className="link-text" to="/forgotpass">
                  Forgot your password?
                </Link>{" "}
              </p>
            </div>
            <p className="form-text">
              Don't you have an account?{" "}
              <span className="form-span">
                <Link className="link-text" to="/register">
                  Register now
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
