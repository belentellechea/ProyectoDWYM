import { View, Text, Modal, StyleSheet, Pressable, Image } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';
import Icon2 from '@expo/vector-icons/Foundation';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import SecondCreatePostModal from "../SecondCreatePostModal";

export default function CreatePostModal ({visible, setVisible}) {
    const [image, setImage] = useState(null); 
    const [errorMsg, setErrorMsg] = useState(null);
    const [showSecondModal, setShowSecondModal] = useState(false);  

    async function pickImage() {
        let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permiso para acceder al álbum denegado');
            return;
        }
    
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaType.Photo,
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
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <Pressable style={styles.centeredView} onPress={() => setVisible(!visible)}>
                    <View style={styles.modalView}>
                        <Pressable style={styles.closeButton} onPress={() => setVisible(!visible)}>
                            <Icon name='close' size={20} />
                        </Pressable>
                        <Text style={styles.modalText}>Select an option please</Text>
                        <View style={styles.buttonContainer}>
                            <View>
                                <Pressable style={styles.button} onPress={takePhoto}>
                                    <Icon name='camera' size={45} style={styles.icon} />
                                </Pressable>
                                <Text style={styles.text}>Camera</Text>
                            </View>
                            <View>
                                <Pressable style={styles.button} onPress={pickImage}>
                                    <Icon2 name='photo' size={45} style={styles.icon} />
                                </Pressable>
                                <Text style={styles.text}>Gallery</Text>
                            </View>
                        </View>
                        {errorMsg && 
                            <View style={styles.errorContainer}>
                                <Icon3 name='warning' size={25} style={styles.warning}/>
                                <Text style={styles.errorText}>{errorMsg}</Text>
                            </View>}
                    </View>
                </Pressable>
            </Modal>
            {showSecondModal && (
                <SecondCreatePostModal
                    visible2={showSecondModal}
                    setVisible2={setShowSecondModal}
                    image={image} 
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        gap: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        textAlign: 'center',
        fontWeight: 'bold', 
        fontSize: 18
    },
    closeButton: {
        alignSelf: 'flex-end'
    }, 
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    }, 
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
    }, 
    errorContainer: {
        backgroundColor: '#ffcad4',
        padding: 20,
        borderRadius: 30, 
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }, 
    warning: {
      color: '#9e2a2b'
    },
    errorText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    }
})
