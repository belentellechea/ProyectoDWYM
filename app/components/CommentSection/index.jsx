import { View, StyleSheet, Text, TextInput, Pressable} from "react-native"
import Icon from '@expo/vector-icons/Feather';
import Comment from "../Comment";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { postComment } from "../../Services/postService";

export default function CommentSection({ post }){
    const { auth } = useAuth();
    const { updatePost } = useUser();

    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState("");

    async function publishComment() {
        console.log("commentt ",comment);
        console.log("post, ", post);
        const newComment = await postComment(post, auth, comment, updatePost);
        console.log("hola, se supone que acabo de comentar");
        setComments((prev) => [...prev, newComment]);
        //postComment(post, auth, comment, updatePost);
        setComment("");
    }

    useEffect(() => {
        setComments(post.comments);
    }, [post]);

    return (
        <View style={styles.commentsSection}>
            {comments?.map((comment) => (
                <Comment comment={comment} post={post}></Comment>
            ))}
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Add a comment...'
                    style={styles.input}
                    onChangeText={(text) => setComment(text)}
                    value={comment}
                />
                <Pressable onPress={publishComment}>
                    <Icon name='send' size={25}/>
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    commentsSection: {
        marginTop: 5,
        display: 'flex',
        gap: 10
    }, 
    boldText: {
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 50, 
        borderWidth: 1,
        borderColor: '#e5e5e5',
        padding: 10,
        flex: 1
    }, 
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 8
    }
})