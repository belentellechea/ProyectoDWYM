import { StyleSheet, ScrollView } from "react-native";
import Post from "../Post";
import SuggestionsContainer from "../SuggestionsContainer";

export default function PostContainer( ){
//se puede optimizar a FlatList para que solo se 
//renderizen los elementos en pantalla
    return ( 
        <ScrollView>
            <SuggestionsContainer></SuggestionsContainer>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </ScrollView>
    )
}

