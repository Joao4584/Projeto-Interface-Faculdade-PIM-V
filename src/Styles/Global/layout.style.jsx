// * Modules * //
import styled, { css } from 'styled-components'; 


// * Styles * //
export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    background-color: #f8f8f8;
`;

export const SideBar = styled.div`
    width: 220px;
    height: 100%;


`;

export const Container = styled.div`
    width: calc(100% - 220px);
    position: relative;
    height: 100%;


    overflow-x: hidden;
   
`;

export const NavBar = styled.div`
    width: 100%;
    height: 70px;
    position: relative;


`;
