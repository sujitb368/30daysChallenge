# let and const:

- let and const both are block scoped
- while const creates constants that cannot be reassigned.
- const variable must be initialized while declaring

- example usage
- let variable; || let variable=10 (correct syntax)
- const constantValue; (wrong syntax error will be shown) && const constantValue = 10; (correct syntax)

# Arrow Functions:

- syntax for arrow functions `const add = (a, b) =>{ a + b}`
- Arrow functions provide a lexical this binding. It means, they inherit the value of “this” from the enclosing  
  scope
- to invoke the arrow function we need to define the function above the invoking line

# Template Literals:

- Template literals allow you to embed expressions inside strings using backticks (``)
- `this is a template literal example ${variableName}`
- example : const name = "John"; console.log(`Hello, ${name}!`); o/p will be `Hello John!`

# Destructuring:

- Destructuring enables you to extract values from arrays and objects more easily
- syntax for array destructuring const `[parameter1, parameter2] = arrayName` first value will be assigned to `parameter1 and parameter2 will get 2nd value from the arrayName

# Spread and Rest Operators:

- The spread operator (...) can be used to spread elements of an array or properties of an object. The rest operator can collect multiple arguments into an array.
- example: const arr1 = [1, 2, 3]; const arr2 = [...arr1, 4, 5]; console.log(arr2); => 1,2,3,4,5
- example: const str= "abcd"; console.log(...str); => [a,b,c,d]

# Modules:

- ES6 introduced a standard module system with import and export statements, allowing for better code organization and reuse.

- Exporting module: here file name test.js
  export function add(a, b) {
  return a + b;
  }

// Importing module
import { add } from "./test.js";

# Default Parameters:

- provide default values for function parameters.
- function greet(name = "Guest") {
  console.log(`Hello, ${name}!`); => "Hello, Guest"
  }

# The For/Of Loop:

- const objects= [1,2,3,4]
  for(const item of objects) {
  console.log(item)
  }
  - 1
  - 2
  - 3
  - 4

# new string methods:

- String.[startsWith(),endsWith(),includes()]

# new array methods:

- Array.[find(),,findIndex()]

# Array.from():

- The Array.from() method returns an Array object from any object with a length property or any iterable object.
- Array.from("ABCDEFG") // Returns [A,B,C,D,E,F,G]

# Array keys()

- The keys() method returns an Array Iterator object with the keys of an array.
- const fruits = ["Banana", "Orange", "Apple", "Mango"];
- const keys = fruits.keys()
  let text = "";
  for (let x of keys) {
  text += x + "<br>"; // returns 0,1,2,3  
  }

# New Number Methods:

- Number.isInteger() method returns true if the argument is an integer.
- Number.isSafeInteger() method returns true if the argument is a safe integer.

# new Global Methods:

- isFinite() method returns false if the argument is Infinity or NaN
- isNaN() method returns true if the argument is NaN. Otherwise it returns false:

# Object entries()

- Create an Array Iterator, and then iterate over the key/value pairs:

# New Math Methods:

- Math.trunc() // Math.trunc(x) returns the integer part of x:
- Math.sign() // Math.sign(x) returns if x is negative, null or positive: -1, 0, 1
- Math.cbrt() // Math.cbrt(x) returns the cube root of x
- Math.log2() // Math.log2(x) returns the base 2 logarithm of x
- Math.log10() // Math.log10(x) returns the base 10 logarithm of x

# New Number Properties:

- EPSILON
- MIN_SAFE_INTEGER
- MAX_SAFE_INTEGER
