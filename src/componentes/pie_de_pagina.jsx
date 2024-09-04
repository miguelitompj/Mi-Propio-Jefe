import React from "react"
import { Link } from "react-router-dom"
import Designer from '../imagenes/dioss.jpeg'

function pie_de_pagina() {
  return (
    <div className="footer">
      <div className="container fluid">
        <div className="row mx-auto">
          <div className="text center mx-auto">
            <h2 className="encabezado mt-3">Trabaja en la salle</h2>
            <img src={Designer} alt="imagen" width={300}/>
            <h4 className="encabezado">
              ¿Eres emprendedor? presenta tu emprendimiento para recibir el apoyo necesario para darte a conocer en el mercado
            </h4>
            <p className="px-3">
              <small>
                Click aqui
              </small>
            </p>
            <section className="text-center pb-4">
              <Link to="" className="btn btn-primary">¡Comencemos!</Link>
            </section>
          </div>
          <div className="text-center mx-auto">
            <h2 className="encabezado mt-3 pt-3">
              <strong>
              <span className="text-primary">¡ Todos somos uno !</span>
              </strong>
            </h2>
            <p className="px-3">
              <small>
                  Sumergete en el mundo de los emprendedores y aprende a ser el mejor.
              </small>
            </p>
            <section className="text-center pb-4">
              <Link to="" className="btn btn-primary">
                Instalar app
              </Link>
            </section>
            <div id="copyright">
              <hr/>
              <p><small>La Salle 2024. Todos los derechos reservados</small></p>
          </div>
        </div> 
      </div>  
    </div>
  </div> 
  );
}

export default pie_de_pagina;