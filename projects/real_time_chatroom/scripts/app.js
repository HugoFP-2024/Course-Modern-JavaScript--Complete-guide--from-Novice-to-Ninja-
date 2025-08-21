// Importing the CSS file and other JavaScript files:
import '../styles/style.css';
import { Chatroom } from './chat.js';
import { ChatUI } from './ui.js';

// DOM Query's
const chatList = document.querySelector('.chat-list');
const newMessageForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-msg');
const chatRooms = document.querySelector('.chat-rooms')

// Event Listeners
newMessageForm.addEventListener('submit', event => {
    event.preventDefault();

    const message = newMessageForm.message.value;

    chatroom.addChat(message)
        .then(() => newMessageForm.reset())
        .catch(err => console.log(err));
});

newNameForm.addEventListener('submit', event => {
    event.preventDefault();

    const username = newNameForm.name.value;

    chatroom.updateUsername(username);
    newNameForm.reset();

    updateMessage.innerHTML = `Your name was updated to ${username}`
    setTimeout(() => updateMessage.innerHTML = ``, 5000)
});

chatRooms.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        chatUi.clear();
        chatroom.updateRoom(event.target.getAttribute('id'));
        chatroom.getChats(data => chatUi.render(data));
    }
});

// Class Instances
const chatUi = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', localStorage.username ? localStorage.username : 'Anon');

// Getting the Chats and rendering them
chatroom.getChats(data => chatUi.render(data));