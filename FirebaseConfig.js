import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlxvlcTeZ4GVywmVbFdn6r1AWySEkgBco",
    authDomain: "reactnativegolfapp.firebaseapp.com",
    projectId: "reactnativegolfapp",
    storageBucket: "reactnativegolfapp.appspot.com",
    messagingSenderId: "466683770848",
    appId: "1:466683770848:web:91cc0133b6286202235d85"
};


const firebaseApp = initializeApp(firebaseConfig); // Renamed app to firebaseApp
const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { firebaseApp, auth };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP); 
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
// export const FIREBASE_DB = getDatabase(FIREBASE_APP);
