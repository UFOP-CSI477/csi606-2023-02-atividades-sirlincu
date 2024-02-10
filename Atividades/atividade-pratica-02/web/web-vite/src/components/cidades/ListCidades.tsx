import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface CidadeInterface {
    id: number;
    nome: string;
    estado: {
        id: number;
        nome: string;
        sigla: string;
    }
}

const ListCidades = () => {

    const [ cidades, setCidades ] = useState<CidadeInterface[]>([]);

    useEffect(() => {
        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })
        
    }, []);

    const handleDeleteCidade = async (id: number) => {

        if(!window.confirm('Deseja realmente excluir esta cidade?')) {
            return;
        };

        try {
            await api.delete('/cidades', {
                data: {
                    id
                }
            });
            const newCidades = cidades.filter(cidade => cidade.id !== id);
            setCidades(newCidades);
            alert('Cidade excluída com sucesso!');

            
        } catch (error) {
            alert('Erro ao excluir a cidade, tente novamente!');
            console.log(error);
        }
    }

    return (
        <div>
            <h3>Lista de Cidades</h3>
            <div>
                <Link to="/cidades/create">Cadastrar Cidade</Link>
            </div>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <p>Quantidade de cidades cadastradas: {cidades.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Estado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        cidades.map(cidade => (
                            <tr>
                                <td>{cidade.id}</td>
                                <td>{cidade.nome}</td>
                                <td>{cidade.estado.nome} - {cidade.estado.sigla}</td>
                                <td><Link to={`/cidades/update/${cidade.id}`} >Atualizar</Link></td>
                                <td><button onClick={()=>{handleDeleteCidade(cidade.id)}}>Excluir</button></td>
                            </tr>
                        ))
                    }
                </tbody>
                

            </table>
        </div>
    );

}

export default ListCidades;