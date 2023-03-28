// * Modules * //
import React, {  } from 'react'
import { Container } from './items.style'

// * Exports * //
 
 
// * Components * //

export function ItemsComponent(props) {

 return (
    <Container>
      <h3>Lista De Equipamentos</h3>
      
      <div className="containerlist">
         <ul>
            <li>
               <img src="https://cdn.discordapp.com/attachments/978478233005748264/1090064540332478546/images.png" alt="" />
               <div className="flex-case">
                  <p>Item: Projetor</p>
                  <p>Professor: Lucas Benevit</p>
               </div>
               <div className="d122">
                  <i></i>
               </div>
               
            </li>
            <li>
               <img src="https://cdn.discordapp.com/attachments/978478233005748264/1090064967295832204/images.png" alt="" />
               <div className="flex-case">
                  <p>Item: Caixa De Som</p>
                  <p>Professor: Leticia Silva</p>
               </div>
               <div className="d122 ">
                  <i></i>
               </div>
               
            </li>
            <li>
               <img src="https://cdn.discordapp.com/attachments/978478233005748264/1090065304383651850/images.png" alt="" />
               <div className="flex-case">
                  <p>Item: TV 4K</p>
                  <p>Professor: Walef Android</p>
               </div>
               <div className="d122">
                  <i></i>
               </div>
            </li>
            <li>
               <img src="https://cdn.discordapp.com/attachments/978478233005748264/1090065675160146040/6c714bf93ebada30f0ae1c6bbe2d97de.jpg" alt="" />
               <div className="flex-case">
                  <p>Item: Sala De Video</p>
                  <p>Professor: </p>
               </div>
               <div className="d122 greenbtn">
                  <i></i>
               </div>
            </li>
            <li>
               <img src="https://cdn.discordapp.com/attachments/978478233005748264/1090065304383651850/images.png" alt="" />
               <div className="flex-case">
                  <p>Item: TV Full HD</p>
                  <p>Professor: </p>
               </div>
               <div className="d122 greenbtn">
                  <i></i>
               </div>
            </li>
            <li>
               <img src="https://cdn.discordapp.com/attachments/978478233005748264/1090065995479142410/microscope-cartoon-icon-isolated-on-a-white-vector-15650566.jpg" alt="" />
               <div className="flex-case">
                  <p>Item: NomeDoMaterial</p>
                  <p>Professor: </p>
               </div>
               <div className="d122 greenbtn">
                  <i></i>
               </div>
            </li>
         </ul>
      </div>
    </Container>
 )
}