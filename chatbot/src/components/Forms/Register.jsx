import React, { useState } from "react";
import Logo from "../../images/Icons/robot-icon.svg";
import "./Forms.scss";
import { Link, useLocation } from "wouter";
import { useDispatch } from "react-redux";
import { login as setLog } from "../../redux/userSlice";
import FormMenu from "../navBar/FormMenu";

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [creation, setCreation] = useState(false);
  const [, setLocation] = useLocation();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!username) {
      newErrors.username = "Username is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Update errors state
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration successful!");
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);

      createUser(username, email, password);
    }
  };

  const createUser = async (username, email, password) => {
    try {
      const response = await fetch(
        `https://conversemos-backend.onrender.com/user`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("User created successfully:", data);
      setCreation(true);
      setTimeout(() => {
        setLocation("/login");
      }, 2000);
      dispatch(setLog({ isLoggedIn: true }));

      return data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Rethrow the error for higher-level handling
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
                Hello! Register to get <br /> started
              </h2>
            </div>
            <div className="col-12 mt-4">
              {creation && (
                <div className="alert alert-success transition" role="alert">
                  User created successfully!
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {Object.keys(errors).length > 0 && (
                  <div className="alert alert-warning" role="alert">
                    Please correct the following errors:
                    <ul>
                      {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="col-12">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
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
                <div className="col-12">
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
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
              <span className="form-span">
                <Link className="link-text" to="/login">
                  Login Now
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
