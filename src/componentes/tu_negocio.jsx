import React from 'react';
import Menu2 from '../componentes/menu2';
import { Link } from 'react-router-dom';

function Tu_negocio(){
  return(
    <div className="row">
    <section>
      <div>
        <div>
          <div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Tu Progreso Mensual</span> </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>Ventas</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Promedio de Clientes</p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "62%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Calificacion</p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "98%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>


                </div>
              </div>
            </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Tu Progreso Anual</span> </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>Ventas </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Promedio de Clientes</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "43%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Calificacion</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tu_negocio;