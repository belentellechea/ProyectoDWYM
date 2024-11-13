import { SafeAreaView, View, Text, Alert, Modal, StyleSheet, Pressable } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';
import Icon2 from '@expo/vector-icons/Foundation';


export default function CreatePostModal ({visible, setVisible}) {
    
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <Pressable style={styles.centeredView} onPress={() => setVisible(!visible)}>
                <View style={styles.modalView}>
                    <View>
                        <Pressable style={styles.closeButton} onPress={() => setVisible(!visible)}>
                            <Icon name='close' size={20} />
                        </Pressable>
                    </View>
                    <Text style={styles.modalText}>Select an option please</Text>
                    <View  style={styles.buttonContainer}>
                        <View > 
                            <Pressable style={styles.button}>
                                <Icon name='camera' size={45} style={styles.icon}/>
                            </Pressable>
                            <Text style={styles.text}>Camera</Text>
                        </View>
                        <View>
                            <Pressable style={styles.button}>
                                <Icon2 name='photo' size={45} style={styles.icon}/>
                            </Pressable>
                            <Text style={styles.text}>Gallery</Text>
                        </View>
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
        flexDirection: 'row', 
        justifyContent: 'space-between'
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
    }
})