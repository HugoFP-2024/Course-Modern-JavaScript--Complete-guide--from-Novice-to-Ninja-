// Async and Await:
// Async and Await are two keywords used to chain multiple promises in a much cleaner and smoother way.

// With the 'async' keyword, the function will always return a promise, as well as turn it into an asynchronous function. 'await' can replace the '.then()' part of the function.
const getTodos = async () => {

  const response = await fetch('todos/cesar.json');
  // Remember that 'fetch()' can still resolve even if it doesn't find the correct path to the data. We can create our own error, check the status, and throw it before the code tries to transform the non-existent response into an array.
  // This causes the promise returned by 'async' to be rejected.
  if (response.status !== 200) {
    throw new Error('Can\'t fetch the data')
  }

  const data = await response.json();

  console.log(data);
  return data

};

// getTodos().then(data => {
//   console.log('Resolved:', data);
// });

getTodos()
  .then(data => console.log('Resolved: ', data))
  .catch(error => console.log('Rejected: ', error.message));