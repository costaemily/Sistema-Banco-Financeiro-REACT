import React from "react";
import {Routes, Route, Router} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ListarEditora from "../pages/editora/ListarEditora";
import IncluirEditora from "../pages/editora/IncluirEditora";
import AlterarEditora from "../pages/editora/AlterarEditora";
import ExcluirEditora from "./pages/editora/ExcluirEditora";
import LoginPagina from "../pages/login/LoginPagina";
import IncluirUsuario from "./pages/usuario/IncluirUsuario";

const AppRoutes = _ => {
    return(
        <Layout>
             <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/editora/listar" element={<ListarEditora/>}/>
                <Route path="/editora/incluir" exact component={<IncluirEditora/>}/>
                <Route path="/editora/alterar/:id" exact component={<AlterarEditora/>}/>
                <Route path="/editora/excluir/:id" exact component={<ExcluirEditora/>}/>
                <Route path="/login" exact component={<LoginPagina/>}/>
                <Route path="/usuario/inserir" exact component={<IncluirUsuario/>}/>
            </Routes>
        </Layout>
        
    )
}

export default AppRoutes;