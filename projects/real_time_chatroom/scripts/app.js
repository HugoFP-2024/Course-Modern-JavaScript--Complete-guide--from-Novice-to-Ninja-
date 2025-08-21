// Importing the CSS file and other JavaScript files:
import '../styles/style.css';
import { Chatroom } from './chat.js';
import { ChatUI } from './ui.js';

// DOM Query's
const chatList = document.querySelector('.chat-list');
const newMessage = document.querySelector('.new-chat');

// Event Listeners
newMessage.addEventListener('submit', event => {
    event.preventDefault();

    const message = newMessage.message.value;

    chatroom.addChat(message)
        .then(() => newMessage.reset())
        .catch(err => console.log(err));
});

// Class Instances
const chatroom = new Chatroom('Gaming', 'Shaun');
const chatUi = new ChatUI(chatList);

// Getting the Chats and rendering them
chatroom.getChats(data => chatUi.render(data));