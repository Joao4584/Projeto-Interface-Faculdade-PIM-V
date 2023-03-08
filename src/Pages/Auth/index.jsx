// * Modules * //
import React, { useContext } from 'react'
import { Button, message } from 'antd';
import { useNavigate } from 'react-router';

// * Exports * //
import { MainContext } from '../../App/main.context';
 import * as Styled from '../../Styles/Auth/index.style';
 
// * Components * //
export function AuthPages(props) {
    const {setClientAuthStorage} = useContext(MainContext);
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    
    const login = 'unip';
    const senha = 'senha123';

    function clientVerifyLogin(){
        let userInput = document.getElementById('userInput').value;
        let senhaInput = document.getElementById('senhaInput').value;

        if(userInput == login){
            if(senhaInput == senha){
                setClientAuthStorage(true);
                messageApi
                .open({
                  type: 'loading',
                  content: 'Verificando Processos..',
                  duration: 2.5,
                })
                .then(() => message.success('Logado com sucesso.', 1.5))
                .then(() => navigate('/'))
                
            }else if(senhaInput == '' || senhaInput == null){
                messageApi
                .open({
                  type: 'loading',
                  content: 'Verificando Processos..',
                  duration: 2.5,
                })
                .then(() => message.error('Campo Senha está vazio.', 2.5))
            }else{
                messageApi
                .open({
                  type: 'loading',
                  content: 'Verificando Processos..',
                  duration: 2.5,
                })
                .then(() => message.warning('Usuário e senha não combinam.', 2.5))

            }
        }else if(userInput == '' || userInput == null){
            messageApi
                  .open({
                    type: 'loading',
                    content: 'Verificando Processos..',
                    duration: 2.5,
                  })
                  .then(() => message.error('Campo Usuário está vazio.', 2.5))
        }else{
            messageApi
            .open({
              type: 'loading',
              content: 'Verificando Processos..',
              duration: 2.5,
            })
            .then(() => message.warning('Usuário não foi encontrado.', 2.5))
        }
    }

    return (
        <Styled.Container>
            {contextHolder}
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <div class="form" action="#">
                            <h1>Criar Conta</h1>
                            <input type="text" placeholder="Name" />
                            <input type="user" placeholder="Usuario"  />
                            <input type="password" placeholder="Senha"   />
                            <button>Criar</button>
                        </div>
                    </div>
                    <div class="form-container sign-in-container">
                        <div class="form" action="#">
                            <h1>Login</h1>
                            <input type="text" placeholder="Usuario" id="userInput" />
                            <input type="password" placeholder="Senha" id="senhaInput" />
                            <a href="#">Esqueceu sua senha?</a>
                            <button onClick={() => {clientVerifyLogin()}}>Login</button>
                        </div>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Crie Sua Conta!</h1>
                                <p>Prencha as informações para criar seu usuario.</p>
                                <button class="ghost" id="signIn" onClick={() => {document.getElementById('container').classList.remove("right-panel-active")}}>Fazer Login</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <img src="/logo.svg" />
                                <h1>Ola, Amigo!</h1>
                                <p>Faça o login para acessar o sistema. </p>
                                <button class="ghost" id="signUp" onClick={() => {document.getElementById('container').classList.add("right-panel-active")}}>Criar Conta</button>
                            </div>
                        </div>
                    </div>
                </div>
        </Styled.Container>
    )
}