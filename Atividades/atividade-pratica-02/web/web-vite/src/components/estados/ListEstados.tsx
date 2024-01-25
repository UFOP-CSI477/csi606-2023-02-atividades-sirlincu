import { useEffect, useState } from "react";
import api from "../../services/api";

interface EstadoInterface {
    id: number;
    nome: string;
    sigla: string;
    createdAt: string;
    updatedAt: string;
}


const ListEstados = () => {

    const [ estados, setEstados ] = useState<EstadoInterface[]>([]);

    useEffect(() => {
        api.get('/estados').then(response => {
            setEstados(response.data);
        });
    },[]);

    return (
        <div>
            <ul>
                {
                    estados.map(estado => {
                        return <li>{estado.nome} - {estado.sigla} </li>
                    })
                }
            </ul>
        </div>
    );
    
}

export default ListEstados;