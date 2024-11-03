// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnzP4YxNEXOK4zW4pfaz4VjrO8tNTZg5o",
  authDomain: "netflixgpt-a 7561.firebaseapp.com",
  projectId: "netflixgpt-a7561",
  storageBucket: "netflixgpt-a7561.firebasestorage.app",
  messagingSenderId: "975900294578",
  appId: "1:975900294578:web:8aeed71025df06dc7e78ab",
  measurementId: "G-434CMBJFVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
