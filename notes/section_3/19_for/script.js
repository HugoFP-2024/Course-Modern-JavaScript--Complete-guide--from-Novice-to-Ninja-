// For Loops:

// For loops receive 3 arguments: A variable used as a 'counter'
//                                A condition to keep running
//                                A way to increment that 'counter'

for(let i = 0; i < 5; i++){
    console.log(`In the loop: ${i}`);
}
console.log('Loop finished!');


const names = ['Mario', 'Cesar', 'Vanessa'];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

for(let i = 0; i < names.length; i++){
    let html = `<div> ${names[i]} </div>`;
    console.log(html);
}