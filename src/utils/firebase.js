// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDePWAkox0Y9ApEtHdGE4IYQAnE-MUxcUU",
  authDomain: "mock-65391.firebaseapp.com",
  projectId: "mock-65391",
  storageBucket: "mock-65391.appspot.com",
  messagingSenderId: "480279479412",
  appId: "1:480279479412:web:c5d0080aa3b6d96e733d21",
  measurementId: "G-X0SBRPG2RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();