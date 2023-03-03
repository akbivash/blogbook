// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
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
export {db}
// const analytics = getAnalytics(app);