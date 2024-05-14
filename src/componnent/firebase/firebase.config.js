// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqaMTkBsMzSM5TcgQKIEX8kEHXfid-Egk",
  authDomain: "explorer-tourism.firebaseapp.com",
  projectId: "explorer-tourism",
  storageBucket: "explorer-tourism.appspot.com",
  messagingSenderId: "10168366462",
  appId: "1:10168366462:web:f4134d279b42a675466f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;