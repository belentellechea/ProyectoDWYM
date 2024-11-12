import { View, StyleSheet, Text, Image } from "react-native"

export default function Notification() {
    return (
        <View style={styles.notificationContainer}>
            <Image source={require('../../assets/user.png')} style={styles.userImage}/>
            <Text><Text style={styles.boldText}>username</Text>  liked your post</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 60,
        height: 60
    }, 
    boldText: {
        fontWeight: 'bold'
    }, 
    notificationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        gap: 10
    }
})