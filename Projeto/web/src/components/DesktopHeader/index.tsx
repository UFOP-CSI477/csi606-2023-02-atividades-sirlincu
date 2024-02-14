// import React from 'react';

import { Container, Wrapper, UfopIcon, SearchInput, HomeIcon, ProfileCircle, CaretDownIcon, CompanyIcon } from './styles';
import { Link } from 'react-router-dom';


const DesktopHeader: React.FC = () => {
    
    return (
        <Container>
            <Wrapper>
                <div className="left">
                    <UfopIcon src="/logo-ufop.png" />
                    <SearchInput placeholder="Pesquisar" />
                </div>
                <div>
                    {/* <h1>{currentPage}</h1> */}
                </div>
                <div className="right">
                    <nav>
                        <button className="">
                            <HomeIcon />
                            <span><Link to="/">Início</Link></span>
                        </button>
                        <button className="active">
                            <CompanyIcon src="/company.png" alt="Empresas" />
                            <span>Empresas</span>
                        </button>
                        <button>
                            <ProfileCircle src="/user.png" />
                            <span>Eu <CaretDownIcon /></span>
                        </button>
                    </nav>
                </div>
            </Wrapper>

        </Container>
    );
};

export default DesktopHeader;