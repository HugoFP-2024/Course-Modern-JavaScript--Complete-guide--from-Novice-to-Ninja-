import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1qwQ5Tb16zvHCY-5eZ1NPjsbzo941Wfk",
  authDomain: "fir-dojo-974e8.firebaseapp.com",
  projectId: "fir-dojo-974e8",
  storageBucket: "fir-dojo-974e8.firebasestorage.app",
  messagingSenderId: "927560537586",
  appId: "1:927560537586:web:2ed0d08c9397aafeaa076b",
  measurementId: "G-57H72QZ5Y8"
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'books')

getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs);
    })