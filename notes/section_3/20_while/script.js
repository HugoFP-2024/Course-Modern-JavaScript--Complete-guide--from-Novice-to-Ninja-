// While Loops:

// Quite similar to For Loops, but with different syntax
// It only receives the condition to keep running as an argument

let i = 0;
while (i < 5) {
    console.log(`In the loop: ${i}`);
    i++;
}

// We also have do-while loops, which run the code block at least once, even if the condition is false

let c = 5;
do {
    console.log(`In the do-while loop: ${c}`);
    c++; 
} while (c < 5);