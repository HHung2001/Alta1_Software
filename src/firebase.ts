// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8U_f6Blb3ggBGo8XTA4lUqZFWzS5eGmU",
  authDomain: "tast-f8ffc.firebaseapp.com",
  projectId: "tast-f8ffc",
  storageBucket: "tast-f8ffc.appspot.com",
  messagingSenderId: "111507229719",
  appId: "1:111507229719:web:ac37b8421fe47d06f56052",
  measurementId: "G-Z1376NFQ0S"
};

// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
// const database = getDatabase(app);