// * Modules * //
import React, {  } from 'react'
import { Routes,Route } from "react-router";

// * Exports * //
import { Home } from '../../Pages/Home';
import { Calendario } from '../../Pages/calendario';
import { ItemsComponent } from '../../Pages/items';
import * as Styled from '../../Styles/Global/layout.style';
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
 
// * Components * //
export function Layout(props) {

 return (
    <Styled.Layout>
      <Styled.SideBar>
         <SideBar />
      </Styled.SideBar>
      <Styled.Container>
         <Styled.NavBar>
            <NavBar />
         </Styled.NavBar>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/itens" element={<ItemsComponent />} />
        </Routes>
      </Styled.Container>
    </Styled.Layout>
 )
}