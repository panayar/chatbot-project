import React from "react";
import Logo from "../../images/Icons/robot-icon.svg";
import "./Forms.scss";

const ForgotPass = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="row">
          <div className="col-12">
            <img className="form-icon" src={Logo} alt="Logo" />
            <h2 className="form-title">
              Forgot Password?
            </h2>
            <p className="form-description">Don't worry! It happens. Please enter the email address linked with your account.</p>
          </div>
          <div className="col-12 mt-2">
            <form>
              <div className="col-12">
                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-12 mt-4">
                <button type="submit" className="form-button">
                  Send Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
