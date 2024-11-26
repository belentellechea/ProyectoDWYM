import { SafeAreaView,View, Text, TextInput, Image, StyleSheet, Pressable } from "react-native";
import TopBarTabs from "../../components/Bars/TopBarTabs";
import BottomBarTabs from "../../components/Bars/BottomBarTabs";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { uploadPost } from "../../Services/postService"
import { useUser } from "../../Context/UserContext";
import { useAuth } from "../../Context/AuthContext";


export default function AddPost2(){
    const route = useRoute();
    const { image } = route.params;
    const { addPost } = useUser();
    const { auth } = useAuth();

    const [addVisible, setAddVisible] = useState(true);
    const [caption, setCaption] = useState("");

    const navigation = useNavigation(); 

    function goToFeed(){
        navigation.navigate('Home');
    }

    function sharePost() {
        console.log("estoy en sharePost 1");
        uploadPost(image, caption, addPost, auth);
        goToFeed();
        console.log("estoy en sharePost 2");
    }

    return (
        <SafeAreaView style={styles.postContainer}>
            <TopBarTabs 
                atPage='AddPost' 
                setAddVisible={setAddVisible}
                addVisible={addVisible}
            />
            <View style={styles.pageContent}>
                <View style={styles.titleAndButtons}>
                    <Text style={styles.title}>Add a caption to your post</Text>
                    <TextInput
                       placeholder="Type here..." 
                       style={styles.input}
                       onChangeText={(text) => setCaption(text)}
                       value={caption}
                    />
                    <Image 
                        source={{ uri: image }}
                        style={styles.image}
                    />
                    <Pressable style={styles.uploadButton} onPress={sharePost}>
                        <View style={styles.upload}>
                            <Icon name='arrowup' size={20}/>
                            <Text style={styles.uploadText}>Post</Text>
                        </View>
                    </Pressable>
                </View>   
            </View>
            <BottomBarTabs atPage='AddPost'/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    pageContent: {
        flex: 1,
        marginTop: 45,
        marginLeft: 10, 
        marginRight: 10,
        marginBottom: 30,
        alignItems: 'center', 
        justifyContent: 'center'
    } ,
    buttonContainer: {
        display: 'flex', 
        flexDirection: 'row',
        gap: 30
    }, 
    title: {
        fontWeight: 'bold', 
        fontSize: 20
    }, 
    titleAndButtons: {
        display: 'flex',
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    image: {
        width: 250,
        height: 250
    }, 
    input: {
        backgroundColor: 'white',
        borderRadius: 50, 
        fontSize: 20,
        padding: 15,
        fontSize: 18,
        paddingRight: 40,
        width: 260,
        borderWidth: 1,
        borderColor: '#adb5bd'
    },
    upload: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    }, 
    uploadText: {
        fontSize: 18
    },
    uploadButton: {
        backgroundColor: '#cae9ff',
        padding: 15,
        borderRadius: 50
    }
});
