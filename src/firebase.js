// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCLk0CyLwwDQgy50YNrhZQf2vjaA9er6g",
    authDomain: "fitness-studio-f330e.firebaseapp.com",
    projectId: "fitness-studio-f330e",
    storageBucket: "fitness-studio-f330e.appspot.com",
    messagingSenderId: "334128616884",
    appId: "1:334128616884:web:764a39bab35ff9d0a80ee1",
    measurementId: "G-SY48DH8B7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// main auth
export const auth = getAuth();
// google auth
export const googleAuth = new GoogleAuthProvider();


export default app;