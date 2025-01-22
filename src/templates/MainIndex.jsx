
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../sections/Header.jsx'
import Sidebar from '../sections/Sidebar.jsx'
import ConBanc from '../modules/conciliacionesBancarias/pages/ConciliacionesBancarias.jsx'
import ConsultaInformes from '../modules/ConsultaInformes/pages/ConsultaInformes.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function MainIndex() {
  return (
    <div className='MainIndex'>
      <Header />
      <div className='contenedorPrincipal'>
        <BrowserRouter>

          <Sidebar />
          <div className='contenedorApp'>
              <Routes>
                <Route path='/conciliaciones' element={<ConBanc />} />
                <Route path='/informes' element={<ConsultaInformes />} />
              </Routes>
          </div>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default MainIndex;
