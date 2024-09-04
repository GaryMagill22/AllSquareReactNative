// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYaAr_qn5qBjIxb6NR0jgXfQYLFCcnb6w",
    authDomain: "all-square-b7337.firebaseapp.com",
    projectId: "all-square-b7337",
    storageBucket: "all-square-b7337.appspot.com",
    messagingSenderId: "792838903295",
    appId: "1:792838903295:web:ec10168c0abd21fc6b83ca",
    measurementId: "G-S8GR77HJ3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);