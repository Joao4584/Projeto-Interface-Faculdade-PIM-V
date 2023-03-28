// * Modules * //
import styled, { css } from 'styled-components'; 


// * Styles * //
export const Container = styled.div`

 
.cabecalho{
            background-color: #3b5998;
            height: 50px;
            padding: 20px 100px 40px ;
        }
        .cabecalho h1{
            margin: 0;
            width: 30%;
            letter-spacing: 0px;
            color: white;
            padding: 30px 0 0 0;
            float: left;
        }
        .cabecalho div{
            float: left;
            margin-left: 5px;
        }
        .cabecalho label{
            float: left;
            text-align: left;
            color: white;
        }
        .cabecalho .entrar{
            float: right;
            width: 40%;
        }
        #btn-entrar{
            padding: 5px;
            border-radius: 10px;
            color: white;
            background-color: teal;
            transition: .3s;
            border: none;
            clear: both;
            margin-left: 5px;
        }
        #btn-entrar:hover{
            background: turquoise;
            color: rgb(70, 70, 70);
        }
        main{
            clear: both;
            height: 630px;
            margin-bottom: 0;
        }
        .descricao-background{
            float: center;
            width: 40%;
            padding: 40px 0 0 40px;
        }
        .descricao-background img{
            width: 80%;
        }
        .cadrastar{
            float: right;
            width: 50%;
            padding: 0 15px 0 0;
        }
        .cadrastar h3{
            font-size: 200%;
        }
        .cadrastar h4{
            font-size: 150%;
            font-weight: none;
            color: rgb(90, 89, 89);
        }
        .cadrastar .numero-nasc{
            width: 20%;
        }
        .cadrastar label{
            color: rgb(83, 83, 83);
        }

        #nome, #sobrenome, #email, #senha{
            padding: 10px;
            margin-bottom: 10px;
        }
        #nome:focus, #sobrenome:focus, #email:focus, #senha:focus{
            background-color: rgba(146, 192, 192, 0.603);
            color: rgb(97, 97, 97);
        }
        #nome, #sobrenome{
            width: 42.5%;
        }
        #sobrenome{
            margin-left: 0.5%;
        }
        #email, #senha{
            width: 90%;
        }
        .btn-cadastrar{
            background-color: teal;
            padding: 10px;
            border-radius: 10px;
            color: white;
            transition: .3s ease-in;
            border: none;
        }
        .btn-cadastrar:hover{
            
            background: turquoise;
            color: rgb(70, 70, 70);
        }
        .aviso-face-fake{
            color: red;
        }
        .rodape{
            background-color: #3b5998;
            color: white;
            text-align: center;
            height: 100px;
            padding: 100px 0 0 0;
            font-size: 20pt;
            margin: 0;
        }
        @media(max-width: 2000px){
            .cabecalho{
                height: 100px;
            }
            main{
                height: 800px;
            }
        }

        @media (max-width:900px){
            .cabecalho{
                height: 130px;
                padding: 30px;
            }
            #nome, #sobrenome{
                width: 90%;
                margin-left: 0;
            }
            .descricao-background{
                display: none;
            }
            .cadrastar{
                width: 90%;
                margin: 0 auto;
                display: block;
            }
        }
        @media (max-width: 500px){
            .cabecalho{
                height: 300px;
            }
            .cabecalho .entrar{
                float: none;
                width: 90%;
                margin-top: 10px;
            }
            .cabecalho div{
                float: none;
                width: 90%;
            }
            .cabecalho h1{
                float: none;
            }
        }
`;