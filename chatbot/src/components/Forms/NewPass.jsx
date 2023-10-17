import React from "react";
import Logo from "../../images/Icons/robot-icon.svg";
import "./Forms.scss";

const NewPass = () => {
  return (
    <div className="container">
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
            <form>
              <div className="col-12">
                <input
                  className="form-input"
                  type="password"
                  placeholder="New Password"
                />
              </div>
              <div className="col-12">
                <input
                  className="form-input"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="col-12 mt-4">
                <button type="submit" className="form-button">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPass;
