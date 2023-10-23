import React, { useState } from "react";
import Logo from "../../images/Icons/robot-icon.svg";
import "./Forms.scss";
import FormMenu from "../navBar/FormMenu";
import { Link } from "wouter";

const VerifyOTPCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!code) {
      setError("Please enter the OTP code.");
      return;
    }

    // Replace this with your code to verify the OTP code.
    // If the code is valid, setSuccess(true); otherwise, set an error message.

    // Example: Replace this with your code for verifying the OTP code.
    const isValidCode = true; // Replace with your actual code validation logic.

    if (isValidCode) {
      setSuccess(true);
    } else {
      setError("Invalid OTP code. Please try again.");
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
              <h2 className="form-title">Verify OTP Code</h2>
              <p className="form-description">
                Please enter the OTP code sent to your email.
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
                    OTP code verified successfully.
                  </div>
                )}
                <div className="col-12">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Enter OTP code"
                    value={code}
                    onChange={handleCodeChange}
                  />
                </div>
                <div className="col-12 mt-4">
                  {success ? (
                    <button className="form-button">
                      {" "}
                      <Link className="link-text" to="/newpass"> Continue</Link>
                    </button>
                  ) : (
                    <button type="submit" className="form-button">
                      Verify Code
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

export default VerifyOTPCode;
