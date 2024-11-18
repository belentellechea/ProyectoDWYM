import React, { useState } from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

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

    // const decodeToken = (storedAuth) => {
    //     //const token = JSON.parse(storedAuth).token;
    //     try {
    //         const parsedAuth = JSON.parse(storedAuth);
    //         token = parsedAuth.token || storedAuth;
    //         const decoded = jwtDecode(token);
    //         console.log("Token decodificado:", decoded);
    //         return decoded;
    //     } catch (error) {
    //         console.error("Error al decodificar el token:", error.message);
    //     }
    // }

    const [auth, setAuth] = useState(() => {
        const storedAuth = localStorage.getItem("auth");
        return storedAuth ? JSON.parse(storedAuth) : initialState;
    });

    const updateAuth = (newAuth) => {
        setAuth(newAuth);
        // console.log("storaged auth in context: ", newAuth);
        // console.log(decodeToken(newAuth.token));
        localStorage.setItem('auth', JSON.stringify(newAuth));
    }

    const logOut = () => {
        //localStorage.removeItem('auth');
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