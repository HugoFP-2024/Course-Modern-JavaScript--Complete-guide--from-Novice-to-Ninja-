// Fetch:
// Fetch is a quicker and simpler way to make requests for data from an API.

// The '.fetch()' function always returns a promise. It returns a response object, and if we want to check the data of the response, we need to use the '.json()' method.
fetch('todos/cesar.json').then(response => {
  console.log('Resolved: ', response);
  return response.json(); // Note: '.json()' already returns an array, so it's unnecessary to use 'JSON.parse()'
}).then(data => {
  console.log(data);
}).catch(error => { // IMPORTANT: '.fetch()' will only reject a request if the endpoint is inaccessible or offline. If you misspell it, it will still be considered resolved, even though it has a status of 404.
  console.log('Rejected: ', error);
});
