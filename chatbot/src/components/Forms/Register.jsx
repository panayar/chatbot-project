import React from "react";
import Logo from "../../images/Icons/robot-icon.svg";
import "./Forms.scss";

const Register = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="row">
          <div className="col-12">
            <img className="form-icon" src={Logo} alt="Logo" />
            <h2 className="form-title">
              Hello! Register to get <br /> started
            </h2>
          </div>
          <div className="col-12 mt-4">
            <form>
              <div className="col-12">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="col-12">
                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="col-12">
                <input
                  className="form-input"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="col-12">
                <input
                  className="form-input"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
              <div className="col-12 mt-5">
                <button type="submit" className="form-button">
                  Register
                </button>
              </div>
            </form>
          </div>
          <p className="form-text">
            Already have an account?{" "}
            <span className="form-span">Login Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
