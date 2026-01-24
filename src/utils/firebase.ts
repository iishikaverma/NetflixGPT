// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUOuKz2MxkTTJuaIipmBcsOtlpebCnBK4",
  authDomain: "netflixgpt-9c520.firebaseapp.com",
  projectId: "netflixgpt-9c520",
  storageBucket: "netflixgpt-9c520.firebasestorage.app",
  messagingSenderId: "898780616759",
  appId: "1:898780616759:web:2afc2193e9cea5f1ef07b2",
  measurementId: "G-BH1W1WVSYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();