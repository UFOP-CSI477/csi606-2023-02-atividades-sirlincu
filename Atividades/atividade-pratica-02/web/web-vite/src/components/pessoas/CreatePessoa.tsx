import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { CidadeInterface } from "../cidades/ListCidades";
import { TipoSanguineoInterface } from "../tipos-sanguineos/ListTiposSanguineos";

const CreatePessoa = () => {

    const [ nome, setNome ] = useState('');
    const [ rua, setRua ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ rg, setRg ] = useState('');
    const [ cidadeId, setCidadeId ] = useState(0);
    const [ tipoSanguineoId, setTipoSanguineoId ] = useState(0);
    const [ cidades, setCidades ] = useState<CidadeInterface[]>([]);
    const [ tiposSanguineos, setTiposSanguineos ] = useState<TipoSanguineoInterface[]>([]);

    useEffect(() => {
        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })
    }, []);

    useEffect(() => {
        api.get('/tipos-sanguineos')
            .then(response => {
                setTiposSanguineos(response.data);
            })
    }, []);

    const navigate = useNavigate();

    const handleNewPessoa = async (event : React.FormEvent<HTMLFormElement> ) => {
        
        event.preventDefault();

        if (nome === '' || cidadeId === 0 || tipoSanguineoId === 0) {
            alert('Preencha todos os campos!');
            return;
        };

        const data = {
            nome,
            rua,
            numero,
            complemento,
            rg,
            cidade_id: cidadeId,
            tipo_sanguineo_id: tipoSanguineoId
        };

        try {
            await api.post('/pessoas', data)
                .then(response => {
                    console.log(response.data);
            });
                        
            alert('Pessoa cadastrada com sucesso!');
            navigate('/pessoas');

        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar pessoa!');
        }
    }

    return (
        <div>

            <h3>Cadastro da Pessoa: {nome}</h3>

            <form onSubmit={handleNewPessoa} >
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
                    <div>
                        <label htmlFor="rg">RG: </label>
                        <input type="text" id="rg" 
                            name="rg" value={rg} 
                            onChange={e => setRg(e.target.value) } />
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
                <div>
                    <label htmlFor="tipoSanguineoId">Tipo Sanguineo: </label>
                    <select name="tipoSanguineoId" id="tipoSanguineoId" value={tipoSanguineoId}
                        onChange={ e=> setTipoSanguineoId( parseInt(e.target.value)) } >
                        <option value="0" selected>Selecione: </option>

                        {
                            tiposSanguineos.map(tipoSanguineo => (
                                <option key={tipoSanguineo.id} value={tipoSanguineo.id}>{tipoSanguineo.tipo}-{tipoSanguineo.fator}</option>
                            ))
                        }

                        </select>

                </div>

                <button type="submit">Salvar</button>
                <button type="reset">Cancelar</button>
                <button onClick={() => navigate('/cidades')}>Voltar</button>
            </form>
        </div>
    );
}

export default CreatePessoa;