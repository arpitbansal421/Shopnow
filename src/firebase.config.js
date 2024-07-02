// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaNWHr07wnMjUqbB6y5l64srIJb7JJMm0",
  authDomain: "shopnow-a0b86.firebaseapp.com",
  projectId: "shopnow-a0b86",
  storageBucket: "shopnow-a0b86.appspot.com",
  messagingSenderId: "587638541967",
  appId: "1:587638541967:web:42dc8f17d5388ea629aafa",
  measurementId: "G-M3F6TLV0YS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
