import { SafeAreaView, View, Text, Alert, Modal, StyleSheet, Pressable } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../../Context/AuthContext";

export default function ExitModal ({visible, setVisible}) {
    const navigation = useNavigation();

    const { auth, logOut } = useAuth();

    function goToLogin(){
        setVisible(false)
        navigation.navigate('Login')
    }

    function logingOut() {
        console.log("auth antes: ", auth);
        logOut();
        goToLogin();
        console.log("auth después de log out: ", auth);
    }
    
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
                    <Text style={styles.modalText}>Do you wish to log out?</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={logingOut} style={styles.yesButton}>
                            <Text style={styles.buttonText}>Yes</Text>
                        </Pressable>
                        <Pressable style={styles.noButton} onPress={() => setVisible(!visible)}>
                            <Text style={styles.buttonText}>No</Text>
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
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
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
    yesButton: {
        backgroundColor: '#cae9ff',
        borderRadius: 50,
        padding: 15,  
    }, 
    noButton: {
        backgroundColor: '#e9ecef',
        borderRadius: 50,
        padding: 15, 
    }
})