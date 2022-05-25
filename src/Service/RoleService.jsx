import http from '../config/Banco';

export const findAllRoles = async (page, pageSize, dir, props) =>{
    return (
        http({
            method:'GET',
            url:'/role/listar',
            params:{
                page,
                pageSize,
                dir,
                props
            }
        }).then( ( resp ) =>{
            return resp.data
        }).catch(( error ) => {
            return error.response
        }) 
    )
}

export const findRoleByName = async (nome, page, pageSize, dir, props) =>{
    return (
        http({
            method:'GET',
            url:'/role/listar/',
            params:{
                nome,
                page,
                pageSize,
                dir,
                props
            }
        }).then( ( resp ) =>{
            return resp.data
        }).catch(( error ) => {
            return error.response
        }) 
    )
}
export const findRoleById = async (id) => {
    return(
        http({
            method: 'get',
            url: `/role/alterar/${id}`,
        }).then((res) => {
            return res.data;
        }).catch((errors) => {
            return errors.response;
        })
    )
}

export const inserirRole = async (role) => {
    return(
        http({
            method: 'post',
            url: '/role/salvar',
            data: role
        }).then((res) => {
            console.log(res.data);
            return res.data;
        }).catch((errors) => {
            return errors.response;
        })
    )
}

export const alterarRole = async (role, id) => {
    return(
        http({
            method: 'post',
            url: `/role/alterar/${id}`,
            data: role
        }).then((res) => {
            console.log(res.data);
            return res.data;
        }).catch((errors) => {
            return errors.response;
        })
    )
}

export const excluirRole = async (role, id) => {
    return(
        http({
            method: 'post',
            url: `/role/excluir/${id}`,
            data: role
        }).then((res) => {
            console.log(res.data);
            return res.data;
        }).catch((errors) => {
            return errors.response;
        })
    )
}