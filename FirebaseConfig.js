// // Import the functions you need from the SDKs you need
import { getAnalytics } from "@react-native-firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries



// // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlxvlcTeZ4GVywmVbFdn6r1AWySEkgBco",
    authDomain: "reactnativegolfapp.firebaseapp.com",
    projectId: "reactnativegolfapp",
    storageBucket: "reactnativegolfapp.appspot.com",
    messagingSenderId: "466683770848",
    appId: "1:466683770848:web:91cc0133b6286202235d85"
};

// // Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);