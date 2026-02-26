import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAnlYr8acBvvpo_7FIqFqeGxMhqsI4Mi8M",
  authDomain: "novaverse-store.firebaseapp.com",
  projectId: "novaverse-store",
  storageBucket: "novaverse-store.firebasestorage.app",
  messagingSenderId: "437472824298",
  appId: "1:437472824298:web:759c114867ca20f322c093",
  measurementId: "G-9EV1XC58R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}