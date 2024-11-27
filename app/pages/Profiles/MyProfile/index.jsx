import { SafeAreaView, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import BottomBarTabs from '../../../components/Bars/BottomBarTabs';
import TopBarTabs from '../../../components/Bars/TopBarTabs';
import ExitModal from '../../../components/ExitModal';
import { useEffect, useState } from 'react';
import PhotoGrid from '../../../components/PhotoGrid';
import EditModal from '../../../components/EditModal';
import { useAuth } from '../../../Context/AuthContext';
import { useUser } from '../../../Context/UserContext';
import { getUser } from '../../../Services/userService';

export default function Profile() {
    const [exitVisible, setExitVisible] = useState(false); 
    const [addVisible, setAddVisible] = useState(false); 
    const [editVisible, setEditVisible] = useState(false); 
    const [isLoading, setIsLoading] = useState(true);

    const { auth } = useAuth();
    const { user, updateUser } = useUser();

    useEffect(() => {
        getUser(auth.id, auth.token, updateUser);
        setIsLoading(false);
    }, []);

    function openEditModal(){
        setEditVisible(true); 
    }

    return (
        <>
        { !isLoading ? (
        <SafeAreaView style={styles.background}>
            <TopBarTabs 
                atPage='Profile' 
                setAddVisible={setAddVisible} 
                setExitVisible={setExitVisible}
                addVisible={addVisible}
            />
            
            <View style={styles.pageContent}>
                <View style={styles.profileInfo}>
                    <Image source={user.profilePicture !== "" ? {uri: user?.profilePicture} : require('../../../assets/user.png')} style={styles.userImage}/>
                    <View style={styles.friendsPosts}>
                        <View>
                            <Text style={[styles.boldText, styles.centeredText]}> {user?.posts?.length || 0} </Text>
                            <Text style={[styles.text, styles.centeredText]}>posts</Text>
                        </View>
                        <View>
                            <Text style={[styles.boldText, styles.centeredText]}> {user?.friends?.length || 0} </Text>
                            <Text style={[styles.text, styles.centeredText]}>friends</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.infoEdit}>
                    <Text style={styles.boldText}>{user.username ? user.username : "user_name"}</Text>
                    <Text style={styles.text}>{user.description ? user.description : ""}</Text>
                    <Pressable style={styles.editButton} onPress={openEditModal}>
                        <Text style={styles.editText}>Edit profile</Text>
                    </Pressable>
                </View>
                <PhotoGrid 
                    photos = {user?.posts}
                />
                
                <ExitModal 
                    visible={exitVisible}
                    setVisible={setExitVisible}
                />
                <EditModal 
                    visible={editVisible}
                    setVisible={setEditVisible}
                />
            </View>
            <BottomBarTabs atPage='Profile' />
        </SafeAreaView>
        ) : (<Text> Loading... </Text>)}
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    pageContent: {
      flex: 1,
      marginTop: 70
    }, 
    userImage: {
        width: 100, 
        height: 100,
        borderRadius: 50
    }, 
    profileInfo: {
        marginLeft: 25,
        marginRight: 25,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'
    }, 
    friendsPosts: {
        display: 'flex', 
        flexDirection: 'row', 
        gap: 40,
        marginRight: 30
    }, 
    boldText: {
        fontWeight: 'bold',
        fontSize: 18
    }, 
    text: {
        fontSize: 18
    }, 
    centeredText: {
        alignSelf:'center'
    },
    editButton: {
        backgroundColor: '#cae9ff',
        marginTop: 30,
        padding: 8,
        borderRadius: 10
    }, 
    infoEdit: {
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25
    }, 
    editText: {
        alignSelf: 'center',
        fontSize: 16
    }
});