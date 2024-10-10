// import React, { useEffect } from 'react';
// import { onAuthStateChanged} from 'firebase/auth';
// import { auth } from '../FirebaseConfig';


// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// export function useAuth() {
//     const [user, setUser] = React.useState<User | null>(null);
//     const [loading, setLoading] = React.useState(true);

//     useEffect(() => {
//         const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
//             setUser(user);
//             setLoading(false);
//         });

//         return unsubscribeFromAuthStateChanged;
//     }, []);

//     return { user, loading };
// }