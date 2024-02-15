import React from 'react';

import { Container } from './styles';
import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
import AdBanner from '../../components/AdBanner';
import LeftColumn from '../../components/LeftColumn';
import GlobalStyles from '../../styles/GlobalStyles';

const Profile: React.FC = () => {
  	return (
    	<Container>
            <MobileHeader />
            <DesktopHeader />
            <span>
                <AdBanner />
            </span>
            <main>
                <LeftColumn />    
				<h1>Profile</h1>
            </main>
            <GlobalStyles />
        </Container>  
  
    );
}

export default Profile;