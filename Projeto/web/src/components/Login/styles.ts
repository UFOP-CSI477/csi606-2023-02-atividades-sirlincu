import styled from 'styled-components';

export const FormContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin-left: 20%;
    margin-right: 20%;
    width: 40%;
    border: 1px solid var(--color-separator);
    border-radius: 8px;
    background: var(--color-gray-lighter);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
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

    &.register {
        cursor: pointer;
    }
`;

export const Input = styled.input`
    height: 40px;
    border-radius: 4px;
    border: 1px solid var(--color-separator);
    padding: 0 8px;
    background: var(--color-white);
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
