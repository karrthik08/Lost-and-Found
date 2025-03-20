// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5IJZnZUQbzmAQsnTP-_Icusma-CSozQw",
  authDomain: "lostandfoundauth-5ac5a.firebaseapp.com",
  projectId: "lostandfoundauth-5ac5a",
  storageBucket: "lostandfoundauth-5ac5a.firebasestorage.app",
  messagingSenderId: "358646922577",
  appId: "1:358646922577:web:b4dc10190daeec52da2770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);