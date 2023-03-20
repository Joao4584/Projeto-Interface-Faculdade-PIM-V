// * Modules * //
import styled, { css } from 'styled-components'; 


// * Styles * //
export const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    .sideBar{
        width: 96%;
        height: 100%;
        background-color: #023d71;
        border-top-right-radius: 1.8rem;

        .imageLogo{
            width: 100%;
            height: 130px;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 69%;
            }
        }

        .contentSide{
            width: 100%;
            position: relative;
         
            .ant-menu{
                background-color: transparent;
                padding: 0;
                margin: 0;

                .ant-menu-item{
                    width: 100%;
                    margin: 0;
                    border-radius: 0;
                    border-top-right-radius: .3rem;
                    border-bottom-right-radius: .3rem;
                    color: #d4d4d4;
                    
                }
                .ant-menu-item-selected{
                    background-color: #12559c; 
                    color: #fafafa;
                   
                
                }
            }
        }
    }

`;