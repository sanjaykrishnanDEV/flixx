// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVfKPHJGwFDdDAJuU5MbJnObmLKbRF-9g",
  authDomain: "cinify-d89b6.firebaseapp.com",
  projectId: "cinify-d89b6",
  storageBucket: "cinify-d89b6.appspot.com",
  messagingSenderId: "589444392620",
  appId: "1:589444392620:web:4fa30a03f04296fe842109"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth()