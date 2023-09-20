### async/await

- async/await : Is a modern JavaScript feature that provides a more readable and straightforward way to work with asynchronous code. It's built on top of Promises, which were introduced to handle asynchronous operations in a more structured way than callbacks. async/await makes asynchronous code look and behave more like synchronous code, making it easier to understand and maintain.

- introduce in ES2017

- To define an asynchronous function, we use `async` keyword before the function declaration or expression.
- The `await` keyword pauses the execution of the function until the Promise is resolved, and then it returns the resolved value
  For example:

// declare a function using async keyword

- async function fetchData() {
  // await keyword to pause the execution until the Promise is resolved
  const data = await fetch('https://example.com/data');
  // code here executes after the Promise is resolved
  return data;
  }

### Promises:

- JavaScript feature to handle asynchronous operations in a more structured and manageable way compared to traditional callbacks.
- Promises represent a value (or the eventual result of an operation) that may not be available yet but will be at some point in the future, either successfully or unsuccessfully.

- Pending: The initial state when the Promise is created, and the asynchronous operation is ongoing.

- Fulfilled (Resolved): The state when the asynchronous operation is successfully completed. In this case, the Promise contains a resolved value.

- Rejected: The state when an error occurs during the asynchronous operation. In this case, the Promise contains a reason (usually an error object) for the failure.

- Ex. to create and use a Promise:

const myPromise = new Promise((resolve, reject) => {

// time taking operation
setTimeout(() => {
const randomNumber = Math.random();
if (randomNumber < 0.5) {
// if resolve
resolve(randomNumber);
} else {
//if rejected
reject(new Error('Random number is too large!'));
}
}, 1000);
});
// Handling a Promise
myPromise
.then((resolvedValue) => {
console.log('Promise fulfilled with value:', resolvedValue);
})
.catch((error) => {
console.error('Promise rejected with error:', error);
});

### .then .catch :

- The .then() and .catch() methods are used with promises in JavaScript.
- Promises are a way of handling asynchronous operations, such as AJAX requests or database queries.
- When a promise is created, it can be in one of three states

  - Fulfilled:: The promise has completed successfully and has a value associated with it.
  - Rejected:: The promise has failed and has an error associated with it.
  - Pending:: The promise is still waiting to complete or fail.

- The .then() method is used to add a function that will be called when the promise is fulfilled or rejected.
  The function will receive the promise's value or error as an argument.
- The .catch() method is used to add a function that will be called only if the promise is rejected.
  The function will receive the promise's error as an argument.

Example:
const promise = new Promise((resolve, reject) => {
// Do something asynchronous here...
resolve('promise was fulfilled');
// or
reject('promise was rejected');
});

promise.then(value => {
// This function will be called if the promise is fulfilled.
console.log(value); // 'promise was fulfilled'
});

promise.catch(error => {
// This function will be called if the promise is rejected.
console.log(error); // 'promise was rejected'
});
