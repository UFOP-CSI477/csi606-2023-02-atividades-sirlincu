import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { PessoaInterface } from "../pessoas/ListPessoas";
import { LocalInterface } from "../locais/ListLocais";


const CreateDoacao = () => {
    const [ data, setData ] = useState('');
    const [ pessoaId, setPessoaId ] = useState(0);
    const [ localColetaId, setLocalColetaId ] = useState(0);
    const [ pessoas, setPessoas ] = useState<PessoaInterface[]>([]);
    const [ locaisColeta, setLocaisColeta ] = useState<LocalInterface[]>([]);

    useEffect(() => {
        api.get('/pessoas')
            .then(response => {
                setPessoas(response.data);
            })
    }, []);

    useEffect(() => {
        api.get('/locais-coleta')
            .then(response => {
                setLocaisColeta(response.data);
            })
    }, []);

    const navigate = useNavigate();

    const handleNewDoacao = async (event : React.FormEvent<HTMLFormElement> ) => {
        
        event.preventDefault();

        if (data === '' || pessoaId === 0 || localColetaId === 0) {
            alert('Preencha todos os campos!');
            return;
        };

        const doacaoData = {
            data,
            pessoa_id: pessoaId,
            local_coleta_id: localColetaId
        };

        try {
            await api.post('/doacoes', doacaoData)
                .then(response => {
                    console.log(response.data);
            });
                        
            alert('Doação cadastrada com sucesso!');
            navigate('/doacoes');
        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar a doação!');
        }
    }

    return (
        <div>

            <h3>Cadastro de Doação: {data}</h3>

            <form onSubmit={handleNewDoacao} >
                <div>
                    <label htmlFor="data">Data: </label>
                    <input type="date" id="data" 
                        name="data" value={data} 
                        onChange={e => setData(e.target.value) } />
                </div>

                <div>
                    <label htmlFor="pessoaId">Pessoa: </label>
                    <select name="pessoaId" id="pessoaId" value={pessoaId}
                        onChange={ e=> setPessoaId(parseInt(e.target.value))} >
                        <option value="0">Selecione: </option>
                        {
                            pessoas.map(pessoa => (
                                <option key={pessoa.id} value={pessoa.id}>{pessoa.nome}</option>
                            ))
                        }

                    </select>
                </div>

                <div>
                    <label htmlFor="localColetaId">Local de Coleta: </label>
                    <select name="localColetaId" id="localColetaId" value={localColetaId}
                        onChange={ e=> setLocalColetaId(parseInt(e.target.value))} >
                        <option value="0">Selecione: </option>
                        {
                            locaisColeta.map(localColeta => (
                                <option key={localColeta.id} value={localColeta.id}>{localColeta.nome}</option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">Salvar</button>
                <button type="reset">Cancelar</button>
                <button onClick={() => navigate('/doacoes')}>Voltar</button>
            </form>
        </div>
    )
}

export default CreateDoacao;