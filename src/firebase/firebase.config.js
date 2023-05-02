// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKAwVKw5WcZlgN5duWYAPRAMZ1Se0_Tzs",
  authDomain: "the-yum-food.firebaseapp.com",
  projectId: "the-yum-food",
  storageBucket: "the-yum-food.appspot.com",
  messagingSenderId: "755634281204",
  appId: "1:755634281204:web:6beefb727432c22c5b5ca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;