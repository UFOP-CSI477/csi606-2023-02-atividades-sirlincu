import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { EstadoInterface } from "../estados/ListEstados";

const CreateCidade = () => {

    const [ nome, setNome ] = useState('');
    const [ estadoId, setEstadoId ] = useState(0);

    const [ estados, setEstados ] = useState<EstadoInterface[]>([]);

    useEffect(() => {
        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })
        
    }, []);

    const navigate = useNavigate();

    const handleNewCidade = async (event : React.FormEvent<HTMLFormElement> ) => {
        
        event.preventDefault();

        if (nome === '' || estadoId === 0) {
            alert('Preencha todos os campos!');
            return;
        };

        const data = {
            nome,
            estado_id: estadoId
        };

        try {
            await api.post('/cidades', data)
                .then(response => {
                    console.log(response.data);
            });
                        
            alert('Cidade cadastrada com sucesso!');
            navigate('/cidades');

        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar a cidade!');
        }
    }

    return (
        <div>

            <h3>Cadastro de Cidade: {nome} - {estadoId}</h3>

            <form onSubmit={handleNewCidade} >
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" 
                        name="nome" value={nome} 
                        onChange={e => setNome(e.target.value) } />
                </div>

                <div>
                    <label htmlFor="estadoId">Estado: </label>
                    <select name="estadoId" id="estadoId" onChange={ e=> setEstadoId( parseInt(e.target.value)) } >
                        <option value="0" selected>Selecione: </option>

                        {
                            estados.map(estado => (
                                <option key={estado.id} value={estado.id}>{estado.nome}</option>
                            ))
                        }

                        </select>
                </div>

                <button type="submit">Salvar</button>
                <button type="reset">Cancelar</button>
                <button onClick={() => navigate('/estados')}>Voltar</button>
            </form>
        </div>
    );
}

export default CreateCidade;