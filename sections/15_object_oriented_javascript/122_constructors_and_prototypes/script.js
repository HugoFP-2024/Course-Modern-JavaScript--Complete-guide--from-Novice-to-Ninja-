// Constructors:
// The 'class' keyword was recently added to JavaScript to better emulate object creation as in other languages. Before its introduction, it was still possible to create objects and their constructor functions as shown below.

function User(username, email) {
    this.username = username;
    this.email = email;

    this.login = function(){
        console.log(`${this.username} has logged in!`);
    }
};

const userOne = new User('Hugo', 'hugo.fontolan@gmail.com');

console.log(userOne);
userOne.login();

// Prototypes:
// Every object in JavaScript has a property called '__proto__' that, if expanded, shows multiple properties and methods applicable to that object, array, or other type. This property is responsible for linking, for example, an array to the Array prototype in JavaScript, which holds all the methods available to array objects. This means we don't store every method inside every single new array, but instead link it to the single prototype using the '__proto__' property.

// This is very useful because we can add methods to the prototype of our own created objects, so we don't need to store our methods in every instance of User, for example.
// We can see all methods available in a prototype by writing the constructor of such object + '.prototype' (like 'Array.prototype').

// To add new methods to a prototype, we use this notation:
User.prototype.logout = function (){
    console.log(`${this.username} has logged out!`);
    // Allow method chaining:
    return this;
};

// Prototypal Inheritance:
function Admin (username, email, title) {
    // The following replaces the 'super()' method:
    User.call(this, username, email);
    this.title = title;
}

// To inherit the prototyped methods from User, we set the Admin prototype to a new object created from User's prototype.
Admin.prototype = Object.create(User.prototype);
// Note: This creates a second-layer '__proto__' property inside the '__proto__' of Admin, chaining both prototypes.

// Add a method to the Admin prototype:
Admin.prototype.deleteUser = function (){
    console.log('Deleting someone');
};