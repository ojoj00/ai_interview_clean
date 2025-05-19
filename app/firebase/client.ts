import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA8rgPZcFZFRt614C9OrYlzOauYpymFcYU",
  authDomain: "interviewproject-9411e.firebaseapp.com",
  projectId: "interviewproject-9411e",
  storageBucket: "interviewproject-9411e.appspot.com", 
  messagingSenderId: "1033070176827",
  appId: "1:1033070176827:web:967d2ec36b9fe531398a1e",
  measurementId: "G-EDTF637PBC",
};

// Inicjalizacja aplikacji (tylko raz)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Eksport usług Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);


