// Function Declaration:
// Note: JS 'hoists' function declarations. In other words, you can declare the function at the end of your program, but you can call the function at the start, and it will work!
// Can only be written as named functions.
function hello() {
    console.log('Hello!');
}

// Function Expression:
// Used to store a function inside a variable.
// Note: JS doesn't 'hoist' function expressions!
// Can be written as an anonymous or named function expression.
const speak = function() {
    console.log('Today is a great day!');
};

// Calling the Function
hello();
speak();

// Notes: Functions are different than Methods, even though a Method is, essentially, a function. Methods are associated with an object or data type, whereas Functions are not defined within a data type.