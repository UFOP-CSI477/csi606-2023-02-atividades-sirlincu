import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import Panel from '../../Panel';

import {
	Container,
	Row,
	Separator,
	Avatar,
	Column,
	ApplyIcon,
	ShareIcon,
	DetailsIcon,
} from './styles';

export interface VagaInterface {
	id: number;
	titulo: string;
	descricao: string;
	bolsa: number;
	requisitos: string;
	empresa: {
		id: number;
		nome: string;
		setor: string;
};
}

const FeedPost: React.FC = () => {
	const [ vagas, setVagas ] = useState<VagaInterface[]>([]);

	useEffect(() => {
		api.get('/vagas').then(response => {
		setVagas(response.data);
		});
	}, []);

	const handleCandidatura = async (vagaId: number) => {
		try {
			const usuarioLocalString = JSON.parse(localStorage.getItem('usuario') ?? '{}');
			const usuarioLocal = usuarioLocalString ? JSON.parse(usuarioLocalString) : {};

			if(usuarioLocal && usuarioLocal.tipo === 'aluno') {
				await api.post('/candidaturas', { 
					aluno: usuarioLocal.id, 
					vaga: vagaId,
					statusId: 1
				});
				
				const response = await api.get('/vagas');
				setVagas(response.data);
			} else {
				console.log('Usuário não é um aluno ou não está logado.');
			}
		} catch (error) {
			console.log("Erro ao criar candidatura: ", error);
		}
	}

	return (
		<>
			{vagas.map(vaga => (
				<Panel>
					<Container>
						<Row className="heading">
							<Avatar src="https://i.imgur.com/81RtXfT.jpg" alt="Rocketseat" />
							<Column>
								<h3>{vaga.empresa.nome}</h3>
								<time>{vaga.empresa.setor}</time>
							</Column>
						</Row>
						<Row className="body-title">
							<span>{vaga.titulo} • R$ {vaga.bolsa}</span>
						</Row>
						<Row className="body-content">
							<p>{vaga.descricao}</p>
						</Row>
						<Row>
							<Separator />
						</Row>
						<Row className="actions">
							<button onClick={() => handleCandidatura(vaga.id) }>
								<ApplyIcon />
								<span>Candidatar</span>
							</button>
							<Link to={`/vaga/${vaga.id}`}>
								<button>
									<DetailsIcon />
									<span>Detalhes</span>
								</button>
							</Link>
							<Link to={`/vaga/${vaga.id}`}>
								<button>
									<ShareIcon />
									<span>Compartilhar</span>
								</button>
							</Link>
						</Row>
					</Container>
				</Panel>
			))}
		</>
	);
};

export default FeedPost;
