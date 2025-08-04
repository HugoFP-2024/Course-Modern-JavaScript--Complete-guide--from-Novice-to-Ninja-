// HTTP Requests:
// HTTP requests are messages sent by a client (like a browser or script) to a server to ask for data or perform actions. Common types include GET (to retrieve data) and POST (to send data). In JavaScript, you use objects like XMLHttpRequest or fetch to make these requests.

const request = new XMLHttpRequest();

// Every HTTP request has 4 stages of completion, which can be tracked with the 'readystatechange' event listener and the 'readyState' property.
// The stages are: 1 (OPENED)           = '.open()' has been called
//                 2 (HEADERS_RECEIVED) = '.send()' has been called, headers and status are available
//                 3 (LOADING)          = Downloading, 'responseText' has partial data
//                 4 (DONE)             = The operation is complete.

// We also need to check the 'status' property in the response from the API, because even if something goes wrong with the request, it will reach the '.readyState' of 4, even though it's not working.
// You can check the MDN documentation for the convention of what each status means (Available at: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);

    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log('Something has gone wrong...');
    }
});

// The '.open' method is used to set up the request, and the '.send' method is used to actually send the request itself.
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();