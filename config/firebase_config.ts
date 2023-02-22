// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjXclTVXWiOKb6Odg9z0Z6_wKjaQYRXWs",
  authDomain: "serialcoder-7db1b.firebaseapp.com",
  projectId: "serialcoder-7db1b",
  storageBucket: "serialcoder-7db1b.appspot.com",
  messagingSenderId: "232365723602",
  appId: "1:232365723602:web:6ae4f75078d0c0c0fd820b",
  measurementId: "G-F5QJ4YLCYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
// const analytics = getAnalytics(app);