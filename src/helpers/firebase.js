// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFxn0bwxTARzf8U1dHHLE0-4PsS1z2QFg",
  authDomain: "td4-frontend-g19-profe.firebaseapp.com",
  projectId: "td4-frontend-g19-profe",
  storageBucket: "td4-frontend-g19-profe.appspot.com",
  messagingSenderId: "259341425880",
  appId: "1:259341425880:web:26996c521c5ed356534bad",
  measurementId: "G-NB3KR38RB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
