import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAteOX-vAajWOcTAt5469MWpnW-uZzHqs",
  authDomain: "clone-7de1b.firebaseapp.com",
  projectId: "clone-7de1b",
  storageBucket: "clone-7de1b.appspot.com",
  messagingSenderId: "639864320221",
  appId: "1:639864320221:web:81f25f4386203a08d82b34",
  measurementId: "G-RN518EKNCY"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
