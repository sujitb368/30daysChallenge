//MAP methods
// map() creates a new array from calling a function for every array element.
// does not execute the function for empty elements.
// does not change the original array.
// map function takes A callback function to be run for each array element
// callback function take 1st currentValue (required), index of the current element, The array of the current element

// FILTER method
// filter() creates a new array from calling a function for every array element.
// does not execute the function for empty elements.
// does not change the original array.
// filter function takes A callback function to be run for each array element
// callback function take 1st currentValue (required), index of the current element, The array of the current element

// The reduce() method executes a reducer function for array element.
// returns a single value: the function's accumulated result.
// does not execute the function for empty array elements.
// does not change the original array.
//syntax of reduce fuction
// array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)

//solve using map function
const numbers = [4, 9, 16, 25];
const map = numbers.map((element, index, numbers) => {
  return element * index;
});

console.log(numbers); //unchanged orginal array[ 4, 9, 16, 25 ]
console.log(map); // [ 0, 9, 32, 75 ]

//find number above 15 from numbers array
//solve using filter function
const filtered = numbers.filter(
  (currentValue, index, numbers) => currentValue > 15
);

console.log(numbers); // unchanged original array [ 4, 9, 16, 25 ]
console.log(filtered); // [ 16, 25 ]

//solve by reduce function
//find sum of numbers

const sumed = numbers.reduce((total, currentValue) => total + currentValue, 0);
console.log(numbers); // unchanged original array [ 4, 9, 16, 25 ]
console.log(sumed); // 54
