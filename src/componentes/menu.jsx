import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i>Mi Propio Jefe</i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Inicio de Sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registro">
                  Regístrate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactanos">
                  Contactanos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre_nosotros">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/perfil">
                  Mi perfil
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="¿Qué deseas ver?"
            aria-label="Search"
          />
          <button type="submit" className="btn btn-dark">
            Buscar
          </button>
        </form>
      </div>
      <div className="p-3">
        <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#aaf0cb" }}>
            <strong>¡Bienvenidos!</strong>
          </div>
          <div className="card-body" style={{ backgroundColor: "#c7f3dc" }}>
            <h4 className="encabezado fst-italic">
              Apoya a los pequeños emprendedores o date a conocer dentro de este mundo
            </h4>
            <p className="card-text">
              En esta página contamos con el apoyo suficiente para destacar a los jóvenes emprendedores o para hacer crecer tu negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;