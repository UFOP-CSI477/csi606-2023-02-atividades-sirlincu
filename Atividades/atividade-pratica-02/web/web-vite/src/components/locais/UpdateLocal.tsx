import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { CidadeInterface } from "../cidades/ListCidades";

const UpdateLocal = () => {

    const [ nome, setNome ] = useState('');
    const [ rua, setRua ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ cidadeId, setCidadeId ] = useState(0);

    const [ cidades, setCidades ] = useState<CidadeInterface[]>([]);

    const { id } = useParams();

    useEffect(() => {
        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })
    }, []);

    useEffect(() => {
        api.get(`/locais/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setRua(response.data.rua);
                setNumero(response.data.numero);
                setComplemento(response.data.complemento);
                setCidadeId(response.data.cidade_id);
            });
    }, [id]);

    const navigate = useNavigate();

    const handleUpdateLocal = async (event : React.FormEvent<HTMLFormElement> ) => {
        
        event.preventDefault();

        if (nome === '' || cidadeId === 0) {
            alert('Preencha todos os campos!');
            return;
        };

        const data = {
            nome,
            rua,
            numero,
            complemento,
            cidade_id: cidadeId
        };

        try {
            await api.post('/locais', data)
                .then(response => {
                    console.log(response.data);
            });
                        
            alert('Local atualizado com sucesso!');
            navigate('/locais');

        } catch (error) {
            console.log(error);
            alert('Erro ao atualizar o local!');
        }
    }

    return (
        <div>

            <h3>Atualização de Local: {nome} - {cidadeId}</h3>

            <form onSubmit={handleUpdateLocal} >
                <div>
                    <div>
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" id="nome" 
                            name="nome" value={nome} 
                            onChange={e => setNome(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="rua">Rua: </label>
                        <input type="text" id="rua" 
                            name="rua" value={rua} 
                            onChange={e => setRua(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="numero">Número: </label>
                        <input type="text" id="numero" 
                            name="numero" value={numero} 
                            onChange={e => setNumero(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="complemento">Complemento: </label>
                        <input type="text" id="complemento" 
                            name="complemento" value={complemento} 
                            onChange={e => setComplemento(e.target.value) } />
                    </div>
                </div>

                <div>
                    <label htmlFor="cidadeId">Cidade: </label>
                    <select name="cidadeId" id="cidadeId" value={cidadeId}
                        onChange={ e=> setCidadeId( parseInt(e.target.value)) } >
                        <option value="0" selected>Selecione: </option>

                        {
                            cidades.map(cidade => (
                                <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                            ))
                        }

                        </select>
                </div>

                <button type="submit">Salvar</button>
                <button type="reset">Cancelar</button>
                <button onClick={() => navigate('/locais')}>Voltar</button>
            </form>
        </div>
    );
}

export default UpdateLocal;