import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Login({navigation}) {
    const [show, setShow] = useState(false); 

    function goToHome() {
        navigation.navigate('Home'); 
    }

    function goToRegister() {
        navigation.navigate('Register')
    }

    return (
        <ImageBackground
            source={require('../../assets/fondo.png')}  
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../../assets/Logo.png')}
                        resizeMode="cover"
                    />
                    <Text style={styles.name}>Fakestagram</Text>
                    <Text style={styles.inputText}>Email</Text>
                    <TextInput 
                        placeholder='your.email@example.com'
                        style={styles.input}
                    />
                    <Text style={styles.inputText}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput 
                            placeholder='*****'
                            secureTextEntry={!show}
                            style={styles.input}
                        />
                        <Pressable onPress={() => setShow(!show)} style={styles.iconContainer}>
                            <Icon name={show ? 'eye-slash' : 'eye'} size={20} color="gray" />
                        </Pressable>
                    </View>
                    <View style={styles.signIn}>
                        <Pressable onPress={goToHome} style={styles.signInButton}>
                            <Text style={styles.signInText}>Sign in</Text>
                        </Pressable>
                        <Text style={styles.orText}>or</Text>
                        <Text style={styles.createAccount}>Create account <Text onPress={goToRegister} style={styles.hyperlink}>here</Text></Text>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    ); 
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
    loginContainer: {
        height: '90%',
        width: '90%',
        padding: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        borderRadius: '20%',
        justifyContent: 'center',
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
    logo: {
        width: 82,
        height: 63,
        alignSelf: 'center',
        transform: [{rotate: '15deg'}],
        marginBottom: 5
    }, 
    name: {
        fontWeight: 'bold', 
        fontSize: 35,
        alignSelf: 'center', 
        marginBottom: 80
    },
    signIn: {
        alignSelf: 'center',
        marginTop: 50
    }, 
    signInButton: {
        backgroundColor: 'pink',
        padding: 15,
        borderRadius: 15,
        width: 150
    }, 
    signInText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    }, 
    orText: {
        fontSize: 16, 
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 15
    }, 
    createAccount: {
        fontSize: 18
    }, 
    hyperlink: {
        color: 'blue', 
        textDecorationLine: 'underline'
    },
    passwordContainer: {
        position: 'relative',
        width: '100%',
    },
    iconContainer: {
        position: 'absolute',
        right: 15,
        top: 20,
    }

}); 