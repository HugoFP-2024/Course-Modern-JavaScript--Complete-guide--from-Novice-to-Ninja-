// Applying a Promise:

const getTodos = resource => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Error!')
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

// getTodos('todos/michael.json').then(data => {
//     console.log('Promise resolved: ', data);
// }).catch(err => {
//     console.log('Error: ', err);
// });

// We can also chain multiple promises:
getTodos('todos/cesar.json').then(data => {
  console.log('promise 1 resolved:', data);
  return getTodos('todos/michael.json');
}).then(data => {
  console.log('promise 2 resolved:', data);
  return getTodos('todos/rodrigo.json');
}).then(data => {
  console.log('promise 3 resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});