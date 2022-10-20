// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw5Bs5RnCR56U73zrd_6Kq-KZuLdcu1xs",
  authDomain: "dragon-news-db28f.firebaseapp.com",
  projectId: "dragon-news-db28f",
  storageBucket: "dragon-news-db28f.appspot.com",
  messagingSenderId: "1005230754525",
  appId: "1:1005230754525:web:7e85ec3f995f5f528aa934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;