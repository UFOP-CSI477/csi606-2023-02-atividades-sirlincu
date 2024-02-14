import React from 'react';

import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
import AdBanner from '../../components/AdBanner';
import LeftColumn from '../../components/LeftColumn';
import MiddleColumn from '../../components/MiddleColumn';
import RightColumn from '../../components/RightColumn';
import { Container } from './styles';

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
        </Container>
    );
}

export default Home;