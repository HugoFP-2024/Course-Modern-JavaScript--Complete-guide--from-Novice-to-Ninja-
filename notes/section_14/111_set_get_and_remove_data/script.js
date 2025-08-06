// Storing data in local storage:
// Local Storage is basically the storage in the web browser, and it's inside the window object, being accessed with window.localStorage (The 'window' is inferred, so there's no need to type it).

// The setItem() method receives 2 arguments, the first being the name of the key, and the second is its content. Everything we store in localStorage must be a string, but JavaScript automatically converts other primitive types to strings.
localStorage.setItem('name', 'Mario');
localStorage.setItem('age', 50);

// Getting data from local storage:
// To get the data from localStorage, we use the '.getItem()' method, in which we pass the key we want to get the data from as an argument.
let age = localStorage.getItem('age');
let userName = localStorage.getItem('name');
console.log(userName, age);

// Updating data from local storage:
// To update any key from local storage, we can either use '.setItem()' again or use dot notation.
localStorage.setItem('name', 'Luigi');
localStorage.age = '27';

userName = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(userName, age);

// Deleting data from local storage:
// We use the method '.removeItem()' to delete data from the local storage, in which we pass the key that we want to delete.
localStorage.removeItem('name');

// We can also use the '.clear()' method on 'localStorage', which is responsible for deleting all items in the local storage.
localStorage.clear();

// Note about persistence:
// Data stored in localStorage persists even after the browser is closed and reopened.
// It has no expiration time and is specific to the domain that created it.
// This makes localStorage ideal for storing user preferences or non-sensitive application state.