// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQGRXuY1ShE9TbPNz5M3EmJa5EoRvcg2Y",
  authDomain: "netflixgpt-1de18.firebaseapp.com",
  projectId: "netflixgpt-1de18",
  storageBucket: "netflixgpt-1de18.firebasestorage.app",
  messagingSenderId: "460110828346",
  appId: "1:460110828346:web:680e628b7f617363923603",
  measurementId: "G-2P1PZRF04M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
