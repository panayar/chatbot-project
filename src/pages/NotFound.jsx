import React from "react";
import { Link } from "wouter"; 
import "./NotFound.scss"; 
import Robot from "../images/notFound.png";

function NotFound() {
  return (
<div className="container-notFound" >
  <div className="row justify-content-center">
    <div className="col-md-12 text-center">
      <img
        src={Robot}
        alt="404 Not Found"
        className="img-fluid"
        width={200}
      />
      <h1 className="mt-3">404 - Página no encontrada</h1>
      <p className="lead">¡Oops! La página que estás buscando no existe.</p>
      <Link to="/" className="btn btn-primary btn-primary-nofound">
        Volver a la página de inicio
      </Link>
    </div>
  </div>
</div>

  );
}

export default NotFound;
