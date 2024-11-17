import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from '@expo/vector-icons/Foundation';
import * as ImagePicker from 'expo-image-picker';

export default function GalleryButton({setErrorMsg, setImage, setVisible, setShowSecondModal}) {
    
    async function pickImage() {
        let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permiso para acceder al álbum denegado');
            return;
        }
    
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: [ImagePicker.MediaType.Images],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
    
        if (!result.canceled) {
            setImage(result.assets[0].uri); 
            setVisible(false); 
            setShowSecondModal(true);  
        }
    }
    
    return (
        <View>
            <Pressable style={styles.button} onPress={pickImage}>
                <Icon name='photo' size={45} style={styles.icon} />
            </Pressable>
            <Text style={styles.text}>Gallery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#cae9ff',
        width: 80,
        height: 80,
        padding: 15, 
        borderRadius: 50, 
    }, 
    text: {
        alignSelf: 'center',
        marginTop: 8
    },
    icon: {
        alignSelf: 'center'
    }
})
