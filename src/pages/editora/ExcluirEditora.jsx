import React, { Fragment, useEffect, useState } from "react";
import PageHeaders from "../../components/header/PageHeaders";
import { Link, useParams } from "react-router-dom";
import { GradeSistema, Rodape } from "../../components/content/styled";
import { excluirEditora, findEditoraById } from "../../Service/EditoraService";
import { INICIAR_EDITORA } from "./Editora";
import Layout from "../../components/layout/Layout";

const ExcluirEditora = _ => {
    
    const {id} = useParams();
    const [editora, setEditora] = useState(INICIAR_EDITORA);

    useEffect(() => {
        async function loadEditora(){
            const data = await findEditoraById(id);
            setEditora(data.registro);
        }
        loadEditora();
    },[id])
    //const [nome, setNome] = useState('');
    //const [data_cadastro, setData_cadastro] = useState('');

    const onSubmitEditora = (e) => {
        e.preventDefault();
        excluirEditora(editora, id);
        setEditora(INICIAR_EDITORA);
    }

    const onChangeEditora = (e) => {
        const {name, value} = e.target;
        setEditora({...editora, [name]: value})
    }

    //console.log(id);

    return (
        <Fragment>
            <Layout>
            <div className="container">
                <PageHeaders
                    tituloPagina="Deletar Registro"
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
                            title="Deletar Registro">Excluir
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
export default ExcluirEditora;