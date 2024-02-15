import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  ApplyIcon,
  ShareIcon,
  DetailsIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://i.imgur.com/81RtXfT.jpg" alt="Rocketseat" />
          <Column>
            <h3>Rocketseat</h3>//empresa
            <time>1 sem</time> //criacao
          </Column>
        </Row>
        <Row>
          <Separator />
        </Row>
        <p>TITULO DA VAGA</p>
        
        <PostImage
          src="https://blog.rocketseat.com.br/content/images/2019/05/Painel.png"
          alt="Rocketseat Blog"
        />

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <ApplyIcon />
            <span></span>
          </button>
          <button>
            <DetailsIcon />
            <span></span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
