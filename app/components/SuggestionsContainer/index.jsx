import { View, Text, StyleSheet, ScrollView } from "react-native";
import SuggestionCard from "../SuggestionCard";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { getAllProfiles } from "../../Services/userService";
import { useEffect, useState } from "react";

export default function SuggestionsContainer({profiles}){
    const { auth } = useAuth();
    const { user } = useUser();

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
        fetchAllUsers();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.suggestionText}>Suggestions for you...</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
                {profiles?.map((profile) => (
                    <SuggestionCard profile={profile}/>
                ))}
            </ScrollView> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        gap: 10,
        height: 240,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        paddingRight: 200,
    }, 
    suggestionText: {
        color: '#0077b6',
        fontWeight: 'bold',
        fontSize: 16
    }
})