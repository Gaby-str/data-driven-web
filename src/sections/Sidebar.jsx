import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import React, { useState } from 'react';


//simulacion de consulta a bbdd
const apps = [
    { id: 'btn-honorarios', name: 'Gestión Honorarios', path: '/honorarios', icon: 'fa-solid fa-money-check-dollar' },
    { id: 'btn-flujo', name: 'Contrataciones', path: '/contrataciones', icon: 'fa-solid fa-user-group' },
    { id: 'btn-rentas', name: 'Parking Automático', path: '/parking', icon: 'fa-solid fa-car' },
    //{ id: 'btn-inventario', name: 'Estado Financiero', path: '/finanzas', icon: 'fa-solid fa-box' },
    { id: 'btn-informes', name: 'Consulta de informes', path: '/informes', icon: 'fa-solid fa-user-tie' },
    { id: 'btn-conciliaciones', name: 'Conciliaciones Bancarias', path: '/conciliaciones', icon: 'fa-solid fa-inbox' },
    //{ id: 'btn-personal', name: 'Gestión de Personal', path: '/personal', icon: 'fa-solid fa-user-tie' },
];


function Sidebar(){
  const isMovile = (window.innerHeight/window.innerWidth>1); //si al ancho es menor al alto, quiere decir que es un dispositivo movil
  //si es un dispositivo movil, entonces el sidebar comienza en estado no expandido
  const [expanded, setExpanded] = useState(!isMovile) //para controlar la expansion del sidebar
  //console.log(!(window.innerHeight/window.innerWidth>1))
  console.log(process.env.REACT_APP_PDF_PATH)

  return (
  <div className="sidebar">
    <nav className='flex flex-col'>

      <div className="logo p-4 pb-2 flex justify-between items-center">
        <p className={`overflow-hidden transition-all ${expanded ? "w-20": "w-0"}`}>Logo</p>
        <button className='w-16' onClick={() => setExpanded(curr => !curr)}>
          <i className='fa-solid fa-box' />
        </button>
      </div>

      <ul className={`flex-l px-3 ${expanded ? "": "px-0"}`}>
        {/*generar los <li> dinamicamente a partir de los datos */}
        {apps.map((app) => (

          /* El navlink con la ruta */
          /* El navlink genera la data con la variable isActive y se la pasa al hijo (elemento li) automaticamente */
          /* Se genera el li con los respectivos datos y si está activo se le da el "active" */
          /* Nota: la clase "noActive" en realidad no existe */

          <NavLink className='navl' key={app.id} to={app.path}>  

            {(data) => 
              (<li id={app.id} className={data.isActive ? "active" : "noActive"}>
              <i className={app.icon}></i>
              <p className={`overflow-hidden transition-all ${expanded ? "": "w-0 h-0"}`}>{app.name}</p>
              </li>)
            }
            
          </NavLink>
        ))}
      </ul>
    </nav>
  </div>
  )
}

export default Sidebar;