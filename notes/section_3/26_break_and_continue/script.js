// Break and Continue

// Break is used to exit the loop at the condition we want
// Continue is used to skip to the next loop iteration

const scores = [0, 10, 20, 80];

for (let i = 0; i < scores.length; i++) {
    
    if (scores[i] === 0) {
        continue
    }

    console.log('Your score: ', scores[i]);
    
    if (scores[i] === 20) {
        console.log('You are the best!');
        break
    }
}