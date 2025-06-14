// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK4McMmy-lPUyE1DedDCewUcLxGqFMkDE",
  authDomain: "plantrnet-1416f.firebaseapp.com",
  projectId: "plantrnet-1416f",
  storageBucket: "plantrnet-1416f.firebasestorage.app",
  messagingSenderId: "564135819322",
  appId: "1:564135819322:web:ff0e6daeca77ef6b04dd03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);