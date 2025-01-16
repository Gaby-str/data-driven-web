import logo from '../assets/images/sf_logo.png';
import '../styles/Header.css';

function Header(){
    return (
    <div className="topbar">
        <img className="topbar-logo" src={logo} alt="Logo Institucional" />
        <h1 className="topbar-title">Data Driven</h1>
        <div className="topbar-user-menu">
            <button className="user-button">Usuario</button>
            <div className="user-dropdown" id="userDropdown">
                <a href="#">Perfil</a>
                <a href="#">Cerrar Sesión</a>
            </div>
        </div>
    </div>
    )
}

export default Header;