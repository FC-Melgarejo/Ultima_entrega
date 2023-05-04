// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_senderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
console.log('Estoy configurando mi firebase con elobjeto: ', firebaseConfig); 
//construye la app firebase
const app = initializeApp(firebaseConfig);
//inicializa un firestore con esa app
export const db = getFirestore(app);
const auth =getAuth(app);
export default db;