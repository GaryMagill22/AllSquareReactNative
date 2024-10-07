

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, Navigation } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren } from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
import { initializeApp } from "firebase/app";



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

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlxvlcTeZ4GVywmVbFdn6r1AWySEkgBco",
  authDomain: "reactnativegolfapp.firebaseapp.com",
  projectId: "reactnativegolfapp",
  storageBucket: "reactnativegolfapp.appspot.com",
  messagingSenderId: "466683770848",
  appId: "1:466683770848:web:91cc0133b6286202235d85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
