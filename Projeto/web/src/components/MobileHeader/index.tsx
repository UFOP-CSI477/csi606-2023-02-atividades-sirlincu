import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
    return (
        <Container>
            <ProfileCircle src="/user.png" />
            <SearchInput placeholder="Pesquisar" /> {/* // Add the placeholder prop with the correct type declaration */}
            <MessageIcon />
        </Container>
    );
};

export default MobileHeader;