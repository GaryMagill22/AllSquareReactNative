import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, Navigation } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren } from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
// import Config from 'react-native-config';
// import firebase from 'firebase/compat/app';
// import { firebaseConfig } from './FirebaseConfig';
// import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './FirebaseConfig';


const app = initializeApp(firebaseConfig);


const Stack = createNativeStackNavigator();



const App = () => {

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);




  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} >
        <Stack.Screen name={"HOME"} component={HomeScreen} />
        <Stack.Screen name={"LOGIN"} component={LoginScreen} />
        <Stack.Screen name={"SIGNUP"} component={SignupScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
