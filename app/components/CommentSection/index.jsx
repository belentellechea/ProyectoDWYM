import { View, StyleSheet, Text, TextInput, Pressable} from "react-native"
import Icon from '@expo/vector-icons/Feather';
import Comment from "../Comment";

export default function CommentSection(){
    return (
        <View style={styles.commentsSection}>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Add a comment...'
                    style={styles.input}
                />
                <Pressable>
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