import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../assets/utils/colors'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.container} >
            <Image source={require("../assets/images/All-Square-Logo.png")} style={styles.logo} />
            <Text style={styles.title} >Lorem ipsum dolor.</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    logo: {
        width: 600,
        height: 300,
        alignSelf: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.primary,
    }
})