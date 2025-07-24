// Strings

console.log('Hello, world!');

// String - Concatenation
let firstName = 'Hugo';
let lastName = 'Fontolan Piani';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// String - Template Literals
let userName = 'User';
console.log(`My name is ${userName}`); // You need to use backticks `` !

// String - Creating HTML Templates
let html = `
    <h2>${firstName}</h2>
    <p>${lastName}</p>
    <span>The default username is: ${userName} </span>
`;
console.log(html);

// String - Getting Characters 
console.log(fullName[0]); // Returns the letter 'H'

// String - Methods and Properties
console.log(fullName.length); // Returns the length of the string as a number

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase()); // Both return the string in upper case or lower case

let result = userName.indexOf('r'); // Returns the index of the argument in the string