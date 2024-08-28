import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable } from 'react-native';
import React, { Component } from 'react';
import { colors } from '../assets/utils/colors';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';





const LoginScreen = () => {

    const navigation = useNavigation();


    const handleBack = () => {
        navigation.navigate("HOME");
        // console.log("Back to Home");
    };

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.backButtonWrapper} >
                <Ionicons name={"arrow-back"} size={20} color={colors.primary} />
                <Pressable style={styles.pressable} title='Back' onPress={handleBack}>
                    <Text style={styles.text} >Back </Text>
                </Pressable>
            </TouchableOpacity>
                <View style={styles.textContainer} >
                    <Text style={styles.headingText} >Hey,</Text>
                    <Text style={styles.headingText} >Welcome</Text>
                    <Text style={styles.headingText} >Back</Text>
                </View>
                {/* Form  */}
                <View style={styles.formContainer} >
                    <View style={styles.inputContainer} >
                        <Ionicons name={"mail-outline"} size={20} color={colors.primary} />
                        <TextInput />
                    </View>
                </View>
        </View>
    )
}



export default LoginScreen;


const styles = StyleSheet.create({
    pressable: {
        width: 50,
        height: 50,
        marginVertical: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: colors.darkGray,
    },
    text: {
        textAlign: 'center',
        fontSize: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: "white",
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
        fontSize: 32,
        color: colors.primary,
        fontWeight: 'bold',
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        height: 30,
    },
});