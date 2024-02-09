import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ListEstados from "./components/estados/ListEstados";
import CreateEstado from "./components/estados/CreateEstado";
import UpdateEstado from "./components/estados/UpdateEstado";
import CreateCidade from "./components/cidades/CreateCidade";
import ListCidades from "./components/cidades/ListCidades";
import UpdateCidade from "./components/cidades/UpdateCidade";
import ListDoacoes from "./components/doacoes/ListDoacoes";
import CreateDoacao from "./components/doacoes/CreateDoacao";
import UpdateDoacao from "./components/doacoes/UpdateDoacao";
import ListLocais from "./components/locais/ListLocal";


const AppRoutes = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/estados" element={<ListEstados />} />
                <Route path="/estados/create" element={<CreateEstado />} />
                <Route path="/estados/update/:id" element={<UpdateEstado />} />

                <Route path="/cidades" element={<ListCidades />} />
                <Route path="/cidades/create" element={<CreateCidade />} />
                <Route path="/cidades/update/:id" element={<UpdateCidade />} />

                import ListDoacoes from "./components/doacoes/ListDoacoes";

                <Route path="/doacoes" element={<ListDoacoes />} />
                <Route path="/doacoes/create" element={<CreateDoacao />} />
                <Route path="/doacoes/update/:id" element={<UpdateDoacao />} />

                <Route path="/locais" element={<ListLocais />} />
                {/* <Route path="/locais/create" element={<CreateLocal />} /> */}
                {/* <Route path="/locais/create/:id" element={<UpdateLocal />} /> */}

                {/* <Route path="/pessoas" element={<ListPessoas />} />
                <Route path="/pessoas/create" element={<CreatePessoa />} />
                <Route path="/pessoas/update/:id" element={<UpdatePessoa />} />
                               */}
                {/* // <Route path="/tipos-sanguineos" element={<ListTiposSanguineos />} />
                // <Route path="/tipos-sanguineos/create" element={<CreateTipoSanguineo />} />
                // <Route path="/tipos-sanguineos/update/:id" element={<UpdateTipoSanguineo />} /> */}

                <Route path="*" element={<h1>Page not found</h1>} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;