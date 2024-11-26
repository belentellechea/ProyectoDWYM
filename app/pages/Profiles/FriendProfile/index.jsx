import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, Image, ImageBackground} from 'react-native';
import TopBarTabs from '../../../components/Bars/TopBarTabs';
import { useState, useEffect } from 'react';
import CreatePostModal from '../../../components/CreatePostModal';
import BottomBarTabs from '../../../components/Bars/BottomBarTabs';
import PhotoGrid from '../../../components/PhotoGrid';
import { followFriend, getUser, unfollowFriend } from '../../../Services/userService';
import { useAuth } from '../../../Context/AuthContext';
import { useUser } from '../../../Context/UserContext';


export default function FriendProfile({ route }) {
    const { friend } = route.params;
    const { auth } = useAuth();
    const { user, addFriend, removeFriend, updateUser } = useUser();

    const [addVisible, setAddVisible] = useState(false);
    const [friendsPosts, setFriendsPosts] = useState([]);
    const [doIFollowThem, setDoIFollowThem] = useState(false);
    const [followers, setFollowers] = useState(friend?.friends?.length);

    const fetchFriend = async () => {
        try {
          const data = await getUser(friend._id, auth.token);
          setFriendsPosts(data.posts);
        } catch (error) {
          console.error("Error fetching friend:", error);
        }
      };

    useEffect(() => {
        fetchFriend();
        getUser(auth.id, auth.token, updateUser);

        const followUnfollow = user?.friends?.some((f) => f._id == friend._id);
        console.log("doIFollow them: ", followUnfollow);
        setDoIFollowThem(followUnfollow);
        setFollowers(friend?.friends?.length);
        console.log("friends friends: ", followers);
        console.log("friends.friends.length: ", friend?.friends?.length);
    }, []);

    async function followUnFollow() {
        if (doIFollowThem) {
            setFollowers(followers.length -1);
          await unfollowFriend(auth, friend, removeFriend);
          setDoIFollowThem(false);
          //setFollowers(friend.friends);
        } else {
          await followFriend(auth, friend, addFriend);
          setDoIFollowThem(true);
          //setFollowers(followers.length +1);
          setFollowers(friend.friends.length);
        }
    }

    useEffect(() => {
        console.log("followers: ", followers.length);
    }, [followers]);

    return (
        <SafeAreaView style={styles.background}>
            <TopBarTabs 
                atPage='FriendProfile'
                addVisible={addVisible}
                setAddVisible={setAddVisible}
            />
            <View style={styles.pageContent}>
            <View style={styles.profileInfo}>
                    <Image source={friend?.profilePicture !== "" ? {uri: friend?.profilePicture} : require('../../../assets/user.png')} style={styles.userImage}/>
                    <View style={styles.friendsPosts}>
                        <View>
                            <Text style={[styles.boldText, styles.centeredText]}> {friendsPosts?.length} </Text>
                            <Text style={[styles.text, styles.centeredText]}>posts</Text>
                        </View>
                        <View>
                            <Text style={[styles.boldText, styles.centeredText]}> {followers > 0 ? followers : 0} </Text>
                            {/* <Text style={[styles.boldText, styles.centeredText]}> {friend?.friends?.length} </Text> */}
                            <Text style={[styles.text, styles.centeredText]}>friends</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.infoEdit}>
                    <Text style={styles.boldText}> {friend?.username} </Text>
                    <Text style={styles.text}> {friend?.description} </Text>
                    <Pressable style={styles.editButton} onPress={followUnFollow}>
                        <Text style={styles.editText}> 
                            {doIFollowThem ? " unfollow " : " follow "}
                        </Text>
                    </Pressable>
                </View>
                <PhotoGrid 
                    photos={friendsPosts}
                />
            </View>
            <BottomBarTabs atPage='FriendProfile'/>
        </SafeAreaView>
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