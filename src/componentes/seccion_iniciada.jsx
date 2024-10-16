import Menu from '../componentes/menu2';
import { Link } from 'react-router-dom';

function Seccion_iniciada() {
  return (
    <div className='Inicio'>
      <Menu />
      <div className="text-center pb-4">
        <h2 className="encabezado mt-3 pt-3">
          <span className="text-primary"><p>¡Bienvenido!</p></span>
        </h2>
        <h2>¡Bienvenido a Mi Propio Jefe!</h2>
        <p>
          En esta página encontraras distintas maneras y apoyo para hacer crecer tu negocio y ser el mejor del mercado.
        </p>
        
        <Link to="/some-route">Learn More</Link> 
      </div>
    </div>
  );
}

export default Seccion_iniciada;