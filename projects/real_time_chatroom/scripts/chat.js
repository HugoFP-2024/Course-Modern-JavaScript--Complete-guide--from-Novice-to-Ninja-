// Importing the Firebase Functions that will be used in this project:
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp, onSnapshot, query, where, orderBy } from "firebase/firestore"

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiAi6BDD6lmMOkir5VIrb5gYNZk-Se8sg",
    authDomain: "chad-chat-8c7a1.firebaseapp.com",
    projectId: "chad-chat-8c7a1",
    storageBucket: "chad-chat-8c7a1.firebasestorage.app",
    messagingSenderId: "705023824671",
    appId: "1:705023824671:web:32b96bd554828892c1d62a"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'chats');

// Class for the Chatroom:
export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.unsub
    };

    async addChat(message) {
        const chat = {
            message,
            username: this.username,
            room: this.room,
            // created_at: (new Date()).getTime(),
            created_at: Timestamp.fromDate(new Date())
        };

        const response = await addDoc(colRef, chat);
        return response;
    }

    getChats(callback){
        this.unsub = onSnapshot(query(colRef, where('room', '==', this.room), orderBy('created_at')), snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    callback(change.doc.data());
                }
            });
        })
    }

    updateUsername(username){
        this.username = username;

        localStorage.setItem('username', username);
    }

    updateRoom(room){
        this.room = room;
        if (this.unsub) {
            this.unsub;
        }
    }
};

// const chatroom = new Chatroom('General', 'Shaun');

// chatroom.addChat('bullocks!')
// //     .then(() => console.log('chat added!'))
//     .catch(err => console.log(err));

// chatroom.getChats((data) => {
//     console.log(data);
// });