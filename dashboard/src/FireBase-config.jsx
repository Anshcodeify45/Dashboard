// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDoR3H9gZm7J8-mvh84VIPSqDk-tsB7pI",
  authDomain: "dashboard-57456.firebaseapp.com",
  projectId: "dashboard-57456",
  storageBucket: "dashboard-57456.firebasestorage.app",
  messagingSenderId: "668059084002",
  appId: "1:668059084002:web:2c891e6bb4c34587e02abb",
  measurementId: "G-Z5PHL8MWYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);