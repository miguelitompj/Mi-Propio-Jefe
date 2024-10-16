import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Login from './paginas/login'; 
import Contactanos from './paginas/contactanos';
import Perfil_l from './paginas/perfil';
import Registro_usuario from './componentes/registro_usuario';
import Seccion_iniciada from './paginas/seccion_iniciada';
import Sobre_nosotros from './componentes/sobre_nosotros';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/registro' element={<Registro_usuario/>} />
        <Route exact path='/contactanos' element={<Contactanos />} />
        <Route exact path='/perfil' element={<Perfil_l />} />
        <Route exact path='/seccion_iniciada' element={<Seccion_iniciada />} />
        <Route exact path='/sobre_nosotros' element={<Sobre_nosotros />} />
      </Routes>
    </Router>
  );
}
