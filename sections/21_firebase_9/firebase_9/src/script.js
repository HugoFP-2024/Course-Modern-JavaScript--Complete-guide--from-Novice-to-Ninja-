import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, onSnapshot, addDoc, deleteDoc, doc, query, where, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Access configuration for the Firestore database.
const firebaseConfig = {
  apiKey: "AIzaSyB1qwQ5Tb16zvHCY-5eZ1NPjsbzo941Wfk",
  authDomain: "fir-dojo-974e8.firebaseapp.com",
  projectId: "fir-dojo-974e8",
  storageBucket: "fir-dojo-974e8.firebasestorage.app",
  messagingSenderId: "927560537586",
  appId: "1:927560537586:web:2ed0d08c9397aafeaa076b",
  measurementId: "G-57H72QZ5Y8"
};

// Initializing the Firestore instance:
initializeApp(firebaseConfig);

// Getting a reference to both the database in the constant 'db', the auth and the collection 'books' in the constant 'colRef':
const db = getFirestore();
const colRef = collection(db, 'books');

const auth = getAuth();

// Creating a query for querying the database:
// const q = query(colRef, where('author', '==', 'Claudia Renata'), orderBy('title', 'desc'));
const q = query(colRef, orderBy('createdAt'));

// Fetching data:
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

// Real-time listener for database changes
// onSnapshot(colRef, snapshot => {
const unsubCol = onSnapshot(q, snapshot => {
  let books = [];
  snapshot.docs.forEach(doc => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

// Adding documents:
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
});

// Deleting documents:
const deleteBook = document.querySelector('.delete');
deleteBook.addEventListener('submit', event => {
  event.preventDefault();

  // Create a reference to the specific document using its ID
  const docRef = doc(db, 'books', deleteBook.id.value);

  // Delete the document from Firestore
  deleteDoc(docRef)
    .then(() => {
      deleteBook.reset();
    });
});

// Getting a single document:
const docRef = doc(db, 'books', 'WEtV1rSihbODQb7FJA1g');
getDoc(docRef)
  .then(doc => {
    console.log(doc.data(), doc.id);
  });

const unsubDoc = onSnapshot(docRef, doc => {
  console.log(doc.data(), doc.id);
});

// Updating a document:
const updateBook = document.querySelector('.update');
updateBook.addEventListener('submit', event =>{
  event.preventDefault();

  const docRef = doc(db, 'books', updateBook.id.value);

  updateDoc(docRef, {
    title:'Updated title'
  })
  .then(() => {
    updateBook.reset();
  });
});

// Sign-up: (New users automatically sign up!)
const signupForm = document.querySelector('.createUser');
signupForm.addEventListener('submit', event => {
  event.preventDefault();

  createUserWithEmailAndPassword(auth, signupForm.email.value, signupForm.password.value)
    .then(cred => {
      console.log(cred.user);
    })
    .catch(err => {
      console.log(err.message);
    });

  signupForm.reset();
})

// Logging in and out:

const login = document.querySelector('.login');
login.addEventListener('submit', event => {
  event.preventDefault();
  
  signInWithEmailAndPassword(auth, login.email.value, login.password.value)
    .then(cred => {
      console.log('User loggedin:', cred.user);
    })
    .catch(err =>{
      console.log(err.message);
    });
});

const logout = document.querySelector('.logout');
logout.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('User has logged out.');
    })
    .catch(err =>{
      console.log(err.message);
    })  
});

// Subscribingto Auth Changes:
const unsubAuth = onAuthStateChanged(auth, user => {
  console.log(user);
})

// Unsubscribe:
const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener('click', () =>{
  unsubDoc();
  unsubCol();
  unsubAuth();
});