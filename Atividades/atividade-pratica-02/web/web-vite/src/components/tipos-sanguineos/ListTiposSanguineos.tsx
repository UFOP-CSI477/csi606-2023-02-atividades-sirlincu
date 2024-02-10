import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface TipoSanguineoInterface {
    id: number;
    tipo: string;
    fator: string;
}

const ListTiposSanguineos = () => {
    const [ tiposSanguineos, setTiposSanguineos ] = useState<TipoSanguineoInterface[]>([]);
    useEffect(() => {
        api.get('/tipos-sanguineos')
            .then(response => {
                setTiposSanguineos(response.data);
            })
    }, []);

    return (
        <div>
            <h3>Lista de Tipos Sanguíneos</h3>
            <div>
                <Link to="/tipos-sanguineos/create">Cadastrar Tipo Sanguíneo</Link>
            </div>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <p>Quantidade de tipos sanguíneos cadastrados: {tiposSanguineos.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Fator</th>
                    </tr>
                </thead>
                <tbody>
                    {tiposSanguineos.map(tipoSanguineo => (
                        <tr key={tipoSanguineo.id}>
                            <td>{tipoSanguineo.tipo}</td>
                            <td>{tipoSanguineo.fator}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListTiposSanguineos;