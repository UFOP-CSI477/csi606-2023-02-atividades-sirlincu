// import React from 'react';

import { Container } from './styles';
import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
import AdBanner from '../../components/AdBanner';
import LeftColumn from '../../components/LeftColumn';
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
                <LeftColumn />    
                <CCompa>
            </main>
            <GlobalStyles />
        </Container>
    );
}

export default Companies;