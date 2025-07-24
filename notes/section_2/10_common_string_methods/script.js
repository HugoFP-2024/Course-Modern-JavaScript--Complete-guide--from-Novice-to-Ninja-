// String - Common Methods:

let email = 'hugo.fontolan@gmail.com';

console.log(email.lastIndexOf('n')); 
// Returns the index of the last occurrence of the argument

console.log(email.slice(0, 5));      
// Slices the string based on the indexes provided as arguments

console.log(email.substring(0, 5));  
// Similar to slice, but the second argument represents the amount of characters to get, not the index to stop at.

console.log(email.replace('o', 'r'));
console.log(email.replaceAll('o', 'r'));
// '.replace' replaces only the first character that matches the argument, while '.replaceAll' replaces all of them.