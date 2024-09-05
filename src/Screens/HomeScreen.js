import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import { colors } from '../assets/utils/colors'
import { fonts } from '../assets/utils/fonts'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import firestore from '@react-native-firebase/firestore';
// import { useEffect } from 'react'

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("LOGIN");
    }
    const handleSignup = () => {
        navigation.navigate("SIGNUP");
    }


    // // trying to get Data from firestore as test
    // const getData = async () => {
    //     const usersCollection = await firestore().collection('Users').get();
    //     console.log(usersCollection);
    // }

    // useEffect(() => {
    //     getData();
    // }, []);



    return (
        <View style={styles.container} >
            <Image source={require("../assets/images/All-Square-Logo.png")} style={styles.logo} />
            <Text style={styles.title} >Bet. Play. Win.</Text>
            <Text style={styles.subTitle} >Upgrade your golf rounds: Simple Bets, Instant Wins. Challenge friends, track live scores, and ensure every shot matters. Bet directly from your digital wallet and savor speedy payouts.
            </Text>
            <View style={styles.buttonContainer} >
                <TouchableOpacity style={[
                    styles.loginButtonWrapper,
                    {  backgroundColor: colors.primary },
                ]} 
                onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText } >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignup} >
                    <Text style={styles.signupButtonText} >Sign-up</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
        alignItems: "center",
    },
    logo: {
        width: 600,
        height: 300,
        alignSelf: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
        textAlign: "center",
        color: colors.primary,
        paddingHorizontal: 20,
    },
    subTitle: {
        fontFamily: fonts.Medium,
        paddingHorizontal: 20,
        fontSize: 18,
        textAlign: "center",
        color: colors.secondary,
        marginVertical: 20,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.primary,
        width: "85%",
        height: 60,
        borderRadius: 100,
    },
    loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 98,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
    signupButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
});