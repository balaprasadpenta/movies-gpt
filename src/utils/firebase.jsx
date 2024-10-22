// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_API_KEY } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "moviesgpt-4e0fe.firebaseapp.com",
  projectId: "moviesgpt-4e0fe",
  storageBucket: "moviesgpt-4e0fe.appspot.com",
  messagingSenderId: "804905524172",
  appId: "1:804905524172:web:9a7018c270d39a377edb69",
  measurementId: "G-X222XDQDRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
