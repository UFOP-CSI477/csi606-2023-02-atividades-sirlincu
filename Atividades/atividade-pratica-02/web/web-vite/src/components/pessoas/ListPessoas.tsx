import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface PessoaInterface {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    rg: string;
    cidade: {
        id: number;
        nome: string;
    }
    tipo_sanguineo: {
        id: number;
        tipo: string;
        fator: string;
    }
}

const ListPessoas = () => {
    const [ pessoas, setPessoas ] = useState<PessoaInterface[]>([]);
    useEffect(() => {
        api.get('/pessoas')
            .then(response => {
                setPessoas(response.data);
            })
    }, []);

    const handleDeletePessoa = async (id: number) => {
        if(!window.confirm('Deseja realmente excluir esta pessoa?')) {
            return;
        };
        try {
            await api.delete('/pessoas', {
                data: {
                    id
                }
            });
            const newPessoas = pessoas.filter(pessoa => pessoa.id !== id);
            setPessoas(newPessoas);
            alert('Pessoa excluída com sucesso!');
        } catch (error) {
            alert('Erro ao excluir a pessoa, tente novamente!');
            console.log(error);
        } 
    }

    return (
        <div>
            <h3>Lista de Pessoas</h3>
            <div>
                <Link to="/pessoas/create">Cadastrar Pessoa</Link>
            </div>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <p>Quantidade de pessoas cadastradas: {pessoas.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Rua</th>
                        <th>Numero</th>
                        <th>Complemento</th>
                        <th>RG</th>
                        <th>Cidade</th>
                        <th>Tipo Sanguíneo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map(pessoa => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.rua}</td>
                            <td>{pessoa.numero}</td>
                            <td>{pessoa.complemento}</td>
                            <td>{pessoa.rg}</td>
                            <td>{pessoa.cidade.nome}</td>
                            <td>{pessoa.tipo_sanguineo.tipo} {pessoa.tipo_sanguineo.fator}</td>
                            <td>
                                <Link to={`/pessoas/update/${pessoa.id}`}>Editar</Link>
                                <button onClick={() => handleDeletePessoa(pessoa.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPessoas;