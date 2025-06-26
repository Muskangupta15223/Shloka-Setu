// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCB-04tMI5jBjTNcpkqv-2lm0grfXwpUPM",
  authDomain: "gita-pageflip-app.firebaseapp.com",
  projectId: "gita-pageflip-app",
  storageBucket: "gita-pageflip-app.firebasestorage.app",
  messagingSenderId: "648045690194",
  appId: "1:648045690194:web:b0de0d4e5f709e50c10e8b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
