// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "serialcoder-7db1b.appspot.com",
  messagingSenderId: "232365723602",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-F5QJ4YLCYQ"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAjXclTVXWiOKb6Odg9z0Z6_wKjaQYRXWs",
//   authDomain: "serialcoder-7db1b.firebaseapp.com",
//   projectId: "serialcoder-7db1b",
//   storageBucket: "serialcoder-7db1b.appspot.com",
//   messagingSenderId: "232365723602",
//   appId: "1:232365723602:web:6ae4f75078d0c0c0fd820b",
//   measurementId: "G-F5QJ4YLCYQ"
// };
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export {db, auth}
// const analytics = getAnalytics(app);