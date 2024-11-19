import { StyleSheet, ScrollView } from "react-native";
import Post from "../Post";
import SuggestionsContainer from "../SuggestionsContainer";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { getFeed } from "../../Services/postService";
import { useEffect, useState } from "react";
import { getAllProfiles } from "../../Services/userService";

export default function PostContainer( ){
//se puede optimizar a FlatList para que solo se 
//renderizen los elementos en pantalla
    const { auth } = useAuth();
    const { user } = useUser();

    const [feed, setFeed] = useState([]);

    const fetchFeed = async () => {
        try {
            const data = await getFeed(auth);
            console.log("fetch feed postContainer", data);
            setFeed(data);
        } catch (error) {
            console.error("Error fetching feed:", error);
        }
    }

    const [allUsers, setAllUsers] = useState([]);
    
    const fetchAllUsers = async () => {
        try {
            const data = await getAllProfiles(auth);
            setAllUsers(data);
        } catch (error) {
            console.error("Error fetching all users:", error);
        }
    }

    useEffect(() => {
        fetchFeed();
        fetchAllUsers();
    }, []);

    return ( 
        <ScrollView>
            <SuggestionsContainer profiles={allUsers?.filter((profile) => profile._id !== user.id)}></SuggestionsContainer>
            {feed?.map((post) => (
                <Post post={post} profiles={allUsers}/>
            ))}
        </ScrollView>
    )
}

