import React from 'react';

import ProfilePanel from './ProfilePanel';
import FormVaga from './FormVaga';

import { Container } from './styles';

const LeftColumn: React.FC = () => {
  return (
    <Container className="left-column">
      <ProfilePanel />
      <FormVaga />
    </Container>
  );
};

export default LeftColumn;
