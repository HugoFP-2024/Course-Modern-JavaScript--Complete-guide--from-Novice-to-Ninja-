// Arrow Functions:
// Arrow Functions are a simpler way to write functions 

const calcArea = function (radius) {
    return 3.14 * radius ** 2;
}

// Rewrite the function 'calcArea' with an arrow function:

let calcArea1 = (radius) => {
     return 3.14 * radius ** 2;
};

// Simplifying:

let calcArea2 = radius =>  3.14 * radius ** 2;
// If it has only one parameter, you can remove the parenthesis
// If it only has a single return, you can remove the 'return' keyword and remove the brackets