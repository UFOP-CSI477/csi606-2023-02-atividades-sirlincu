import React, { FormEvent, useState } from 'react';
import api from '../../services/api';
import Panel from '../Panel';

import { FormContainer, Container } from './styles';

const RegisterCompany: React.FC = () => {
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cnpj, setCnpj ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ setor, setSetor ] = useState('');
    const [ endereco, setEndereco ] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!nome || !setor || !endereco || !telefone || !email) {
            alert('Preencha todos os campos!');
            return;
        };

        const data = {
            nome,
            email,
            cnpj,
            telefone,
            setor,
            endereco
        };

        try {
            await api.post('/empresas', data).then(response => {
                console.log(response);
            });

            alert('Empresa cadastrada com sucesso!');
            window.location.reload();
        } catch (error) {
            alert('Erro ao cadastrar empresa, tente novamente!')
        }
    }
    return (
        <>
        <Panel>
            <Container>
                <FormContainer onSubmit={handleSubmit}>
                    <h2>Registrar Empresa</h2>
                    <label htmlFor='nome'>
                        Nome:
                        <input type="text" id='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                    </label>
                    <label htmlFor='email'>
                        Email:
                        <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor='cnpj'>
                        CNPJ:
                        <input type="text" id='cnpj' value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                    </label>
                    <label htmlFor='telefone'>
                        Telefone:
                        <input type="text" id='telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </label>
                    <label htmlFor='setor'>
                        Setor:
                        <input type="text" id='setor' value={setor} onChange={(e) => setSetor(e.target.value)} />
                    </label>
                    <label htmlFor='endereco'>
                        Endereço:
                        <input type="text" id='endereco' value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </label>
                    <button type="submit">Registrar Empresa</button>
                </FormContainer>
            </Container>
        </Panel>
        </>
    );
}

export default RegisterCompany;