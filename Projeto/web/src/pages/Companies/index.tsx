// import React from 'react';

import { Container } from './styles';
import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
import AdBanner from '../../components/AdBanner';
import RegisterCompany from '../../components/RegisterCompany';
import Company from '../../components/Companies';
import GlobalStyles from '../../styles/GlobalStyles';

const Companies: React.FC = () => {
    return (
        <Container>
            <MobileHeader />
            <DesktopHeader />
            <span>
                <AdBanner />
                
            </span>
            <main>
                <div className='middle-column companies-grid'>
                    <Company />
                </div>
                <div className='right-column'>
                    <RegisterCompany />
                </div>
            </main>
            
            <GlobalStyles />
        </Container>
    );
}

export default Companies;