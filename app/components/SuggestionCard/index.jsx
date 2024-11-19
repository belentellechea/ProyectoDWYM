import { View, StyleSheet, Text, TouchableOpacity, Pressable, Image  } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

export default function SuggestionCard({ profile }){
    const navigation = useNavigation();

    function goToFriendProfile(){
        navigation.navigate('FriendProfile', {friend: profile});
    }

    return (
        <View style={styles.card}> 
            <Pressable style={styles.closeButton}>
                <Icon name='close' size={15} />
            </Pressable>
            <Image source={profile?.profilePicture ? {uri: profile?.profilePicture} : require('../../assets/user.png')} style={styles.userImage}/>
            <Text style={styles.username}>{profile?.username ? profile.username : "username"}</Text>
            <TouchableOpacity style={styles.viewButton} onPress={goToFriendProfile}>
                <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 20, 
        borderWidth: 1,
        borderColor: '#adb5bd',
        borderRadius: 15,
        gap: 5, 
        width: '20%',
        width: 140,
        height: 185,
    },
    userImage: {
        width: 70,
        height: 70, 
        borderRadius: 50
    }, 
    username: {
        fontWeight: 'bold'
    }, 
    viewButton: {
        width: '100%',
        marginTop: 8,
        backgroundColor: '#cae9ff',
        padding: 10,
        borderRadius: 15
    }, 
    viewText: {
        alignSelf: 'center'
    }, 
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 5
    }
})