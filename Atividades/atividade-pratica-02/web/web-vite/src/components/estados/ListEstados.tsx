import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface EstadoInterface {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at: string;
}

const ListEstados = () => {

    const [ estados, setEstados ] = useState<EstadoInterface[]>([]);

    useEffect(() => {
        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })
        
    }, []);

    const handleDeleteEstado = async (id: number) => {

        if(!window.confirm('Deseja realmente excluir este estado?')) {
            return;
        };

        try {
            await api.delete('/estados', {
                data: {
                    id
                }
            });
            const newEstados = estados.filter(estado => estado.id !== id);
            setEstados(newEstados);
            alert('Estado excluído com sucesso!');

            
        } catch (error) {
            alert('Erro ao excluir o estado, tente novamente!');
            console.log(error);
        }
    }

    return (
        <div>
            <h3>Lista de Estados</h3>
            <div>
                <Link to="/estados/create">Cadastrar Estado</Link>
            </div>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <p>Quantidade de estados cadastrados: {estados.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        estados.map(estado => (
                            <tr>
                                <td>{estado.id}</td>
                                <td>{estado.nome}</td>
                                <td>{estado.sigla}</td>
                                <td>{estado.created_at}</td>
                                <td>{estado.updated_at}</td>
                                <td><Link to={`/estados/update/${estado.id}`} >Atualizar</Link></td>
                                <td><button onClick={()=>{handleDeleteEstado(estado.id)}}>Excluir</button></td>
                            </tr>
                            // <li key={estado.id}>{estado.nome}</li>
                            // <li>{estado.id} - {estado.nome} - {estado.sigla} <Link to={`/estados/update/${estado.id}`} >Atualizar</Link></li>
                        ))
                    }
                </tbody>
                

            </table>
        </div>
    );

}

export default ListEstados;