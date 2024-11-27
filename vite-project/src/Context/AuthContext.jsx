import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

// Función que permite usar el contexto y sus funciones en los componentes.
export function useAuth() {
    return useContext(AuthContext);
}


// Componente que se va a renderizar como contexto global.
export const AuthProvider = ({ children }) => {
    const initialState = {
        token: "",
        id: ""
    }

    const [auth, setAuth] = useState(() => {
        const storedAuth = localStorage.getItem("auth");
        return storedAuth ? JSON.parse(storedAuth) : initialState;
    });

    const updateAuth = (newAuth) => {
        setAuth(newAuth);
        localStorage.setItem('auth', JSON.stringify(newAuth));
    }

    const logOut = () => {
        localStorage.clear();
    }

    // Utiliza useEffect para confirmar la actualización de auth
    useEffect(() => {
        console.log("Auth actualizado:", auth);
    }, [auth]);

    return (
        <AuthContext.Provider value={{auth, updateAuth, logOut}}>
            {children}
        </AuthContext.Provider>
    );
}