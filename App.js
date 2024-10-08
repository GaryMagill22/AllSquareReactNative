import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, Navigation } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren } from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
import { initializeApp } from "firebase/app";
// import Config from 'react-native-config';
// import firebase from 'firebase/compat/app';
// import { firebaseConfig } from './FirebaseConfig';
// import { getAuth, onAuthStateChanged, User } from 'firebase/auth';




import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Stack = createNativeStackNavigator();



const App = () => {
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
