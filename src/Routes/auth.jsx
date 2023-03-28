import { Routes,Route } from "react-router";
import { Layout } from "../Components/Layout";
import { AuthPages } from "../Pages/Auth";


export function RoutesApp() {
    return(
        <Routes>
            <Route path="*" element={<Layout />} />
            <Route path="/login" element={<AuthPages />} />
        </Routes>
    )
}