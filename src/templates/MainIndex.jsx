
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../sections/Header.jsx'
import Sidebar from '../sections/Sidebar.jsx'
import Empty from '../sections/Empty.jsx'

function MainIndex() {
  return (
    <div className='MainIndex'>
      <Header />
      <div className='contenedorPrincipal'>
        <BrowserRouter>

          <Sidebar />
          <div className='contenedorApp'>
              <Routes>
                <Route path='/' element={<Empty />} />
                <Route path='/xd' element={<p> wenas </p>} />
              </Routes>
          </div>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default MainIndex;
