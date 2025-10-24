// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi2VE3e5tnvmfN-wT-emQOhCDww_PzlcA",
  authDomain: "green-nest-1002e.firebaseapp.com",
  projectId: "green-nest-1002e",
  storageBucket: "green-nest-1002e.firebasestorage.app",
  messagingSenderId: "856368635407",
  appId: "1:856368635407:web:3d48f00819a9ac03b10d7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);