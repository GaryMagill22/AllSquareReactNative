import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Touchable } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../assets/utils/colors';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';



const LoginScreen = () => {

    const [secureEntry, setSecureEntry] = useState(true);



    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("HOME");
        console.log("Back to Home");
    };




    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleBack} >
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
    text: {
        textAlign: 'center',
        fontSize: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: "white",
    },
    formContainer: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    backButtonWrapper: {
        marginVertical: 20,
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 50,
        color: colors.primary,
        fontWeight: 'bold',
    },
    formContainer: {
        marginTop: 20,
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
});