import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { PessoaInterface } from "../pessoas/ListPessoas";
import { LocalInterface } from "../locais/ListLocais";


const UpdateDoacao = () => {
    const [ data, setData ] = useState('');
    const [ pessoaId, setPessoaId ] = useState(0);
    const [ localId, setLocalColetaId ] = useState(0);
    const [ pessoas, setPessoas ] = useState<PessoaInterface[]>([]);
    const [ locais, setLocais ] = useState<LocalInterface[]>([]);
    const [ nomePessoa, setNomePessoa ] = useState('');
    const [ localNome, setLocalNome ] = useState('');

    const { id } = useParams();

    useEffect(() => {
        api.get(`/doacoes/${id}`)
            .then(response => {
                setData(response.data.data);
                setPessoaId(response.data.pessoa_id);
                setLocalColetaId(response.data.local_coleta_id);

            const pessoaEncontrada = pessoas.find(pessoa => pessoa.id === pessoaId);
            const localEncontrado = locais.find(local => local.id === localId);
            if(pessoaEncontrada) {
                setNomePessoa(pessoaEncontrada.nome);
            }
            if(localEncontrado) {
                setLocalNome(localEncontrado.nome);
            }

        });
    }, [id, pessoas, locais]);

    useEffect(() => {
        api.get('/pessoas')
            .then(response => {
                setPessoas(response.data);
            })
    }, []);

    useEffect(() => {
        api.get('/locais')
            .then(response => {
                setLocais(response.data);
            })
    }, []);

    const navigate = useNavigate();

    const handleUpdateDoacao = async (event : React.FormEvent<HTMLFormElement> ) => {
        
        event.preventDefault();

        if (data === '' || pessoaId === 0 || localId === 0) {
            alert('Preencha todos os campos!');
            return;
        };

        const doacaoData = {
            id,
            data,
            pessoa_id: pessoaId,
            local_coleta_id: localId
        };

        try {
            await api.put('/doacoes', doacaoData)
                .then(response => {
                    console.log(response.data);
            });
                        
            alert('Doação atualizada com sucesso!');
            navigate('/doacoes');
        } catch (error) {
                console.error(error);
                if ((error as any).code === "P2025") {
                        // Faça algo específico para o código de erro P2025
                    }
                alert('Erro ao atualizar a doação!');

        }
    }

    return (
        <div>

            <h3>Atualização da Doação: {nomePessoa} - {localNome}</h3>

            <form onSubmit={handleUpdateDoacao} >
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
                    <label htmlFor="localId">Local de Coleta: </label>
                    <select name="localId" id="localId" value={localId}
                        onChange={ e=> setLocalColetaId(parseInt(e.target.value))} >
                        <option value="0">Selecione: </option>
                        {
                            locais.map(local => (
                                <option key={local.id} value={local.id}>{local.nome}</option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Cancelar</button>
                <button onClick={() => navigate('/doacoes')}>Voltar</button>
            </form>
        </div>
    )
}

export default UpdateDoacao;