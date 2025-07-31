// Promise Basics:

const getTodos = (request, callback) => {
    const request = new XMLHttpRequest();

    request.open('GET', request);
    request.send();
    
    request.addEventListener('readystatechange', () => {    
        if (request.readyState === 4 && request.status === 200) {
            // Receiving the JSON string and transforming it into an array
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4){
            // console.log('Something has gone wrong...');
            callback('Could not fetch data.', undefined);
        }
    });
};

// In case we need to get multiple responses for more than one API, and we need that in a specfied order, we can make it in the following way, but that is not the best way to do it, being know as a 'callback hell'.
// getTodos('todos/cesar.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/cesar.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/cesar.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });

// We can make that better by using promises, wich takes a function as a parameter. Promises have 2 outcomes, with it or being resolved, or being rejected at some point.
const getSomething = () => {

    // 'resolve' and 'reject' are function built whitin the Promises objects
    return new Promise((resolve, reject) => {
        // Fetch something...
        resolve('Some data...');
        // reject('Some error...');
    });

};

// When calling the function, it will return a promise that, will resolve or reject at some point.
// We can place the '.then()' method that, receives two function as an argument (first firing upon the resolve, and teh second one upon the reject), and will fire that function after the promise receive its 'resolve' or 'reject'
getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

// We can also use the '.catch' to receive the rejects
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})