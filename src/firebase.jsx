// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyDhvFiE9mW45j8Nsb62x_EdwXBM6NNPabg",
  authDomain: "personalblogapp-481dc.firebaseapp.com",
  projectId: "personalblogapp-481dc",
  storageBucket: "personalblogapp-481dc.appspot.com",
  messagingSenderId: "821523860058",
  appId: "1:821523860058:web:45aa76d2789fb7a934e663"
};

 const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 const db = getDatabase(app);



export { auth, db };



