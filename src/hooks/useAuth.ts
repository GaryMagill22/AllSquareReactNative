import React, { useEffect  } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const auth = getAuth();

export function useAuth() {
    const [user, setUser] = React.useState<User | null>(null);
    // const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
        });

        return unsubscribe;
    }, []);

    return { user, loading };
}