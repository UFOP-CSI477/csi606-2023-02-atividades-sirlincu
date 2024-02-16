import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Panel from '../Panel';

import {
	Container,
	Row,
	Separator,
	Avatar,
	Column
} from './styles';

export interface EmpresaInterface {
	id: number;
	nome: string;
	setor: string;
	endereco: string;
	telefone: string;
	email: string;
}

const FeedPost: React.FC = () => {
  	const [ empresas, setEmpresas ] = useState<EmpresaInterface[]>([]);

  	useEffect(() => {
    	api.get('/empresas').then(response => {
        	setEmpresas(response.data);
		})
  	}, []);

	const handleDelete = async (id: number) => {
		try {
			if(!window.confirm("Deseja realmente excluir esta empresa?")) {
				return;
			}
			await api.delete(`/empresas`, {
				data: {
					id
				}
			});
			const newEmpresas = empresas.filter(empresa => empresa.id !== id);
			setEmpresas(newEmpresas);
			alert('Empresa excluída com sucesso!');
		} catch (error) {
			alert('Erro ao excluir empresa, tente novamente!');
		}
	}

  	return (
    <>
      	{empresas.map(empresa => (
			<Panel>
				<Container>
					<Row className="heading">
						<Avatar src="/company.png" alt={empresa.nome} />
						<Column>
							<h3>{empresa.nome}</h3>
							<h4>{empresa.setor}</h4>
							
							<h5>{empresa.endereco}</h5>
							<h5>{empresa.telefone}</h5>
							<h5>{empresa.email}</h5>
							<button onClick={() => {handleDelete(empresa.id)}}>Excluir</button>
						</Column>
					</Row>
					<Row>
						<Separator />
					</Row>
				</Container>
			</Panel>
      	))}
		
    </>
  );
};

export default FeedPost;
