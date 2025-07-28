// Regular Expressions:

// Regular expressions are patterns used to match character combinations in strings. They serve a crucial role in validating input data by defining specific formats that must be followed.

// They are written with forward slashes (like /pattern/), making them search and match the specified pattern in a string.

/* There are multiple ways you can write a pattern, such as:
    ^ (at the start of the pattern): Ensures the pattern is at the start of the string.
    $ (at the end of the pattern): Ensures the pattern is at the end of the string.
    . (before the quantifier): Matches any single character except newline characters.
    [] (character set): Creates a set that will look for a specified character (like a-z, A-Z, 0-9, or a single character like @). It returns a match for any character in the range. You can mix multiple ones as well.
    {} (quantifier): Sets the quantity of characters you want in your expression (like {6,10}, matching only if the expression has a minimum of 6 and a maximum of 10 characters).
*/

// Note: Check the website https://regex101.com/ to create and test regular expressions.

// Example usage of regular expressions for username validation:
const username = 'Hugo';
const pattern = /^[a-zA-Z]{4,}$/;

console.log(pattern.test(username));

// Returns the position where the match was found:
console.log(username.search(pattern));
