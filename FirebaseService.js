import app from 'firebase/app';
import { initializeFirebase } from './FirebaseService';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export const initializeFirebase = () => {
    const auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });

    // return auth;
};

