// /lib/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import the auth module

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "nomad-links.firebaseapp.com",
  projectId: "nomad-links",
  storageBucket: "nomad-links.appspot.com",
  messagingSenderId: "851752825959",
  appId: "1:851752825959:web:ce17d0ecaebbabb2cd90c2",
  measurementId: "G-1YENTCJ9NQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Initialize the auth module
const firestore = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

// export default firebaseApp;
export { firebaseApp, auth, firestore, analytics };