import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../assets/utils/colors';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';




const LoginScreen = () => {

    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);
    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordVerify, setConfirmPasswordVerify] = useState(false);



    const auth = FIREBASE_AUTH;


    const signIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your emails!');
        } catch (error) {
            console.log(error);
            alert('Sign-In Failed: ' + error.message);
        } finally {
        }
    };

    const handleGoBack = () => {
        navigation.goBack();
        console.log("Go Back Button Pressed");
    };

    const handleSignup = () => {
        navigation.navigate("SIGNUP");
        console.log("Signup Button Pressed");
    };


    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack} >
                <FontAwesomeIcon style={styles.arrow} icon={faArrowLeft} />
            </TouchableOpacity>
            <View style={styles.textContainer} >
                <Text style={styles.headingText} >Hey,</Text>
                <Text style={styles.headingText} >Welcome</Text>
                <Text style={styles.headingText} >Back</Text>
            </View>
            {/* Form  */}
            <View style={styles.formContainer} >
                <View style={styles.inputContainer} >
                    <FontAwesomeIcon style={styles.envelope} icon={faEnvelope} />
                    <TextInput
                        syle={styles.textInput}
                        placeholder="Enter your email"
                        palaceholderTextColor={colors.secondary}
                        keyboardType='email-adress'
                    />
                </View>
                <View style={styles.inputContainer} >
                    <FontAwesomeIcon icon={faLock} style={styles.lock} />
                    <TextInput
                        syle={styles.textInput}
                        placeholder="Enter your password"
                        palaceholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setSecureEntry((prev) => !prev)
                        }}
                    >
                        <FontAwesomeIcon style={styles.eye} icon={faEye} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity >
                <Text style={styles.forgotPasswordText} >Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={signIn} style={styles.loginbuttonWrapper}>
                <Text style={styles.loginText} >Login</Text>
            </TouchableOpacity>
            <Text style={styles.continueText} >or continue with</Text>
            <TouchableOpacity style={styles.googleButtonContainer} >
                <Image 
                source={require("../assets/images/google-icon.png")} 
                style={styles.googleIcon} 
                />
                <Text style={styles.googleText} >Google</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
                <Text style={styles.accountText} >Don't have an account?</Text>
                <TouchableOpacity onPress={handleSignup} >
                <Text style={styles.signupText}  >Sign up</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}



export default LoginScreen;


const styles = StyleSheet.create({
    arrow: {
        width: 60,
        height: 60,
        marginVertical: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        elevation: 3,
    },
    formContainer: {
        // marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    backButtonWrapper: {
        marginVertical: 10,
    },
    textContainer: {
        marginVertical: 10,
    },
    headingText: {
        fontSize: 40,
        color: colors.primary,
        fontWeight: 'bold',
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        height: 40,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 15,
        fontFamily: 'Roboto',

    },
    envelope: {
        width: 20,
        height: 20,
        marginRight: 10,
        color: "darkgrey",
    },
    lock: {
        width: 20,
        height: 20,
        marginRight: 10,
        color: "darkgrey",
    },
    eye: {
        marginHorizontal: 120,
        width: 20,
        height: 20,
        color: "darkgrey",
    },
    forgotPasswordText: {
        textAlign: "right",
        fontWeight: "bold",
    },
    loginbuttonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginTop: 20,
    },
    loginText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 13,
    },
    continueText: {
        textAlign: 'center',
        marginVertical: 10,
        color: colors.darkGray,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: "regular",
    },
    googleButtonContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
    },
    googleIcon: {
        width: 30,
        height: 30,
    },
    googleText: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 3,

    },
    accountText: {
        color: colors.primary,
        fontFamily: "regular",
    },
    signupText: {
        color: colors.primary,
        fontWeight: "bold",
    },
});