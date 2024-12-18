// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAGF65ha-nDmK5rW3KB5dlanBbnVNU-UQ",
  authDomain: "ecom-site-a03b2.firebaseapp.com",
  projectId: "ecom-site-a03b2",
  storageBucket: "ecom-site-a03b2.firebasestorage.app",
  messagingSenderId: "983108764509",
  appId: "1:983108764509:web:d832f2a8d7c9657a6b1eb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app