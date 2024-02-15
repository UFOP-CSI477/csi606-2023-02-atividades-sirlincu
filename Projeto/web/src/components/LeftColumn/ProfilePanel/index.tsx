import React from 'react';
import { Link } from 'react-router-dom';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {

  const usuarioLocal = JSON.parse(localStorage.getItem('usuario') || '{}');
  
  const usuarioLogado = !!usuarioLocal;

  const renderProfileContent = () => {
    if (usuarioLogado) {
      if (usuarioLocal.tipo === 'aluno') {
        return (
          <>
            <h1>{usuarioLocal.nome}</h1>
            <h2>{usuarioLocal.curso} - Período {usuarioLocal.periodo}</h2>

            <div className="separator"></div>

            <div className="key-value">
              <span className="key">Candidaturas realizadas</span>
              <span className="value">{usuarioLocal.candidaturasRealizadas}</span>
            </div>
            <div className="key-value">
              <span className="key">Viram sua publicação</span>
              <span className="value">{usuarioLocal.visualizacoes}</span>
            </div>
          </>
        );
      } else if (usuarioLocal.tipo === 'funcionario') {
        return (
          <>
            <h1>{usuarioLocal.nome}</h1>
            <h2>{usuarioLocal.cargo} @ {usuarioLocal.empresa}</h2>

            {/* Outras informações específicas de funcionário, se necessário */}
          </>
        );
      } 
    } else {
        return <h1>Visitante</h1>;
      };
  }



  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <Link to={usuarioLogado ? "/profile" : "/login"} >
          <img
            src="/user.png"
            alt="Avatar"
            className="profile-picture"
          />
        </Link>
        {renderProfileContent()}
        {/* <h1>Lincoln Rebouças</h1>
        <h2>Desenvolvedor Web @ UFOP</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Candidaturas realizadas</span>
          <span className="value">1.558</span>
        </div> */}
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
