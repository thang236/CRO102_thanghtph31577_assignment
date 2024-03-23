import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, Image } from 'react-native'
import React, { useState } from 'react'

import logo from '../image/logo.png';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        navigation.navigate('Main');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.innerContainer}>
                    <Image style={styles.anh} source={logo} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to Coffee shope</Text>
                    <Text style={{ fontSize: 19, marginTop: 10, marginBottom: 30 }}>Login to continue</Text>

                    <TextInput
                        placeholder='Username'
                        style={styles.input}
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry
                    />

                    {errorMessage !== '' && (
                        <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
                    )}

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 100 }}
                        onPress={() => {
                            navigation.navigate('Register');
                            setUsername('');
                            setPassword('');
                            setErrorMessage('');
                        }}
                    >
                        <Text>If you don't have an account?  </Text>
                        <Text style={{ color: '#35C2C1' }}>Register now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text>Forgot Password?</Text>
                        <Text style={{ color: '#35C2C1' }}> Click to reset Password</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    innerContainer: {
        width: '80%',
        alignItems: 'center',
    },
    anh: {
        height: 300,
        width: 300,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 44,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
    },
    loginButton: {
        backgroundColor: '#7A4723',
        borderRadius: 20,
        marginTop: 20,
        padding: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',

    },
})