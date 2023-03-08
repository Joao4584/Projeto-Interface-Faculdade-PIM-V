// * Modules * //
import { BrowserRouter } from 'react-router-dom'

// * Exports * //
import { RoutesApp } from '../Routes/auth'
import { MainProvider } from './main.context'
 
// * Components * //
export default function App(props) {

 return (
   <BrowserRouter>
    <MainProvider>
        <RoutesApp />
    </MainProvider>
   </BrowserRouter>
 )
}