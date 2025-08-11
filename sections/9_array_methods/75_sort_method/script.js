// Sort Method
// The sort method is used to rearrange an array and sort its elements. 
// Important: It does not return a new array; it directly alters the original array.

// Using it with strings:
const names = ['Mario', 'Jhonny', 'Augusto'];
// It automatically sorts strings in alphabetical order.
names.sort();
// We also have '.reverse()', which reverses the array, moving the last item to the first position, for example.
// names.reverse();
console.log(names);

// Using it with numbers:
const numbers = [12, 44, 0, 41, 5, 9, 37];
// IMPORTANT NOTE: By default, with numbers, it only checks and sorts by the first digit, not treating them as whole numbers (e.g., with 57, it looks at the 5 and ignores the 7).
numbers.sort();
console.log(numbers);

// To sort numbers correctly, use a compare function (arrow function) that takes two parameters, representing two consecutive values in the array.
// It works by returning a number: if 'a' should come first, return a negative number; if 'b' should come first, return a positive number; if they are equal, return 0.
// Below is the simplified version; see the next part for the non-simplified version.
numbers.sort((a, b) => b - a);
console.log(numbers);

// Using it with objects:
const userScores = [
    {player: 'Felipe', score: 70},
    {player: 'Maria', score: 50},
    {player: 'Carlos', score: 20},
    {player: 'Chipita', score: 1},
];

// Sorts objects by score in descending order using a compare function.
userScores.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    } else if (b.score > a.score) {
        return 1;
    } else {
        return 0;
    }
}); 

// Simplified version for sorting by score in descending order.
userScores.sort((a, b) => b.score - a.score);