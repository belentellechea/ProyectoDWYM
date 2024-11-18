import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { postAccount } from '../../Services/authService'
import { useAuth } from '../../Context/AuthContext';

export default function Register({navigation}) {
    const [show, setShow] = useState(false); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [username, setUsername] = useState("");

    const { updateAuth } = useAuth();

    function goToLogin() {
        navigation.navigate('Login');
    }

    function handleSubmit(event) {
        event.preventDefault();

        const account = {
            email: email,
            username: username,
            password: password
        }

        const success = postAccount(account, updateAuth);
        if (success) navigation.navigate("Home");
    }

    return (
        <ImageBackground
            source={require('../../assets/fondo.png')}  
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.registerContainer}>
                    <Image 
                         source={require('../../assets/createAccount.png')}
                         style={styles.createAccount}
                    />
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput 
                            placeholder='your.email@example.com'
                            style={styles.input}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />
                        <Text style={styles.inputText}>Username</Text>
                        <TextInput 
                            placeholder='your.username'
                            style={styles.input}
                            onChangeText={(text) => setUsername(text)}
                            value={username}
                        />
                        <Text style={styles.inputText}>Password</Text>
                        <View style={styles.passwordContainer}>
                        <TextInput 
                            placeholder='*****'
                            secureTextEntry={!show}
                            style={styles.input}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                        <Pressable onPress={() => setShow(!show)} style={styles.iconContainer}>
                            <Icon name={show ? 'eye-slash' : 'eye'} size={20} color="gray" />
                        </Pressable>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable style={[styles.button, styles.createButton]}>
                            <Text style={styles.buttonText} onPress={handleSubmit}>Create</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={goToLogin}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    }, 
    registerContainer: {
        height: '90%',
        width: '90%',
        padding: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        borderRadius: '20%',
        justifyContent: 'space-around',  
    }, 
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center'
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
    }, 
    inputText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    }, 
    buttonContainer: {
        alignItems: 'center',
        gap: 15
    }, 
    button: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        width: '100%'
    }, 
    buttonText: {
        alignSelf: 'center',
        fontSize: 18
    }, 
    createButton: {
        backgroundColor: 'pink'
    }, 
    iconContainer: {
        position: 'absolute',
        right: 15,
        top: 20
    }, 
    createAccount: {
        width: 280,
        height: 30, 
        alignSelf: 'center'
    }
})