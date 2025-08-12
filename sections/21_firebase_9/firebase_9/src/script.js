import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, query, where, serverTimestamp, orderBy } from "firebase/firestore";

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

// const q = query(colRef, where('author', '==', 'Claudia Renata'), orderBy('title', 'desc'));
const q = query(colRef, orderBy('createdAt'));

// getDocs(colRef)
//     .then(snapshot => {
//       let books = []; 
//       snapshot.docs.forEach(doc => {
//         books.push({...doc.data(), id: doc.id});
//         console.log(books);
//       })
//     })
//     .catch(err => {
//       console.log(err.message);
//     });

// onSnapshot(colRef, snapshot => {
onSnapshot(q, snapshot => {
let books = []; 
      snapshot.docs.forEach(doc => {
        books.push({...doc.data(), id: doc.id});
      });
      console.log(books);
  })

const addBook = document.querySelector('.add');
addBook.addEventListener('submit', event => {
  event.preventDefault();

  addDoc(colRef, {
    title: addBook.title.value,
    author: addBook.author.value,
    createdAt: serverTimestamp(),
  })
  .then(() => {
    addBook.reset();
  });
})

const deleteBook = document.querySelector('.delete');
deleteBook.addEventListener('submit', event => {
  event.preventDefault();
  
  const docRef = doc(db, 'books', deleteBook.id.value);

  deleteDoc(docRef)
    .then(() => {
      deleteBook.reset();
    });
})