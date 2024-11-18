import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import TopBarTabs from "../../components/Bars/TopBarTabs"
import BottomBarTabs from "../../components/Bars/BottomBarTabs"
import { useState } from "react"
import PhotoButton from '../../components/PhotoButton'
import GalleryButton from '../../components/GalleryButton'


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
                <Text>Select an option please</Text>
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
    }
});