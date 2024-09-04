import React from "react";
import "../estilos/index.css";
import { Link } from "react-router-dom";

function Init() {
   return (
      <div className="app">
         <header className="header">
            <div className="login-section">
               <h2>Iniciar Sesión</h2>
               <form>
                  <div>
                     <label>Usuario:</label>
                     <input type="text" name="username@gmail.com"></input>
                  </div>
                  <div>
                     <label>Contraseña:</label>
                     <input type="password" name="password"></input>
                  </div>
                  <Link to="/seccion_iniciada">
                     <button type="submit">Iniciar Sesión</button>
                  </Link>
               </form>
            </div>
            <div className="info-section">
               <h2>¿QUÉ ENCONTRARÁS AQUÍ?</h2>
               <p>
                  En nuestra página encontraras distintas maneras y apoyo para hacer.
               </p>
            </div>
         </header>
      </div>
   );
}

export default Init;
