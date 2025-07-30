// Using the date-fns library for date manipulation:

const now = new Date();

// Check if the current date is today.
console.log(dateFns.isToday(now));

// Format the current date in different ways.
console.log(dateFns.format(now, 'yyyy')); // Correct format string for year
console.log(dateFns.format(now, 'MMMM')); // Full month name
console.log(dateFns.format(now, 'MMM'));  // Short month name

// Comparing dates:
const before = new Date('February 1 2019 12:00:00');

// Get the distance between two dates in words, with a suffix.
console.log(dateFns.formatDistance(now, before, {addSuffix: true}));