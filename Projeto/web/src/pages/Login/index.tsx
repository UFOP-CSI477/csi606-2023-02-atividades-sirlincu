import React, { useState} from 'react';

import { FormContainer, Form, FormTitle, FormField, Label, Input, SubmitButton } from './styles';
import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    }

    return (
        <>
        <MobileHeader />
        <DesktopHeader />
        <FormContainer>
            <FormTitle>Login</FormTitle>
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <Label>Email:</Label>
                    <Input type="text" value={email} onChange={handleEmailChange} />
                </FormField>
                <FormField>
                    <Label>Password:</Label>
                    <Input type="password" value={password} onChange={handlePasswordChange} />
                </FormField>
                
                <SubmitButton type="submit" value="Submit">Login</SubmitButton>
                {/* <Label><link >Cadastre-se</link></Label> */}

                {/* <link to="/register">Cadastre-se</link> */}
            </Form>
        </FormContainer>
        </>
    );
}

export default LoginPage;