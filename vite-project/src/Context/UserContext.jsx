import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
    const initialState = {
        id: '',
        username: '',
        description: '',
        profilePicture: '',
        friends: [],
        posts: [],
    }

    const [user, setUser] = useState(initialState);

    const updateUser = (newUser) => {
        setUser(newUser);
    }

    useEffect(() => {
        console.log("User actualizado: ", user);
    }, [user]);

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    );
}