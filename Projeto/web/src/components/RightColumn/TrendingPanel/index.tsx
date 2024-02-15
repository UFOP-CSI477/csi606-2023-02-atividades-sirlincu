import React, { useEffect } from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

export interface VagaInterface {
  id: number;
  titulo: string;
  bolsa: number;
  empresa: {
    id: number;
    nome: string;
    setor: string;
  }
}

const TrendingPanel: React.FC = () => {
  const [ vagas, setVagas ] = React.useState<VagaInterface[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/vagas')
      .then(response => response.json())
      .then(data => setVagas(data.slice(-5)));
  }, []);

  return (
    <Container>
      <Panel>
        <span className="title">Vagas</span>

        <ul>
          {vagas.map(vaga => (
            <li key={vaga.id}>
              <span className="bullet" />
              <span className="news">
                <span className="head">{vaga.titulo}</span>
                <span className="subtext">{vaga.empresa.nome} • {vaga.empresa.setor} • R$ {vaga.bolsa}</span>
              </span>

            </li>
          ))}
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
