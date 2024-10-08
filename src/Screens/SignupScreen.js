import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView, Error, Feather } from 'react-native';
import { useState, onChange } from 'react';
import { colors } from '../assets/utils/colors';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faEnvelope, faLock, faEye, faUser, faGolfBallTee, faAddressCard, faIdCard, faExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';

const SignupScreen = () => {

    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);
    // const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [firstNameVerify, setFirstNameVerify] = useState(false);
    const [lastName, setLastName] = useState('');
    const [lastNameVerify, setLastNameVerify] = useState(false);
    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [username, setUsername] = useState('');
    const [usernameVerify, setUsernameVerify] = useState(false);
    const [handicap, setHandicap] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordVerify, setConfirmPasswordVerify] = useState(false);

    const auth = FIREBASE_AUTH;


    // FORM VALIDATIONS 
    const handleFirstName = (e) => {
        const firstName = e.nativeEvent.text;
        setFirstName(firstName);
        setFirstNameVerify(false);
        if (firstName.length > 2) {
            setFirstNameVerify(true);
        }
        // console.log(e.nativeEvent.text);
    };

    const handleLastName = (e) => {
        const lastName = e.nativeEvent.text;
        setLastName(firstName);
        setLastNameVerify(false);
        if (lastName.length > 2) {
            setLastNameVerify(true);
        }
        // console.log(e.nativeEvent.text);
    };

    const handleEmail = (e) => {
        const email = e.nativeEvent.text;
        setEmail(email);
        setEmailVerify(false);
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmail(email);
            setEmailVerify(true);
        }
    };

    const handleUsername = (e) => {
        const username = e.nativeEvent.text;
        setUsername(username);
        setUsernameVerify(false);
        if (/^[a-zA-Z0-9]{5,}$/.test(username)) {
            setUsername(username);
            setUsernameVerify(true);
        }
    };

    const handleHandicap = (e) => {
        const handicap = e.nativeEvent.text;
        setHandicap(handicap);
        // console.log(e.nativeEvent.text);
    };


    const handlePassword = (e) => {
        const password = e.nativeEvent.text;
        setPassword(password);

        // Validate password immediately
        if (password.length < 8) {
            setConfirmPasswordVerify('Password must be at least 8 characters long.');
        } else if (password !== confirmPassword) {
            setConfirmPasswordVerify('Passwords do not match.');
        } else {
            setConfirmPasswordVerify('');
        }
    };


    

    const signUp = async () => {
        // setLoading(true);
        setPassword(password);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your emails!');
        } catch (error) {
            console.log(error);
            alert('Registration Failed: ' + error.message);
        } finally {
            // setLoading(false);
        }
    };

    // handles when user click "back" arrow
    const handleGoBack = () => {
        navigation.goBack();
    };

    // handles when user click "login" text 
    const handleLogin = () => {
        navigation.navigate("LOGIN");
    }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
            <View style={styles.container} >
                <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack} >
                    <FontAwesomeIcon style={styles.arrow} icon={faArrowLeft} />
                </TouchableOpacity>
                <View style={styles.textContainer} >
                    <Text style={styles.headingText} >Lets get</Text>
                    <Text style={styles.headingText} >Started</Text>
                </View>
                {/* Form  */}
                <View style={styles.formContainer} >
                    <View style={styles.inputContainer} >
                        <FontAwesomeIcon style={styles.envelope} icon={faAddressCard} />
                        <TextInput
                            syle={styles.textInput}
                            placeholder="First Name"
                            palaceholderTextColor={colors.secondary}
                            keyboardType='first-name'
                            name="firstName"
                            onChange={e => handleFirstName(e)}
                        />
                        {firstName.length < 1 ? null : firstNameVerify ? (
                            <FontAwesomeIcon style={styles.errorIcon} icon={faCheck} color="green" size={20} />
                        ) : (
                            <FontAwesomeIcon style={styles.errorIcon} icon={faExclamation} color="red" size={20} />
                        )}
                    </View>
                    {firstName.length < 1 ? null : firstNameVerify ? null : (
                        <Text style={styles.errorMessage}>
                            First Name must be atleast 3 characters.
                        </Text>
                    )}
                    <View style={styles.inputContainer} >
                        <FontAwesomeIcon style={styles.envelope} icon={faIdCard} />
                        <TextInput
                            syle={styles.textInput}
                            placeholder="Last Name"
                            palaceholderTextColor={colors.secondary}
                            keyboardType='last-name'
                            name="lastName"
                            onChange={e => handleLastName(e)}
                        />
                        {lastName.length < 1 ? null : lastNameVerify ? (
                            <FontAwesomeIcon style={styles.errorIcon} icon={faCheck} color="green" size={20} />
                        ) : (
                            <FontAwesomeIcon style={styles.errorIcon} icon={faExclamation} color="red" size={20} />
                        )}
                    </View>
                    {lastName.length < 1 ? null : lastNameVerify ? null : (
                        <Text style={styles.errorMessage}>
                            Last Name must be atleast 3 characters.
                        </Text>
                    )}
                    <View style={styles.inputContainer} >
                        <FontAwesomeIcon style={styles.envelope} icon={faEnvelope} />
                        <TextInput
                            syle={styles.textInput}
                            placeholder="Email Address"
                            palaceholderTextColor={colors.secondary}
                            keyboardType='email-adress'
                            onChange={e => handleEmail(e)}
                        />
                        {email.length < 1 ? null : emailVerify ? (
                            <FontAwesomeIcon style={styles.errorIcon} icon={faCheck} color="green" size={20} />
                        ) : (
                            <FontAwesomeIcon style={styles.errorIcon} icon={faExclamation} color="red" size={20} />
                        )}
                    </View>
                </View>
                {email.length < 1 ? null : emailVerify ? null : (
                    <Text style={styles.errorMessage}>
                        Enter valid email address.
                    </Text>
                )}
                <View style={styles.inputContainer} >
                    <FontAwesomeIcon icon={faUser} style={styles.lock} />
                    <TextInput
                        syle={styles.textInput}
                        placeholder="Username"
                        palaceholderTextColor={colors.secondary}
                        keyboardType='username'
                        onChange={e => handleUsername(e)}
                    />
                </View>
                <View style={styles.inputContainer} >
                    <FontAwesomeIcon style={styles.envelope} icon={faGolfBallTee} />
                    <TextInput
                        syle={styles.textInput}
                        placeholder="Handicap"
                        palaceholderTextColor={colors.secondary}
                        keyboardType='number-pad'
                        onChange={e => handleHandicap(e)}
                    />
                </View>
                <View style={styles.inputContainer} >
                    <FontAwesomeIcon icon={faLock} style={styles.lock} />
                    <TextInput
                        syle={styles.textInput}
                        placeholder="Enter your password"
                        palaceholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                        onChange={e => handlePassword(e)}
                    />
                    <TouchableOpacity
                    // onPress={() => {
                    //     setSecureEntry((prev) => !prev)
                    // }}
                    >
                        <FontAwesomeIcon style={styles.eye} icon={faEye} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer} >
                    <FontAwesomeIcon icon={faLock} style={styles.lock} />
                    <TextInput
                        syle={styles.textInput}
                        placeholder="Confirm Password"
                        palaceholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity
                    // onPress={() => {
                    //     setConfirmPassword((prev) => !prev)
                    // }}
                    >
                        <FontAwesomeIcon style={styles.eye} icon={faEye} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity >
                <Text style={styles.forgotPasswordText} >Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginbuttonWrapper}>
                <Text onPress={signUp} style={styles.loginText} >Register</Text>
            </TouchableOpacity>
            <Text style={styles.continueText} >or continue with</Text>
            <TouchableOpacity style={styles.googleButtonContainer} >
                <Image
                    source={require("../assets/images/google-icon.png")}
                    style={styles.googleIcon}
                />
                <Text style={styles.googleText} >Google</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer} >
                <Text style={styles.accountText}>Already have an account?</Text>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.signupText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}




export default SignupScreen;


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
        marginVertical: 5,
    },
    headingText: {
        fontSize: 40,
        color: colors.primary,
        fontWeight: 'bold',
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',

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
        textAlign: "left",
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
    errorIcon: {
        width: 20,
        height: 20,
        position: "absolute",
        left: "100%",
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
    errorMessage: {
        marginLeft: 20,
        color: "red",
    },
});