import React from 'react';

import { Container, Wrapper, UfopIcon, SearchInput, HomeIcon, ProfileCircle, CaretDownIcon, CompanyIcon } from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <div className="left">
                {/* <LinkedInIcon /> */}
                <UfopIcon src="/logo-ufop.png" />
                <SearchInput placeholder="Pesquisar" />
            </div>

            <div className="right">
                <nav>
                    <button className="">
                        <HomeIcon />
                        <span>Início</span>
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