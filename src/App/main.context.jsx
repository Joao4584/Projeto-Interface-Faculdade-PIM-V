// * Modules * //
import { createContext, useEffect, useState, useRef, useReducer } from "react";
import { useNavigate } from 'react-router-dom';

// * Exports * //
import { useLocalStorage } from "../Hooks/useLocalStorage";


const MainContext = createContext();

function MainProvider({ children }) {
    const navigate = useNavigate();
    
    const [authenticated, setAuthenticated] = useState(false);

    const [clientAuthStorage, setClientAuthStorage] = useLocalStorage("client-auth");

    useEffect(()=>{
        verificationAuth();
        const verif = setInterval(() => { verificationAuth(); }, 290000);
        return () => {
            clearInterval(verif);
        }
    }, []);

    const verificationAuth = () => {
        if(clientAuthStorage != true){
            navigate('/login');
        }
    }

    const exports = {
        clientAuthStorage,
        setClientAuthStorage
    };

    return (
        <MainContext.Provider value={exports}>
            {children}
        </MainContext.Provider>
    );
}

export { MainContext, MainProvider };