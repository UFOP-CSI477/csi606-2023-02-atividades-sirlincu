import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

interface EstadoInterface {
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
            <ul>

                {
                    estados.map(estado => (
                        // <li key={estado.id}>{estado.nome}</li>
                        <li>{estado.id} - {estado.nome} - {estado.sigla} <Link to={`/estados/update/${estado.id}`} >Atualizar</Link></li>
                    ))
                }

            </ul>
        </div>
    );

}

export default ListEstados;