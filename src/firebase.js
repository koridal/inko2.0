// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inko2-c6e70.firebaseapp.com",
  projectId: "inko2-c6e70",
  storageBucket: "inko2-c6e70.firebasestorage.app",
  messagingSenderId: "973006191964",
  appId: "1:973006191964:web:beabb0f46526242dd0d599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);