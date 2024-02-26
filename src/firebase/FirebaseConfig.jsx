// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpX8O9MmEr7DPnBO_mTz_NIQGtw6geqbc",
  authDomain: "myfirstapp-c4578.firebaseapp.com",
  projectId: "myfirstapp-c4578",
  storageBucket: "myfirstapp-c4578.appspot.com",
  messagingSenderId: "923737126611",
  appId: "1:923737126611:web:7b49e83a278d2b611c0626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth}
