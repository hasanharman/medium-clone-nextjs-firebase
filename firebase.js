// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu6X9cnskmam_8VPac1oSdesCroOXN7Oo",
  authDomain: "medium-2b285.firebaseapp.com",
  projectId: "medium-2b285",
  storageBucket: "medium-2b285.appspot.com",
  messagingSenderId: "813873430013",
  appId: "1:813873430013:web:6a3bdbe72712e674f02d94",
  measurementId: "G-36P445GMB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, db, provider}
