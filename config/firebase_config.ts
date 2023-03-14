// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {Auth, getAuth} from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAjXclTVXWiOKb6Odg9z0Z6_wKjaQYRXWs',
  authDomain: "serialcoder-7db1b.firebaseapp.com",
  projectId: process.env.NEXT_FIREBASE_PROJECT_ID,
  storageBucket: "serialcoder-7db1b.appspot.com",
  messagingSenderId: "232365723602",
  appId: process.env.NEXT_FIREBASE_APP_ID,
  measurementId: "G-F5QJ4YLCYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth =getAuth(app)
export {db, auth}
// const analytics = getAnalytics(app);