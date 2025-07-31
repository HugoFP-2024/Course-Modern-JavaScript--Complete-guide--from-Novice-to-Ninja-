// Callback Functions in HTTP Requests:
// We can wrap around our HTTP Requests with Callback Functions, that way, we can every time we want to make a request, just call the function and do something different, making the code more flexible and reusable

const getTodos = callback => {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
    
    request.addEventListener('readystatechange', () => {    
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText)    ;
            callback(undefined, request.responseText);
        } else if (request.readyState === 4){
            // console.log('Something has gone wrong...');
            callback('Could not fetch data.', undefined);
        }
    });
};

// We can see that, when executing the following 4 'log's', the code won't stop for the 'getTodos()', representing piece of asynchronous code.
console.log(1);
console.log(2);

// Note: By convention, the error comes first, and the data comes after it.
getTodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
