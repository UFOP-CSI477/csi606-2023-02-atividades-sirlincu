import { Link } from "react-router-dom";

const Menu = () => {

    return(
        <div>
            <h2>Aplicação de Controle de Doação de Sangue</h2>
            <ul>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/estados">Estados</Link></li>
                <li><Link to="/cidades">Cidades</Link></li>
                <li>Pessoas</li>
                <li>Locais de Coleta</li>
                <li>Doações</li>
            </ul>
        </div>
    );

}

export default Menu;