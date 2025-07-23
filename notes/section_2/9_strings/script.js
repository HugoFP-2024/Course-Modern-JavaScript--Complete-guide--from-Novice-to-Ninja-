// Strings

console.log('Hello, world!');

// Strings - Concatenetion
let firstName = 'Hugo';
let lastName = 'Fontolan Piani';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Strings - Template Strings
let userName = 'User';
console.log(`My name is ${userName}`); // You need to use backtickets `` !

// Strings - Creating HTML Templates
let html = `
    <h2>${firstName}</h2>
    <p>${lastName}</p>
    <span>The default username is: ${userName} </span>
`;
console.log(html);

// Strings - Getting Characters 
console.log(fullName[0]); // Should return the letter 'H'

// Strings - Methods and Properties
console.log(fullName.length); // Return the length of the string in a 'number'

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase()); // Both of them get the respective string and return it in upper case or, lower case

let result = userName.indexOf('r'); // Retur the index of the argument in the string