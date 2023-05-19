// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa0iAPRtWa8ZmNbdOon8O_xxS26NRtS1o",
  authDomain: "toy-marketplace-f6b89.firebaseapp.com",
  projectId: "toy-marketplace-f6b89",
  storageBucket: "toy-marketplace-f6b89.appspot.com",
  messagingSenderId: "742186479780",
  appId: "1:742186479780:web:3a9c8008a1d3021f9db631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;