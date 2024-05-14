// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC53GUXRsnS61EjraFGfYpaau4UCzb2sr8",
  authDomain: "blog-web-87f79.firebaseapp.com",
  projectId: "blog-web-87f79",
  storageBucket: "blog-web-87f79.appspot.com",
  messagingSenderId: "228677898417",
  appId: "1:228677898417:web:e2112cf6f1322e2e89d290"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);