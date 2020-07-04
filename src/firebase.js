// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyCo3MlQOWfDkKwTkgqr_eRp2DFdeGhEhOE",
    authDomain: "capstone-85d4b.firebaseapp.com",
    databaseURL: "https://capstone-85d4b.firebaseio.com",
    projectId: "capstone-85d4b",
    storageBucket: "capstone-85d4b.appspot.com",
    messagingSenderId: "1047976419587",
    appId: "1:1047976419587:web:7aaa46e0b8e51da754c936",
    measurementId: "G-YC8PTVV97S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

