import React, { useState } from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import {AsyncStorage} from '@react-native-async-storage/async-storage';

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

    const loadStoredAuth = async () => {
        const storedAuth = await AsyncStorage.getItem('auth');
        if (storedAuth) {
            return JSON.parse(storedAuth);
        }
    };

    const [auth, setAuth] = useState(() => {
        //const storedAuth = localStorage.getItem("auth");
        const storedAuth = loadStoredAuth();
        return storedAuth ? storedAuth : initialState;
    });


    const updateAuth = async (newAuth) => {
        try {
            setAuth(newAuth);
            await AsyncStorage.setItem('auth', JSON.stringify(newAuth));
        } catch (error) {
            console.error('Error al guardar auth:', error);
        }
        //localStorage.setItem('auth', JSON.stringify(newAuth));
    }

    const logOut = async () => {
        //localStorage.removeItem('auth');
        //localStorage.clear();
        try {
            console.log("asyncStorage1: ", AsyncStorage);
            await AsyncStorage.clear();
            console.log("asyncStorage: ", AsyncStorage);
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
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