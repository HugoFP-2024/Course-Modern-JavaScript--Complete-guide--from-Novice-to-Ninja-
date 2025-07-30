// Timestamps and Comparison

const before = new Date('February 1 2019 7:30:59');
const now = new Date();

// Get the timestamp (milliseconds since Jan 1, 1970) for each date.
console.log(now.getTime(), before.getTime());

// Calculate the difference between two dates in milliseconds.
const diff = now.getTime() - before.getTime();

// Convert the difference to minutes, hours, and days.
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

// You can also convert a timestamp into a Date object:
const timestamp = 1675938474990;
console.log(new Date(timestamp));