/*
Dependencies
npm install firebase
npm install -g firebase-tools
*/

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

//for authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//for firestore access
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKA3du8wb6xXXv0NKv9n51R1fcn3tP86s",
  authDomain: "fir-react-trial-4fe13.firebaseapp.com",
  projectId: "fir-react-trial-4fe13",
  storageBucket: "fir-react-trial-4fe13.appspot.com",
  messagingSenderId: "660738963670",
  appId: "1:660738963670:web:b537b30238a512a85fb177",
  measurementId: "G-LR567X9F2Y"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

/*
Deploy to Firebase Hosting
(not needed yet)
firebase login
firebase init
firebase deploy
*/