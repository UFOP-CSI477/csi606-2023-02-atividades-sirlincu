import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { EstadoInterface } from "../estados/ListEstados";

const UpdateCidade = () => {

    const [ nome, setNome ] = useState('');
    const [ estadoId, setEstadoId ] = useState(0);

    const [ estados, setEstados ] = useState<EstadoInterface[]>([]);

    const { id } = useParams();

    useEffect(() => {
        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);

    useEffect(() => {
        api.get(`/cidades/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setEstadoId(response.data.estado_id);
            });
    }, [id]);

    const navigate = useNavigate();

    const handleUpdateCidade = async (event : React.FormEvent<HTMLFormElement> ) => {
        
        event.preventDefault();

        if (nome === '' || estadoId === 0) {
            alert('Preencha todos os campos!');
            return;
        };

        const data = {
            id,
            nome,
            estado_id: estadoId
        };

        try {
            await api.put('/cidades', data)
                .then(response => {
                    console.log(response.data);
            });
                        
            alert('Cidade atualizada com sucesso!');
            navigate('/cidades');

        } catch (error) {
            console.log(error);
            alert('Erro ao atualizar a cidade!');
        }
    }

    return (
        <div>

            <h3>Atualização da Cidade: {nome} - {estadoId}</h3>

            <form onSubmit={handleUpdateCidade} >
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" 
                        name="nome" value={nome} 
                        onChange={e => setNome(e.target.value) } />
                </div>

                <div>
                    <label htmlFor="estadoId">Estado: </label>
                    <select name="estadoId" id="estadoId" value={estadoId} onChange={ e=> setEstadoId( parseInt(e.target.value)) } >
                        <option value="0" selected>Selecione: </option>

                        {
                            estados.map(estado => (
                                <option key={estado.id} value={estado.id}>{estado.nome}</option>
                            ))
                        }

                        </select>
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Cancelar</button>
                <button onClick={() => navigate('/cidades')}>Voltar</button>
            </form>
        </div>
    );
}

export default UpdateCidade;