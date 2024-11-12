import { View, Text, StyleSheet, ScrollView } from "react-native";
import SuggestionCard from "../SuggestionCard";

export default function SuggestionsContainer(){
    return (
        <View style={styles.container}>
            <Text style={styles.suggestionText}>Suggestions for you...</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
            </ScrollView> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        gap: 10
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        paddingRight: 200
    }, 
    suggestionText: {
        color: '#0077b6',
        fontWeight: 'bold',
        fontSize: 16
    }
})