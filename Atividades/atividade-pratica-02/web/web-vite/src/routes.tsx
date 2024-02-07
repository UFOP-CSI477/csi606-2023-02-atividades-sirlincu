import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ListEstados from "./components/estados/ListEstados";
import CreateEstado from "./components/estados/CreateEstado";
import UpdateEstado from "./components/estados/UpdateEstado";


const AppRoutes = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/estados" element={<ListEstados />} />
                <Route path="/estados/create" element={<CreateEstado />} />
                <Route path="/estados/update/:id" element={<UpdateEstado />} />
                {/* <Route path="/cidades" element={<Contact />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
        // <Router history={history}>
        // <Switch>
        //     <Route path="/" exact component={Home} />
        //     <Route path="/about" component={About} />
        //     <Route path="/contact" component={Contact} />
        //     <Route path="*" component={NotFound} />
        // </Switch>
        // </Router>
    );
}

export default AppRoutes;