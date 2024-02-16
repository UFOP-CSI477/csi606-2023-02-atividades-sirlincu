import React from 'react';

import { Container } from './styles';
import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
import AdBanner from '../../components/AdBanner';
import ProfileComponent from '../../components/Profile';
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
                <ProfileComponent />
            </main>
            <GlobalStyles />
        </Container>  
  
    );
}

export default Profile;