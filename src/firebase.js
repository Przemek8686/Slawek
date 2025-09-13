import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7IwBvHBC_ffvLiiJb3HiPK_0XJ1o0-uY",
  authDomain: "sc-bouwmax.firebaseapp.com",
  projectId: "sc-bouwmax",
  storageBucket: "sc-bouwmax.firebasestorage.app",
  messagingSenderId: "1084406912784",
  appId: "1:1084406912784:web:339a2b88640ad90247f795",
  measurementId: "G-G8R48MGPH0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);