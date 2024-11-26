import { View, Text, StyleSheet, Pressable } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { deleteComment, getSpecificComment } from "../../Services/postService";
import { useState, useEffect } from "react";

export default function Comment({ comment, post}) {
    const { auth } = useAuth();
    const { updatePost } = useUser();

    const [comm, setComm] = useState({});

    const fetchComment = async () => {
        const commentt = await getSpecificComment(comment, auth);
        setComm(commentt);
        console.log("COMM ",comm);
    }

    useEffect(() => {
        console.log("auth en comment: ", auth);
        fetchComment();
    }, []);

    return (
        <View style={styles.comment}>
            <Text><Text style={styles.boldText}>{comm?.user?.username}</Text> {comm?.content} </Text>
            <Pressable>
                <Icon name='trash-outline' size={18} style={styles.icon} onPress={() => deleteComment(post, comm, updatePost)}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold'
    }, 
    comment: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    icon: {
        color: '#74121d'
    }
})