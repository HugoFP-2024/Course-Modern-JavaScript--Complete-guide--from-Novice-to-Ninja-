// Callback Functions:
// Callback Functions are functions that receive within themselves another function as an argument.

const myFunction = (callbackFunction) => {
    let value = 8000;
    callbackFunction(value);
}

myFunction (value => {
    console.log(value);
})

// 'forEach' method:
// It is a method that iterates over an array, and it expects as an argument a callback function.
let students = ['Mario', 'Cesar', 'Diana']

// students.forEach(student => {
//     console.log(`Welcome, ${student}!`);
// });

const greetStudent = (student) => {
    console.log(`Welcome, ${student}!`);
};

students.forEach(greetStudent);