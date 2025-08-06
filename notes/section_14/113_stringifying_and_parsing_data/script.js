// Stringifying & Parsing Data:
// Since everything we store in local storage is a string, we need to convert an array or an object into a string to store it.

const todos = [
    { text: 'Buy some milk', userName: 'Mario' },
    { text: 'Watch corinthians', userName: 'Hugo' },
];

// The function 'JSON.stringify()' is responsible for converting an array or object into a JSON valid string.
localStorage.setItem('todos', JSON.stringify(todos));
console.log(localStorage.getItem('todos'));

// To convert the string back into an array or object, we can use the 'JSON.parse()' function.
console.log(JSON.parse(localStorage.getItem('todos')));

// Note: JSON.parse() and JSON.stringify() are particularly useful when working with:
// - Complex data structures like arrays and objects
// - Storing application state in localStorage
// - Sending data to and receiving data from APIs

// Warning: JSON cannot store certain JavaScript types like:
// - Functions
// - Undefined values
// - Date objects (they are converted to strings)
// - RegExp objects