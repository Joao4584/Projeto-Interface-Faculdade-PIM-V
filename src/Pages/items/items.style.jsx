// * Modules * //
import styled, { css } from 'styled-components'; 


// * Styles * //
export const Container = styled.div`

    .containerlist{
        width: 100%;
        margin-top: 2rem;
        ul{
            list-style: none;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 10px;

            li{
                display: flex;
                width: 530px;
                height: 80px;
                background-color: #f3f3f3;
                border: solid 1px #7a7a7a;
                border-radius: 1rem;
                padding: 1rem;
                position: relative;
                img{
                    width: 50px;
                    margin-right: 3rem;
                }
                .d122{
                    width: 1rem;
                    height: 1rem;
                    background-color: red;
                    border-radius: 1rem;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 2rem;

                }
                .greenbtn{
                    background-color: green;
                }
            }
        }
    }
 

`;