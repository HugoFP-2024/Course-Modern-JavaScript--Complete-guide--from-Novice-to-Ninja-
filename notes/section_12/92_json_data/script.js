// JSON Data:
// When we make an HTTP request, we receive a JSON response, which looks a lot like an array of objects, but is actually a string. We have the method 'JSON.parse()', which gets that JSON string and transforms it into an array.

const getTodos = callback => {
    const request = new XMLHttpRequest();

    // We can also get JSON data from a file, like this: (Check the file to see how JSON is written!)
    // request.open('GET', 'todos.json');
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
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

getTodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});