import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
          <img
            src="/user.png"
            alt="Avatar"
            className="profile-picture"
          />
        <h1>Lincoln Rebouças</h1>
        <h2>Desenvolvedor Web @ UFOP</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Candidaturas realizadas</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
