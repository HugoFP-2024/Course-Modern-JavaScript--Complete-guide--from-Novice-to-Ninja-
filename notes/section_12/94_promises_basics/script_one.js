// Promise Basics:

const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.open('GET', resource);
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // Receiving the JSON string and transforming it into an array
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            // console.log('Something has gone wrong...');
            callback('Could not fetch data.', undefined);
        }
    });
};

// If we need to get multiple responses from more than one API, and we need them in a specified order, we can do it in the following way. However, this is not the best way to do it and is known as 'callback hell'.
getTodos('todos/cesar.json', (err, data) => {
    console.log(data);
    getTodos('todos/cesar.json', (err, data) => {
        console.log(data);
        getTodos('todos/cesar.json', (err, data) => {
            console.log(data);
        });
    });
});

// We can make that better by using promises, which take a function as a parameter. Promises have 2 outcomes: they are either resolved or rejected at some point.
const getSomething = () => {

    // 'resolve' and 'reject' are functions built within the Promise object
    return new Promise((resolve, reject) => {
        // Fetch something...
        resolve('Some data...');
        // reject('Some error...');
    });

};

// When calling the function, it will return a promise that will resolve or reject at some point.
// We can use the '.then()' method, which receives two functions as arguments (the first fires upon resolve, and the second upon reject), and will fire that function after the promise receives its 'resolve' or 'reject'
getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

// We can also use '.catch' to handle rejects
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})