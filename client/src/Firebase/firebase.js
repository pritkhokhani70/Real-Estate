// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-a5bb8.firebaseapp.com",
  projectId: "real-estate-a5bb8",
  storageBucket: "real-estate-a5bb8.appspot.com",
  messagingSenderId: "333437685248",
  appId: "1:333437685248:web:c88c7d62a50bb5c44292e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);