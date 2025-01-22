import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';


//simulacion de consulta a bbdd
const apps = [
    { id: 'btn-honorarios', name: 'Gestión Honorarios', path: '/xd', icon: 'fa-solid fa-money-check-dollar' },
    { id: 'btn-flujo', name: 'Contrataciones', path: '/wenas', icon: 'fa-solid fa-user-group' },
    { id: 'btn-rentas', name: 'Parking Automático', path: '/parking', icon: 'fa-solid fa-car' },
    { id: 'btn-inventario', name: 'Estado Financiero', path: '/finanzas', icon: 'fa-solid fa-box' },
    { id: 'btn-informes', name: 'Consulta de informes', path: '/informes', icon: 'fa-solid fa-user-tie' },
    { id: 'btn-conciliaciones', name: 'Conciliaciones Bancarias', path: '/conciliaciones', icon: 'fa-solid fa-inbox' },
    { id: 'btn-personal', name: 'Gestión de Personal', path: '/personal', icon: 'fa-solid fa-user-tie' },
];


function Sidebar(){
    return (
    <div className="sidebar">
        <div className="logo">Dashboards</div>
        <ul>
            {/*generar los <li> dinamicamente a partir de los datos */}
            {apps.map((app) => (

                /* El navlink con la ruta */
                /* El navlink genera la data con la variable isActive y se la pasa al hijo (elemento li) automaticamente */
                /* Se genera el li con los respectivos datos y si está activo se le da el "active" */
                /* Nota: la clase "noActive" en realidad no existe */

                <NavLink key={app.id} to={app.path}>  

                    {(data) => 
                        (<li id={app.id} className={data.isActive ? "active" : "noActive"}>
                        <i className={app.icon}></i> {app.name}
                        </li>)
                    }
                    
                </NavLink>
            ))}
        </ul>
    </div>
    )
}

export default Sidebar;