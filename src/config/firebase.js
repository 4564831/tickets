// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tickets-298fa.firebaseapp.com",
  projectId: "tickets-298fa",
  storageBucket: "tickets-298fa.appspot.com",
  messagingSenderId: "213239716327",
  appId: "1:213239716327:web:70616e895fa868a1e50542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, 'tickets');
export const db = getFirestore(app);
