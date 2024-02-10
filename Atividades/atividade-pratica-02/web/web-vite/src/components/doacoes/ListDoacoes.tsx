import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface DoacaoInterface {
    id: number;
    data: string;
    pessoa: {
        id: number;
        nome: string;
    };
    local_coleta: {
        id: number;
        nome: string;
    };
    created_at: string;
    updated_at: string;
}

const ListDoacoes = () => {
    const [ doacoes, setDoacoes ] = useState<DoacaoInterface[]>([]);
    
    useEffect(() => {
        api.get('/doacoes')
            .then(response => {
                setDoacoes(response.data);
            })
    }, []);

    const handleDeleteDoacao = async (id: number) => {  
        if(!window.confirm('Deseja realmente excluir esta doação?')) {
            return;
        };

        try {
            await api.delete('/doacoes', {
                data: {
                    id
                }
            });
            const newDoacoes = doacoes.filter(doacao => doacao.id !== id);
            setDoacoes(newDoacoes);
            alert('Doação excluída com sucesso!');

            
        } catch (error) {
            alert('Erro ao excluir a doação, tente novamente!');
            console.log(error);
        }
    }

    return (
        <div>
            <h3>Lista de Doações</h3>
            <div>
                <Link to="/doacoes/create">Cadastrar Doação</Link>
            </div>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <p>Quantidade de doações cadastradas: {doacoes.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Pessoa</th>
                        <th>Local de Coleta</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doacoes.map(doacao => (
                            <tr key={doacao.id}>
                                <td>{doacao.data}</td>
                                <td>{doacao.pessoa.nome}</td>
                                <td>{doacao.local_coleta.nome}</td>
                                <td>{doacao.created_at}</td>
                                <td>{doacao.updated_at}</td>
                                <td><Link to={`/doacoes/update/${doacao.id}`} >Atualizar</Link></td>
                                <td><button onClick={() => handleDeleteDoacao(doacao.id)}>Excluir</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListDoacoes;