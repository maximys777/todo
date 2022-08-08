// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-y5ASbZ5Z0V-91rUK1shWcB_kV-buVL4",
  authDomain: "todo-21c25.firebaseapp.com",
  projectId: "todo-21c25",
  storageBucket: "todo-21c25.appspot.com",
  messagingSenderId: "1025639631006",
  appId: "1:1025639631006:web:701ec7d65cb5a46cb5938f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)