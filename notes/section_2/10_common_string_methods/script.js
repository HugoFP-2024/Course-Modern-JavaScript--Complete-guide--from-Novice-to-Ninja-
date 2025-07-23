// Strings - Common Methods:

let email = 'hugo.fontolan@gmail.com';

console.log(email.lastIndexOf('n')); 
// Return the index of the last character of the argument

console.log(email.slice(0, 5));      
// Slices the string based of the indexes inserted in the arguments

console.log(email.substring(0, 5));  
// Similar to Slice, but the second argument represent the amount of characters it will get, not the index it will stop.

console.log(email.replace('o', 'r'));
console.log(email.replaceAll('o', 'r'));
// '.replace' replaces the first letter only that corresponds to the arguments, but '.replaceAll', well, replaces all of them.