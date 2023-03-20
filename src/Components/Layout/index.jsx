// * Modules * //
import React, {  } from 'react'

// * Exports * //
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
         Container
      </Styled.Container>
    </Styled.Layout>
 )
}