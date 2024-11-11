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

    const updateFriends = (newFriendsList) => {
        const provisionalUser = {
            id: user?.id,
            username: user?.username,
            description: user?.description,
            profilePicture: user?.profilePicture,
            friends: newFriendsList,
            posts: user?.posts,
        };

        updateUser(provisionalUser);
    }

    const removeFriend = (exFriend) => {
        const newFriendsList = user?.friends.filter((item) => item.username != exFriend.username);
        updateFriends(newFriendsList);
    }

    const addFriend = (newFriend) => {
        const newFriendsList = [...user?.friends, newFriend];
        updateFriends(newFriendsList);
    }

    const updatePosts = (newPostsList) => {
        const provisionalUser = {
            id: user?.id,
            username: user?.username,
            description: user?.description,
            profilePicture: user?.profilePicture,
            friends: user?.posts,
            posts: newPostsList,
        };

        updateUser(provisionalUser);
    }

    const addPost = (newPost) => {
        const newPostsList = [...user?.posts, newPost];
        updatePosts(newPostsList);
    }

    const updatePost = (oldPost, updatedPost) => {
        if (oldPost.user == user) {
            const newPostsList = user?.posts?.map((post) => {post._id == oldPost._id ? updatedPost : post});
            updatePosts(newPostsList);
        } 
    }

    useEffect(() => {
        console.log("User actualizado: ", user);
    }, [user]);

    return (
        <UserContext.Provider value={{user, updateUser, updatePost, addPost, addFriend, removeFriend}}>
            {children}
        </UserContext.Provider>
    );
}