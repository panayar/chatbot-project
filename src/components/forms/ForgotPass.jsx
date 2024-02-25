import React, { useState } from "react";
import Logo from "../../images/Icons/robot-icon.svg";
import "./Forms.scss";
import FormMenu from "../navBar/FormMenu";
import { Link } from "wouter";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setSuccess(true);
  };

  return (
    <>
      <FormMenu />
      <div className="cont-form">
        <div className="form-container">
          <div className="row">
            <div className="col-12">
              <img className="form-icon" src={Logo} alt="Logo" />
              <h2 className="form-title">Forgot Password?</h2>
              <p className="form-description">
                Don't worry! It happens. Please enter the email address linked
                with your account.
              </p>
            </div>
            <div className="col-12 mt-2">
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="alert  alert-success" role="alert">
                    Reset code sent successfully to your email.
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
                <div className="col-12 mt-4">
                  {success ? (
                    <button className="form-button">
                      {" "}
                      <Link className="link-text" to="/verifyOTP"> Check OTP Code</Link>
                    </button>
                  ) : (
                    <button type="submit" className="form-button">
                      Send Code
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
