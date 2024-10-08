import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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


const auth = getAuth();

export function useAuth() {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
        });

        return unsubscribeFromAuthStateChanged;
    }, []);

    return { user, loading };
}

