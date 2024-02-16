import React from 'react';

import FeedPost from './FeedPost';

import { Container } from './styles';

const MiddleColumn: React.FC = () => {
  return (
    <Container className="middle-column">
      <FeedPost />
    </Container>
  );
};

export default MiddleColumn;
