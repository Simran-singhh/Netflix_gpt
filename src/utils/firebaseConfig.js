// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAL9uyuskuFNGmbPnNVQL9sPj-sho7BmA",
  authDomain: "netflixgpt-b9119.firebaseapp.com",
  projectId: "netflixgpt-b9119",
  storageBucket: "netflixgpt-b9119.appspot.com",
  messagingSenderId: "913262791271",
  appId: "1:913262791271:web:14936f545bb44305b462c2",
  measurementId: "G-YKN6P5P7EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();