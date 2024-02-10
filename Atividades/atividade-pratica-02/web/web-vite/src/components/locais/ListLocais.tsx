import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface LocalInterface {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade: {
        id: number;
        nome: string;
    }
};

const ListLocais = () => {
    const [ locais, setLocais ] = useState<LocalInterface[]>([]);

    useEffect(() => {
        api.get('/locais')
            .then(response => {
                console.log(response.data);
                setLocais(response.data);
            })
    }, []);

    const handleDeleteLocal = async (id: number) => {
        if(!window.confirm('Deseja realmente excluir este local?')) {
            return;
        };

        try {
            await api.delete('/locais', {
                data: {
                    id
                }
            });
            const newLocais = locais.filter(local => local.id !== id);
            setLocais(newLocais);
            alert('Local excluído com sucesso!');

            
        } catch (error) {
            alert('Erro ao excluir o local, tente novamente!');
            console.log(error);
        }
    };

    return (
        <div>
            <h3>Lista de Locais</h3>
            <div>
                <Link to="/locais/create">Cadastrar Local</Link>
            </div>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <p>Quantidade de locais cadastrados: {locais.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Rua</th>
                        <th>Numero</th>
                        <th>Complemento</th>
                        <th>Cidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {locais.map(local => (
                        <tr key={local.id}>
                            <td>{local.nome}</td>
                            <td>{local.rua}</td>
                            <td>{local.numero}</td>
                            <td>{local.complemento}</td>
                            <td>{local.cidade.nome}</td>
                            <td>
                                <Link to={`/locais/update/${local.id}`}>Editar</Link>
                                <button onClick={() => handleDeleteLocal(local.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default ListLocais;