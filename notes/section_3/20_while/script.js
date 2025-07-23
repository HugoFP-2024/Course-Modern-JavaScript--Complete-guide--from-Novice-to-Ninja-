// While Loops:

// Quite similar to For Loops, but with a different sintax
// It only receives as an argument the condition to keep running

let i = 0;
while (i < 5) {
    console.log(`In the loop: ${i}`);
    i++;
}

// We also have the do-while loops, that even if the condition is false, it runs the code block at least once

let c = 5;
do {
    console.log(`In the do-while loop: ${c}`);
    c++; 
} while (c < 5);