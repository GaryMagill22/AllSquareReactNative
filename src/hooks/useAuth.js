import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../FirebaseConfig'; // Assuming FirebaseConfig.js is in the root directory

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function useAuth() {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribeFromAuthStateChanged;
    }, []);

    return { user, loading };
}