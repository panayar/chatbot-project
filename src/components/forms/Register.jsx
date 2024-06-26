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
      newErrors.username = "Nombre de usuario requerido";
    }
    if (!email) {
      newErrors.email = "Email requerido";
    }
    if (!password) {
      newErrors.password = "Contraseña requerida";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirma tu contraseña.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    if(password.length < 6){
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    } 
    
    // Update errors state
    setErrors(newErrors);

    console.log("Errors:", newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      createUser(username, email, password);
    }
  };

  const createUser = async (username, email, password) => {
    try {
      const response = await fetch(
        `https://conversemos-back-end.onrender.com/api/user`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        }
      );

      console.log("Response:", response);

      const data = await response.json();

      if (data.message === "User already exists") {
        setErrors({ email: "El usuario ya existe" });
        return;
      }
      if (data.message === "Error creating user") {
        setErrors({ email: "Hubo un error al crear el usuario" });
        return;
      } else {
        console.log("User created successfully:", data);
        setCreation(true);
        setTimeout(() => {
          setLocation("/login");
        }, 2000);
        dispatch(setLog({ isLoggedIn: true }));

        return data;
      }
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
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
                ¡Hola! <br /> Regístrate para comenzar.
              </h2>
            </div>
            <div className="col-12 mt-4">
              {creation && (
                <div className="alert alert-success transition" role="alert">
                  ¡Usuario creado exitosamente!
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {Object.keys(errors).length > 0 && (
                  <div className="alert alert-warning" role="alert">
                    <strong>Error:</strong>
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
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Confirma tu contraseña"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                <div className="col-12 mt-5">
                  <button type="submit" className="form-button">
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
            <p className="form-text">
              ¿Ya tienes una cuenta?
              <span className="form-span ml-3" style={{ marginLeft: "10px" }}>
                <Link className="link-text" to="/login">
                  Iniciar sesión ahora
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
