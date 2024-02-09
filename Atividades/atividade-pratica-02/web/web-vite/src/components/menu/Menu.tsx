import { Link, useLocation } from "react-router-dom";
import './menu.css';

const Menu = () => {
    const location = useLocation();
    const currentPage = getPageName(location.pathname);

    function getPageName(pathname: string) {
        switch (pathname) {
        case "/":
            return "Página Inicial";
        case "/estados":
            return "Estados";
        case "/cidades":
            return "Cidades";
        case "/pessoas":
            return "Pessoas";
        case "/locais":
            return "Locais de Coleta";
        case "/doacoes":
            return "Doações";
        default:
            // Trate outras páginas ou casos
            return "Página Desconhecida";
        }
    }
  
    return(
        <div className="container">
            <div className="logo-container">
                <h2>Aplicação de Controle de Doação de Sangue</h2>
            </div>
            <div className="menu-container">
                <p>{currentPage}</p>
                <ul>
                    {/* <li><Link to="/">Página Inicial</Link></li> */}
                    <li><Link to="/estados">Estados</Link></li>
                    <li><Link to="/cidades">Cidades</Link></li>
                    <li><Link to="/pessoas">Pessoas</Link></li>
                    <li><Link to="/locais">Locais de Coleta</Link></li>
                    <li><Link to="/doacoes">Doações</Link></li>
                </ul>
            </div>
            
        </div>
    );

}

export default Menu;