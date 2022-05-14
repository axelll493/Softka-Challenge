import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACy3pO5r8ukPRYC_03fbx2OB-3m45pPT8",
    authDomain: "questions-49428.firebaseapp.com",
    projectId: "questions-49428",
    storageBucket: "questions-49428.appspot.com",
    messagingSenderId: "616326307440",
    appId: "1:616326307440:web:e12b46ec6ac64a5dd49eb5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }