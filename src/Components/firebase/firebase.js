import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWblnfnwMLzbO894VjFM8SoFGJTVXtLAs",
  authDomain: "cake-shop-6aaed.firebaseapp.com",
  projectId: "cake-shop-6aaed",
  storageBucket: "cake-shop-6aaed.appspot.com",
  messagingSenderId: "300292375635",
  appId: "1:300292375635:web:55a859b01ba1a43aeff2a6",
  measurementId: "G-229SXQ8H41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
