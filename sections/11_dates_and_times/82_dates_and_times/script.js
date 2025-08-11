// Dates and Times in JavaScript
// We use the 'new' keyword to call a constructor function (more on that in the object-oriented section) to create a new 'Date' object.

// It automatically uses the current date and time when created.
const now = new Date();
console.log(now); // Note: This returns the time in the UTC timezone.

// We can get the year, month, day, and time with different methods:
console.log(now.getFullYear());
console.log(now.getMonth()); // Note: Returns an integer based on the index in an imaginary 'array of months'.
console.log(now.getDate());
console.log(now.getDay());   // Note: Uses the same logic as '.getMonth()'.
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// A timestamp is a number representing the number of milliseconds since January 1st, 1970. It is usually used to compare dates.
console.log(now.getTime());

// Date Strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());