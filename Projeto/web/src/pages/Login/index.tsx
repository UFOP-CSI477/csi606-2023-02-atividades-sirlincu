import { Container } from './styles';
import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
import Login from '../../components/Login';
import GlobalStyles from '../../styles/GlobalStyles';

const LoginPage: React.FC = () => {
    return (
        <Container>
            <MobileHeader />
            <DesktopHeader />
            <main>
                <Login />
            </main>
            <GlobalStyles />
        </Container>
    );
}

export default LoginPage;