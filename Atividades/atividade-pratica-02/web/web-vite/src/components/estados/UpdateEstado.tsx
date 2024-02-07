import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEstado = () => {

    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        api.get(`/estados/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setSigla(response.data.sigla);
            });
    }, [id]);

    const handleUpdateEstado = async (event : React.FormEvent<HTMLFormElement> ) => {
        
        event.preventDefault();

        if (nome === '' || sigla === '') {
            alert('Preencha todos os campos!');
            return;
        };

        const data = {
            id: parseInt(String(id)),
            nome,
            sigla
        };

        try {
            await api.put('/estados', data)
                .then(response => {
                    console.log(response.data);
            });
                        
            alert('Estado atualizado com sucesso!');
            navigate('/estados');

        } catch (error) {
            console.log(error);
            alert('Erro na atualização do estado!');
        }
    }

    return (
        <div>

            <h3>Atualização do Estado: {nome} - {sigla}</h3>

            <form onSubmit={handleUpdateEstado} >
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

                <button type="submit">Atualizar</button>
                <button type="reset">Cancelar</button>
                <button onClick={() => navigate('/estados')}>Voltar</button>
            </form>
        </div>
    );
}

export default UpdateEstado;