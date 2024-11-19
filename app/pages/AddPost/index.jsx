import { Text, View, StyleSheet, SafeAreaView, Image, TextInput, ScrollView, Pressable } from "react-native";
import TopBarTabs from "../../components/Bars/TopBarTabs";
import BottomBarTabs from "../../components/Bars/BottomBarTabs";
import { useState } from "react";
import PhotoButton from '../../components/PhotoButton';
import GalleryButton from '../../components/GalleryButton';
import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function AddPost() {
    const [addVisible, setAddVisible] = useState(true);
    const [image, setImage] = useState(null); 
    const [errorMsg, setErrorMsg] = useState(null); 

    const navigation = useNavigation(); 

    function goToSecondPage(){
        navigation.navigate('AddPost2', { image });
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
                    <Text style={styles.title}>Select an option please</Text>
                    <View style={styles.buttonContainer}>
                        <PhotoButton
                            setErrorMsg={setErrorMsg}
                            setImage={setImage}
                        /> 
                        <GalleryButton
                            setErrorMsg={setErrorMsg}
                            setImage={setImage}
                        />
                    </View>
                    <View>
                        {errorMsg === null && image && (
                            <View style={styles.nextContainer}>
                                <Pressable onPress={goToSecondPage}>
                                    <View style={styles.next}>
                                        <Image 
                                            source={{ uri: image }}
                                            style={styles.image}
                                        />
                                        <Icon name='arrowright' size={35}/>
                                    </View>    
                                </Pressable>
                            </View>
                        )}
                        {errorMsg !== null && (
                            <View style={styles.errorContainer}>
                                <Icon name='warning' size={25} style={styles.warning}/>
                                <Text style={styles.errorText}>{errorMsg}</Text>
                            </View>
                        )}
                    </View>
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
        width: 80,
        height: 80
    }, 
    errorContainer: {
        backgroundColor: '#ffe5ec',
        padding: 20,
        borderRadius: 30, 
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        width: '80%'
    }, 
    warning: {
        color: '#9e2a2b'
    },
    errorText: {
        fontSize: 15,
        textAlign: 'center',
    }, 
    next: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#edf2fb',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 50,
    },
    nextContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%', 
        justifyContent: 'flex-end',
        paddingRight: 20
    }
});
