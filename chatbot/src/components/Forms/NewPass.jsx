import React, { useState } from "react";
import Logo from "../../images/Icons/robot-icon.svg";
import "./Forms.scss";
import FormMenu from "../navBar/FormMenu";

const NewPass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(null); 
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError(null); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
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
              <h2 className="form-title">Create new password</h2>
              <p className="form-description">
                Your new password must be unique from those previously used.
              </p>
            </div>
            <div className="col-12 mt-2">
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="alert alert-warning" role="alert">
                    {error}
                  </div>
                )}

                {success ? (
                  <div className="alert  alert-success" role="alert">
                    Password reset successful. <a href="/">Go Back</a>
                  </div>
                ) : (
                  <>
                    <div className="col-12">
                      <input
                        className="form-input"
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        className="form-input"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="form-button">
                        Reset Password
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPass;
