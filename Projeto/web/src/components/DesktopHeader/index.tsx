import React, { useEffect } from 'react';

import { Container, Wrapper, UfopIcon, SearchInput, HomeIcon, ProfileCircle, CaretDownIcon, CompanyIcon } from './styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GlobalStyles from '../../styles/GlobalStyles';

const DesktopHeader: React.FC = () => {
    const location = useLocation();
    const currentPage = getPageName(location.pathname);

    const [ menuOpen, setMenuOpen ] = React.useState(false);
    const [ usuarioLogado, setUsuarioLogado ] = React.useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const usuarioLocal = localStorage.getItem('usuario');
        if(usuarioLocal) {
            setUsuarioLogado(true);
        }
    },[]);

    function getPageName(pathname: string) {
        switch (pathname) {
        case "/":
            return "Página Inicial";
        case "/companies":
            return "Empresas";
        case "/job":
            return "Vaga";
        case "/login":
            return "Página de Login";
        case "/profile":
            return "Página de Perfil";
        case "/register":
            return "Página de Cadastro";
        default:
            // Trate outras páginas ou casos
            return "Página Desconhecida";
        }
    }

    function handleToggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const openMenu = () => {
        setMenuOpen(true);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    function logout() {
        localStorage.removeItem('usuario');
        setUsuarioLogado(false);
        navigate('/login');
    }
    
    return (
        <Container>
            <Wrapper>
                <div className="left">
                    <Link to="/" >
                        <UfopIcon src="/logo-ufop.png" />
                    </Link>
                    <SearchInput placeholder="Pesquisar" />
                </div>
                <div>
                    <h1>{currentPage}</h1>
                </div>
                <div className="right">
                    <nav>
                        <Link to="/">
                            <button className="">
                                    <HomeIcon src="/home.png" />
                                    <span>Início</span>
                            </button>
                        </Link>
                        <Link to="/companies">
                            <button className="">
                                <CompanyIcon src="/company.png" alt="Empresas" />
                                <span>Empresas</span>
                            </button>
                        </Link>
                        
                        <button onClick={handleToggleMenu}>
                            <ProfileCircle src="/user.png" />
                            <span>Eu <CaretDownIcon /></span>
                        </button>
                        {menuOpen && (
                            <div className="dropdown-menu" 
                                onMouseEnter={openMenu}
                                onMouseLeave={closeMenu}     
                            >
                                
                            {usuarioLogado ? (
                                <>
                                    <Link to="/profile">Perfil</Link>
                                    <Link to="/login" onClick={logout} >Sair</Link>
                                </>    
                            ) : (
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Cadastrar</Link>
                                </>   
                            )}
                            </div> 
                        )}
                    </nav>
                </div>
            </Wrapper>
            <GlobalStyles />
        </Container>
    );
};

export default DesktopHeader;