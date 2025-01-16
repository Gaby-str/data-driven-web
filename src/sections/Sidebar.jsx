import '../styles/Sidebar.css';



function Sidebar(){
    return (
    <div className="sidebar">
        <div class="logo">Dashboards</div>
        <ul>
            <li id="btn-honorarios" class="active"><a><i class="fa-solid fa-money-check-dollar"></i> Gestión Honorarios</a></li>
            <li id="btn-flujo" ><a><i class="fa-solid fa-user-group"></i> Contrataciones</a></li>
            <li id="btn-rentas"><a><i class="fa-solid fa-car"></i> Parking Automático</a></li>
            <li id="btn-inventario"><a><i class="fa-solid fa-box"></i> Estado Financiero</a></li>
            <li id="btn-conciliaciones"><a><i class="fa-solid fa-inbox"></i> Conciliaciones Bancarias</a></li>
            <li id="btn-personal"><a><i class="fa-solid fa-user-tie"></i> Gestión de Personal</a></li>
        </ul>
    </div>
    )
}

export default Sidebar;