import React, { FormEvent, useEffect, useState } from 'react';

import Panel from '../../Panel';

import { Container, FormContainer } from './styles';

import { EmpresaInterface } from '../../Companies';
import api from '../../../services/api';

const FormVaga: React.FC = () => {
	const [ titulo, setTitulo ] = useState('');
	const [ descricao, setDescricao ] = useState('');
	const [ bolsa, setBolsa ] = useState('');
	const [ requisitos, setRequisitos ] = useState('');
	const [ empresaId, setEmpresaId ] = useState('');

	const [ empresas, setEmpresas ] = useState<EmpresaInterface[]>([]);

	useEffect(() => {
		api.get('/empresas').then(response => {
			setEmpresas(response.data);
		});
	}, []);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (titulo === '' || descricao === '' || bolsa === '' || requisitos === '' || empresaId === '0') {
			alert('Preencha todos os campos!');
			return;
		};

		const data = {
			titulo,
			descricao,
			bolsa,
			requisitos,
			empresaId: parseInt(empresaId)
		};

		try {
			await api.post('/vagas', data).then(response => {
				console.log(response);
			});
			alert('Vaga cadastrada com sucesso!');
			window.location.reload();
		} catch (error) {
			alert('Erro ao cadastrar vaga, tente novamente!');
		}
	}

	return (
		<>
		
		<Panel>
			<Container>
				<FormContainer onSubmit={handleSubmit}>
					<h2>Registrar Vaga</h2>
					<label htmlFor='titulo'>
						Titulo:
						<input type="text" id='titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
					</label>
					<label htmlFor='descricao'>
						Descrição:
						<input type="text" id='descricao' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
					</label>
					<label htmlFor='bolsa'>
						Bolsa:
						<input type="text" id='bolsa' value={bolsa} onChange={(e) => setBolsa(e.target.value)} />
					</label>
					<label htmlFor='requisitos'>
						Requisitos:
						<input type="text" id='requisitos' value={requisitos} onChange={(e) => setRequisitos(e.target.value)} />
					</label>
					<label htmlFor='empresaId'>
						Empresa:
						<select name='empresaId' id='empresaId' value={empresaId} onChange={(e) => setEmpresaId(e.target.value)}>
							{empresas.map(empresa => (
								<option key={empresa.id} value={empresa.id}>{empresa.nome}</option>
							))}
						</select>
					</label>
					
					<button type="submit">Registrar Vaga</button>
				</FormContainer>
			</Container>
		</Panel>
		</>
	);
};

export default FormVaga;
