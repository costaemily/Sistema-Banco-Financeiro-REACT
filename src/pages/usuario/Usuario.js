export const INIT_USUARIO = {
    
    id:'',
    name:'',
    email:'',
    email_verified_at:'',
    roles:[],
    foto:'',
    contentType:''
};

export function validarDadosUsuario(usuario){
    let errors = {
        nome_mensagem:[],
        nome_valid:false,
        email_mensagem:[],
        email_valid:false
    }

    if(usuario.nome.trim().lenght === 0){
        errors.nome_mensagem.push("É obrigatório informar um nome válido");
        errors.nome_valid = true;
    }

    if(usuario.email.trim().lenght === 0){
        errors.email_mensagem.push("É obrigatório informar um endereço de email válido");
        errors.email_valid = true;
    }
}