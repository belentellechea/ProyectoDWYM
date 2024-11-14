import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoButton({setErrorMsg, setImage, setVisible, setShowSecondModal}) {
    async function takePhoto() {
        let { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permiso para acceder a la cámara denegado');
          return;
        }
    
        let result = await ImagePicker.launchCameraAsync({
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
            <Pressable style={styles.button} onPress={takePhoto}>
                <Icon name='camera' size={45} style={styles.icon} />
            </Pressable>
            <Text style={styles.text}>Camera</Text>
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
