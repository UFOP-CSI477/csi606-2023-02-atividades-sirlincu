import React from 'react';

import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
import AdBanner from '../../components/AdBanner';
import LeftColumn from '../../components/LeftColumn';
import MiddleColumn from '../../components/MiddleColumn';
import RightColumn from '../../components/RightColumn';
import { Container } from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

const Home: React.FC = () => {
    return (
        <Container>
            <MobileHeader />
            <DesktopHeader />

            <span>
                <AdBanner />
            </span>
            <main>
                <LeftColumn />
                <MiddleColumn />
                <RightColumn />
            </main>
            <GlobalStyles />
        </Container>
    );
}

export default Home;