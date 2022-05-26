import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { GradeSistema, Rodape } from "../../components/content/styled";
import PageHeaders from "../../components/header/PageHeaders";
import Layout from "../../components/layout/Layout";
import { inserirEditora } from "../../Service/EditoraService";
import { INICIAR_EDITORA } from "./Editora";

const IncluirEditora = _ => {
    
    const [editora, setEditora] = useState(INICIAR_EDITORA);
    //const [nome, setNome] = useState('');
    //const [data_cadastro, setData_cadastro] = useState('');

    const onSubmitEditora = (e) => {
        e.preventDefault();
        inserirEditora(editora);
        setEditora(INICIAR_EDITORA);
    }

    const onChangeEditora = (e) => {
        const {name, value} = e.target;
        setEditora({...editora, [name]: value})
    }
    return (
        <Fragment>
            <Layout>
            <div className="container">
                <PageHeaders
                    tituloPagina="Incluir Registro"
                    path="/dashboard"
                    tituloPesquisa="Pagina principal"
                    icon="building"
                    toReturn="tachometer"/>                
            
            <GradeSistema>
                <div className="row col-8 mx-auto">
                    <form onSubmit={(e) => onSubmitEditora(e)}>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8">
                                <div className="form-group">
                                    <label className="form-lable">Nome:</label>
                                    <input className="form-control"
                                            type="text"
                                            name="nome"
                                            value={editora.nome}
                                            onChange={(e) => onChangeEditora(e)}></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8">
                                <div className="form-group">
                                    <label className="form-lable">Data:</label>
                                    <input className="form-control"
                                            type="date"
                                            name="data_cadastro"
                                            value={editora.data_cadastro}
                                            onChange={(e) => onChangeEditora(e)}></input>
                                </div>
                            </div>
                        </div>
                <Rodape>
                    <button type="submit"
                            className="btn btn-success btn-lg"
                            title="Salvar Registro">Salvar

                    </button>
                    <Link to="/editora/listar"
                          className="btn btn-secondary btn-lg"
                          title="Cancelar">Cancelar</Link>
                </Rodape>
                    </form>
                </div>
                </GradeSistema>
            </div>
            </Layout>
        </Fragment>
    )
}
export default IncluirEditora;