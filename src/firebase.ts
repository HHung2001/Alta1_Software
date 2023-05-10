// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDreY2YScLhGqjBTKwtJdT9HNA1vsROd0",
  authDomain: "alta-project-7065f.firebaseapp.com",
  projectId: "alta-project-7065f",
  storageBucket: "alta-project-7065f.appspot.com",
  messagingSenderId: "139563659757",
  appId: "1:139563659757:web:1b9937a2d60f9303f8f7e4"
};

// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export default firebase;
// const database = getDatabase(app);