import React from 'react';

import { Container } from './styles';
import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
// import Register from '../../components/Register';
import GlobalStyles from '../../styles/GlobalStyles';

const Register: React.FC = () => {
  	return (
    	<Container>
            <MobileHeader />
            <DesktopHeader />
            <main>
				<h1>Register</h1>
                {/* <Register /> */}
            </main>
            <GlobalStyles />
    	</Container>
    );
}

export default Register;