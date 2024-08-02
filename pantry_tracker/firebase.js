// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firestore, { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrw6JkL7pvwzWGOxkWKc9a7zXP40QVJsI",
  authDomain: "pantry-tracker-7f809.firebaseapp.com",
  projectId: "pantry-tracker-7f809",
  storageBucket: "pantry-tracker-7f809.appspot.com",
  messagingSenderId: "463650864540",
  appId: "1:463650864540:web:9ec3eb9a739a9910021c59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}