/*import React, { Fragment } from "react";
import MyRoutes from "./router/MyRoutes";


function App() {
  return (
    <Fragment>
        <MyRoutes/>
    </Fragment>
  );
}

export default App;
*/
import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ListarEditora from "./pages/editora/ListarEditora";
import IncluirEditora from "./pages/editora/IncluirEditora";
import AlterarEditora from "./pages/editora/AlterarEditora";
import ExcluirEditora from "./pages/editora/ExcluirEditora";
import LoginPagina from "./pages/login/LoginPagina";
import IncluirUsuario from "./pages/usuario/IncluirUsuario";

function App() {
  return (
      <Fragment>
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/editora/listar" element={<ListarEditora/>}/>
                <Route path="/editora/incluir" element={<IncluirEditora/>}/>
                <Route path="/editora/alterar/:id" element={<AlterarEditora/>}/>
                <Route path="/editora/excluir/:id" element={<ExcluirEditora/>}/>
                <Route path="/login" element={<LoginPagina/>}/>
                <Route path="/usuario/inserir" element={<IncluirUsuario/>}/>
            </Routes>
         </BrowserRouter>
    </Fragment>
  );    
}

export default App;
