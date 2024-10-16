import React from 'react';
import Menu from '../componentes/menu';
import { Link } from 'react-router-dom';

function Sobre_nosotros(){
  return(
    <div className='Inicio'>
      <Menu />
      <div className="text-center pb-4">
        <h2 className="encabezado mt-3 pt-3">
          <span className="text-primary"><p>Sobre Nosotros</p></span>
        </h2>
        <h2>¿Quienes somos?</h2>
        <p>
          Somos un grupo enfocado en ayudar a los pequeños emprendimientos ya que se ha evidenciado una gran desatencion a la hora de observar el emprendimiento de los jovenes .
        </p>
        <h2>¿Qué queremos lograr?</h2>
        <p>
          Crear un sitio web que ayude a los jovenes que quieran impulsar sus emprendimientos innovadores para que puedan conseguir una ayuda monetaria y asi crecer en el mercado.
        </p>
        <h2>¿Qué hacemos?</h2>
        <p>
          Nos dedicamos a la publicidad y apoyo monetario para los jovenes emprendedores.
        </p>
        <Link to="/seccion_iniciada">
                  <button type="submit" className="btn btn-primary">
                    Volver a inicio
                  </button>
                </Link>
                      
        </div>


      </div>   

  )
}

export default Sobre_nosotros;