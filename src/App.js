import Error404 from 'contenedores/errores/error404';
import Home from 'contenedores/paginas/home';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from 'store';
import Nosotros from 'contenedores/paginas/nosotros'
import Servicios from 'contenedores/paginas/servicios'
import Contacto from 'contenedores/paginas/contacto'


function App() {
  return (
    <Provider store={store}>
      <Router>
     <Routes>
      {/*error pagina no encontrada*/}
      <Route  path='*' element={<Error404/>}/>
      {/*pagina de inicio*/}
      <Route  path='/' element={<Home/>}/>
      {/*pagina de nosotros*/}
      <Route  path='/nosotros' element={<Nosotros/>}/>
      {/*pagina de los cortes*/}
      <Route  path='/servicios' element={<Servicios/>}/>
      {/*pagina de contacto*/}
      <Route  path='/contacto' element={<Contacto/>}/>
     </Routes>
    </Router>
    </Provider>
  );
}

export default App;
