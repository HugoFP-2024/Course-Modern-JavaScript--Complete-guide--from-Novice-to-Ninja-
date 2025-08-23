// Sets
// Sets work like arrays, being reference types, storing a collection of data, but unlike arrays, they don't accept duplicate values. A great use of Sets is for removing duplicates from arrays.
// Even though Sets are very similar to arrays, they don't have the same methods! But there are some similar ones, like '.forEach()'.
// Introduced in ES6, Sets are iterable objects that let you store unique values of any type.

const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
const namesSet = new Set(namesArray); // Creates a Set from an array, automatically removing duplicates

// using the spread operator:
const uniqueNames = [...new Set(namesArray)]; // Converts Set back to an array using spread operator - a common pattern for deduplication

// Some methods of Sets:
const ages = new Set();
ages.add(20); // Add a single value to the Set
ages.add(25).add(30); // Method chaining is supported
ages.add(25); // Even though it doesn't return an error, the duplicate number will not be added into the Set.

console.log(ages, ages.size); // Displays Set contents and its size (number of elements)
console.log(ages.has(30), ages.has(20)); // .has() checks if a value exists in the Set

ages.clear(); // Removes all elements from the Set

// Using '.forEach()' in a Set:
const ninjas = new Set([
    { name: 'shaun', age: 30 },
    { name: 'crystal', age: 29 },
    { name: 'chun-li', age: 32 }
]); // Creating a Set with an array of objects

// Sets are iterable, so we can use forEach, for...of loops, etc.
ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
});

// Other useful Set methods not shown here:
// - delete(value): removes a specific value from the Set
// - entries(): returns an iterator of [value, value] pairs (for compatibility with Map)
// - values(): returns an iterator of the values in the Set