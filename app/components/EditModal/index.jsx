import {View, Text, Modal, StyleSheet, Pressable, TextInput } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function EditModal ({visible, setVisible}) {
    const navigation = useNavigation();
    
    return(
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
                    <Text style={styles.modalTitle}>Edit profile</Text>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.inputText}>Profile photo</Text>
                            <TextInput  style={styles.input}/>
                        </View>
                        <View>
                            <Text style={styles.inputText}>Username</Text>
                            <TextInput  style={styles.input}/>
                        </View>
                        <View>
                            <Text style={styles.inputText}>Description</Text>
                            <TextInput  style={styles.input}/>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={() => setVisible(!visible)} style={styles.saveButton}>
                            <Text style={styles.buttonText}>Save changes</Text>
                        </Pressable>
                        <Pressable onPress={() => setVisible(!visible)} style={styles.cancelButton}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
        width: '90%'
    },
    modalTitle: {
        textAlign: 'center',
        fontWeight: 'bold', 
        fontSize: 20
    },
    closeButton: {
        alignSelf: 'flex-end'
    }, 
    buttonContainer: {
        display: 'flex', 
        gap: 15
    },
    text: {
        alignSelf: 'center',
        marginTop: 8
    }, 
    buttonText: {
        alignSelf: 'center'
    }, 
    saveButton: {
        backgroundColor: '#cae9ff',
        borderRadius: 50,
        padding: 15,  
    }, 
    cancelButton: {
        backgroundColor: '#e9ecef',
        borderRadius: 50,
        padding: 15, 
    }, 
    input: {
        borderColor: 'grey',
        borderWidth: 1, 
        height: 50, 
        borderRadius: 50,
        paddingLeft: 15,
        paddingRight: 15
    }, 
    inputContainer: {
        gap: 25
    }, 
    inputText: {
        fontWeight: 'bold', 
        fontSize: 17,
        marginLeft: 5,
        marginBottom: 5
    }
})