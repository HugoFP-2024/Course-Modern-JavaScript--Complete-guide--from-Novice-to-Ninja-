// Importing the CSS file and other JavaScript files:
import '../styles/style.css';
import { Chatroom } from './chat.js';
import { ChatUI } from './ui.js';

// DOM Query's
const chatList = document.querySelector('.chat-list');

// Class Instances
const chatroom = new Chatroom('Gaming', 'Shaun');
const chatUi = new ChatUI(chatList);

// Getting the Chats and rendering them
chatroom.getChats(data => chatUi.render(data));
