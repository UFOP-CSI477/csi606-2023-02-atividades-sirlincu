import React, { useState } from 'react';

import { FormContainer, Form, FormTitle, FormField, Label, Input, SubmitButton } from './styles';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ successMessage, setSuccessMessage ] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const alunoResponse = await fetch('http://localhost:5000/alunos/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const funcionarioResponse = await fetch('http://localhost:5000/funcionarios/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if(alunoResponse.ok) {
                const aluno = await alunoResponse.json();
                localStorage.setItem('usuario', JSON.stringify(aluno));
                setSuccessMessage('Login efetuado com sucesso');
                window.location.href = '/';
                return;
            } else if (funcionarioResponse.ok) {
                const funcionario = await funcionarioResponse.json();
                localStorage.setItem('usuario', JSON.stringify(funcionario));
                setSuccessMessage('Login efetuado com sucesso');
                window.location.href = '/';
                return;
            } else {
                setErrorMessage('Email ou senha inválidos');
                throw new Error('Email ou senha inválidos');
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <FormContainer>
            <FormTitle>Login</FormTitle>
            <Form onSubmit={handleLogin}>
                <FormField>
                    <Label>Email:</Label>
                    <Input type="text" value={email} onChange={handleEmailChange} />
                </FormField>
                <FormField>
                    <Label>Password:</Label>
                    <Input type="password" value={password} onChange={handlePasswordChange} />
                </FormField>
                
                <SubmitButton type="submit" value="Submit">Login</SubmitButton>
                <Label><Link to="/register">Cadastre-se</Link></Label>
            </Form>

            {errorMessage && <p style={{color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{color: 'green' }}>{successMessage}</p>}
        </FormContainer>
    </>
  );
}

export default Login;