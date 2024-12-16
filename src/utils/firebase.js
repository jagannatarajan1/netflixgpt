// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfdbX5VD7NCIN5YRw0ZIgdNx0S8X3dgOo",
  authDomain: "netflix-47766.firebaseapp.com",
  projectId: "netflix-47766",
  storageBucket: "netflix-47766.firebasestorage.app",
  messagingSenderId: "661338046402",
  appId: "1:661338046402:web:6b0c79c583f036e112205b",
  measurementId: "G-33XBBF5PZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 // eslint-disable-next-line 
const analytics = getAnalytics(app);
export const auth = getAuth();
