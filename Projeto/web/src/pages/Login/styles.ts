import styled from 'styled-components';

export const LinkTo = styled.link`
    color: var(--color-link);
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
`;

export const FormContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
`;

export const FormTitle = styled.h2`
    font-size: 24px;
    color: var(--color-black);
    margin-bottom: 16px;
    text-align: center;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const Label = styled.label`
    font-size: 14px;
    color: var(--color-gray);
    margin-bottom: 8px;
`;

export const Input = styled.input`
    height: 40px;
    border-radius: 4px;
    border: 1px solid var(--color-separator);
    padding: 0 8px;
`;

export const SubmitButton = styled.button`
    height: 40px;
    border-radius: 4px;
    border: none;
    background: var(--color-link);
    color: var(--color-white);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`;