import { View, StyleSheet, Text, TextInput, Pressable} from "react-native"
import Icon from '@expo/vector-icons/Feather';

export default function CommentSection(){
    return (
        <View style={styles.commentsSection}>
            <Text><Text style={styles.boldText}>friend_username</Text>  a comment </Text>
            <Text><Text style={styles.boldText}>friend_username</Text>  a comment</Text>
            <Text><Text style={styles.boldText}>friend_username</Text>  a comment</Text>
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
        gap: 4
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