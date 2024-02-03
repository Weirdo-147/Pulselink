import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCsTGdB2C9u5mfnNBMuHMLDhCQkqD0qMoQ",
  authDomain: "chat-56c99.firebaseapp.com",
  projectId: "chat-56c99",
  storageBucket: "chat-56c99.appspot.com",
  messagingSenderId: "446761799949",
  appId: "1:446761799949:web:64308d6a1b8f29038ca044"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();