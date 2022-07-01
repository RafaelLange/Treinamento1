// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTpidmgZa9py25hLO8X1DFSycirJIDkMQ",
  authDomain: "teste-treinamento1.firebaseapp.com",
  projectId: "teste-treinamento1",
  storageBucket: "teste-treinamento1.appspot.com",
  messagingSenderId: "682275091319",
  appId: "1:682275091319:web:2205c47ee001a75f9de772",
  measurementId: "G-JB9CYK8T3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);