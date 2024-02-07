import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateEstado = () => {

    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');
    const navigate = useNavigate();

    const handleNewEstado = async (event : React.FormEvent<HTMLFormElement> ) => {
        
        event.preventDefault();

        if (nome === '' || sigla === '') {
            alert('Preencha todos os campos!');
            return;
        };

        const data = {
            nome,
            sigla
        };

        try {
            await api.post('/estados', data)
                .then(response => {
                    console.log(response.data);
            });
                        
            alert('Estado cadastrado com sucesso!');
            navigate('/estados');

        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar o estado!');
        }
    }

    return (
        <div>

            <h3>Cadastro de Estado: {nome} - {sigla}</h3>

            <form onSubmit={handleNewEstado} >
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" 
                        name="nome" value={nome} 
                        onChange={e => setNome(e.target.value) } />
                </div>

                <div>
                    <label htmlFor="sigla">Sigla: </label>
                    <input type="text" id="sigla" 
                        name="sigla" value={sigla} 
                        onChange={e => setSigla(e.target.value) } />
                </div>

                <button type="submit">Salvar</button>
                <button type="reset">Cancelar</button>
                <button onClick={() => navigate('/estados')}>Voltar</button>
            </form>
        </div>
    );
}

export default CreateEstado;