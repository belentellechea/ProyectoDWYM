import { Text, View, StyleSheet, SafeAreaView, Image, TextInput } from "react-native"
import TopBarTabs from "../../components/Bars/TopBarTabs"
import BottomBarTabs from "../../components/Bars/BottomBarTabs"
import { useState } from "react"
import PhotoButton from '../../components/PhotoButton'
import GalleryButton from '../../components/GalleryButton'
import Icon from '@expo/vector-icons/AntDesign';

export default function Notifications(){
    const [addVisible, setAddVisible] = useState(true);
    const [image, setImage] = useState(null); 
    const [errorMsg, setErrorMsg] = useState(null); 

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
                        <View>
                            <Image 
                            source={{ uri: image }}
                            style={styles.image}
                            />
                            <TextInput 
                                placeholder='Enter your caption'
                                style={styles.input}
                            />
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
    )
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
    }, 
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
        width: 300,
        height: 300
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
    input: {
        backgroundColor: 'white',
        borderRadius: 15, 
        fontSize: 20,
        padding: 10,
        marginTop: 10,
        marginBottom: 25,
        fontSize: 20,
        paddingRight: 40,
        width: '100%'
    }
});