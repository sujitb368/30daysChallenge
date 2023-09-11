// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

//destructuring from array and assign to variables

const array = [10, 20, 30, 40, 50, 60];

let [a, b] = array;
console.log(a, b); //10, 20

const [a1, , b1, ...rest1] = array;
console.log(a1, b1, rest1); //10, 30, [40,50,60]

const [a2, b2, ...[c, d]] = array;
console.log(a2, b2, c, d); // 10,20, 30,40

// object destructuring
const person = { aa: 1, bb: 2, cc: 3, dd: 4, ee: 5 };
const { aa, bb } = person;

console.log(aa, bb); // 1, 2
