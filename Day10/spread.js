// The spread operator (...) is a feature in JavaScript that allows to spread the elements of an iterable (like an array or a string) or the properties of an object into another array or object. It provides a concise way to create copies, combine arrays, and clone objects

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; //[ 1, 2, 3]

const originalObject = { name: "John", age: 30 };
const copiedObject = { ...originalObject }; //{ name: 'John', age: 30 }
console.log(copiedObject);

console.log(copiedArray);

// combining arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); //[ 1, 2, 3, 4, 5, 6 ]

const text = "Hello";
const characters = [...text];

console.log(characters); // ["H", "e", "l", "l", "o"]
