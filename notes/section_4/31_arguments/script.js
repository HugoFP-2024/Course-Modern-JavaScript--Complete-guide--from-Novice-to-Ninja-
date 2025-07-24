// Arguments and Parameters:
// Creating a variable in the function definition gives us a parameter, which we can use when calling the function by passing a respective argument to that parameter ('name' is a parameter, and 'Cesar' is an argument)

const speak = function (name = 'Felipe') {
    console.log(`Hello ${name}!`);
}

speak('Cesar');