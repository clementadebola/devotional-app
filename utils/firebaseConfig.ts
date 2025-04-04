import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEm5uiy3z4ka8zUrMttO1lG5uQCIzAr7o",
  authDomain: "dailyarmourapp.firebaseapp.com",
  projectId: "dailyarmourapp",
  storageBucket: "dailyarmourapp.firebasestorage.app",
  messagingSenderId: "510011451378",
  appId: "1:510011451378:web:bc435372470b132a0d6d6b",
  measurementId: "G-XMHWRZWGWF"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
