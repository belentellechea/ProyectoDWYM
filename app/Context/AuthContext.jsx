import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    }

    const logOut = async () => {
        try {
            setAuth(initialState);
            await AsyncStorage.clear();
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