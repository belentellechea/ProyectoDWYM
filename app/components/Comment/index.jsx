import { View, Text, StyleSheet, Pressable } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';

export default function Comment() {
    return (
        <View style={styles.comment}>
            <Text><Text style={styles.boldText}>friend_username</Text>  a comment</Text>
            <Pressable>
                <Icon name='trash-outline' size={18} style={styles.icon}/>
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