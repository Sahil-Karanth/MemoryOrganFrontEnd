// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAxuWQr2OhfLvKU0KF1hHDqBXGmaR-5mPo",
  authDomain: "memoryorganauth.firebaseapp.com",
  projectId: "memoryorganauth",
  storageBucket: "memoryorganauth.firebasestorage.app",
  messagingSenderId: "333239312434",
  appId: "1:333239312434:web:4278c1164c9f82f55a1c2b",
  measurementId: "G-WQDLHPXY4Q"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
