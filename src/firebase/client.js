import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj7CAZpEiEwxIktdeJjYZi4EGLZZKz2wI",
  authDomain: "coder-react-backend.firebaseapp.com",
  projectId: "coder-react-backend",
  storageBucket: "coder-react-backend.appspot.com",
  messagingSenderId: "313020139809",
  appId: "1:313020139809:web:0bb66212a17ade01779660",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);