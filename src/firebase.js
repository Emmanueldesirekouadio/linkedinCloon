import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARvgkiowi-WmTzdatybSjAb3E7hr5pU7E",
  authDomain: "linkedin-clone-d14e5.firebaseapp.com",
  projectId: "linkedin-clone-d14e5",
  storageBucket: "linkedin-clone-d14e5.appspot.com",
  messagingSenderId: "827654695422",
  appId: "1:827654695422:web:162eff23668fc1ebcb38af",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
