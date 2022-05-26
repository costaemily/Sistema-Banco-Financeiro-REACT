import React, { useState } from "react";
import { Tela, ContainerLogin, Contain, Imagem, BoxLogin } from "./styled";
import logo from "../../img/logo-branco.png";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const LoginPagina = _ =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    return(
        <Tela>
            <ContainerLogin>
                    <Imagem>
                        <div className="logo">
                            <img src={logo} width="500px" height="500px"></img>
                        </div>
                    </Imagem>
                    <BoxLogin>
                        <div className="nomeTitulo">
                            <label className="texto">Bem Vindo!</label>
                        </div>
                        <div className="loginBox">
                            <div className="wrap-input">
                                <input
                                    className={email !== "" ? "has-val input" : "input"}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                            
                                />
                                <span className="focus-input" data-placeholder="Email"></span>
                                </div>

                                <div className="wrap-input">
                                <input
                                    className={password !== "" ? "has-val input" : "input"}
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="focus-input" data-placeholder="Password"></span>
                                </div>

                                <div className="container-login-form-btn">
                                    <button type="submit" className="login-form-btn" >Login</button>
                                </div>
                                <br/>
                                <div className="text-center">
                                    <span className="txt1">Não possui conta? </span>
                                    <a className="txt2" href="#">
                                        Criar conta
                                    </a>
                                </div>
                            </div>
                    </BoxLogin>
                
            </ContainerLogin>
        </Tela>
        
    )
}
export default LoginPagina;