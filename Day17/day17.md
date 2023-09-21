### ES6/ECMAScript 2015 features :

1. **let and const**: `let` and `const` are block-scoped variable declarations that replace `var`. `let` allows us to declare variables with block scope, while `const` creates variables that cannot be reassigned.

2. **Arrow Functions**: Arrow functions provide a more concise syntax for defining functions. They use `=>` to separate parameters from the function body.

3. **Default Parameters**: specify default values for function parameters.

4. **Template Literals**: Template literals allows to create multi-line strings and embed expressions using backticks. ex: `sting with ${variable_name}`

5. **Rest and Spread Operators**: The `...` operator can be used for both rest parameters (in function declarations) and spreading elements (in array literals or function calls).

6. **Destructuring**: Destructuring let us to extract values from arrays and objects into individual variables.

7. **Classes**: ES6 introduced class syntax for defining constructor functions and prototypes, making it more similar to traditional class-based languages.

8. **Modules**: ES6 introduced a standard module system with the `import` and `export` keywords for better code organization and reuse.

9. **Promises**: Promises provide a way to work with asynchronous operations in a more structured manner, making it easier to handle errors and chaining multiple asynchronous actions.

10. **Generators**:To define functions that can pause and resume their execution, enabling asynchronous-like code in a synchronous-looking fashion using `yield`.

11. **Map and Set**: ES6 introduced the `Map` and `Set` data structures, which provide more sophisticated ways to manage collections of data compared to plain objects and arrays.

12. **Symbols**: Symbols are a new primitive data type that can be used as object property keys, providing a way to create private or unique keys.

13. **Proxy and Reflect**: The `Proxy` object allows to intercept and customize fundamental operations on objects, while the `Reflect` object provides methods for these operations.

14. **Iterators and Iterables**: ES6 introduced the concept of iterable objects and iterators, making it easier to loop through data structures like arrays, maps, and sets.

15. **Async/Await**: ES6 introduced the `async` and `await` keywords for working with asynchronous code in a more synchronous style, simplifying error handling and control flow.

16. **Symbols**: Symbols are a new primitive data type that can be used as object property keys, providing a way to create private or unique keys.

17. **String Methods**: ES6 added many useful string methods like `startsWith()`, `endsWith()`, `includes()`, and more.

18. **Array Methods**: New array methods like `find()`, `findIndex()`, `forEach()`, `map()`, `filter()`, and `reduce()` were introduced to simplify array manipulation.

19. **Math Object**: ES6 added new math-related methods and constants to the `Math` object.

20. **Object Enhancements**: ES6 introduced shorthand property and method definitions, computed property names, and more concise ways to create objects.
21. **Tagged Templates**:

```
let greetings = "Hi";
let name = "Sujit";
let age = 40;

function dispaly(static, ...tags) {
  console.log(static); // ["", " my name is ", " and I am ", ""]
  console.log(tags); //["Hi", "Sujit", 40]
}

display`${greetings} my name is ${name} and I am ${age}`;
```

### Loops:

1. **for Loop:**
   The traditional `for` loop is used for various looping tasks.

   ```
   // syntax has 3 parts `i=0` is intialization
   // i < 5 is condition to be executed if true
   // i++ is increment the index value
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   //0
   //1
   //2
   //3
   //4
   ```

2. **for...in Loop:**
   The `for...in` loop is used to iterate over the properties (keys) of an object. It's not recommended for arrays but is useful for objects.

   ```javascript
   const person = {
     name: "John",
     age: 30,
     city: "New York",
   };

   for (const key in person) {
     console.log(`${key}: ${person[key]}`);
   }
   This loop will print each property and its value in the `person` object.
   //name: John
   //age: 30
   //city: New York
   ```

3. **for...of Loop:**
   The `for...of` loop is specifically designed for iterating over iterable objects, such as arrays and strings.

   ```javascript
   const fruits = ["apple", "banana", "cherry"];

   for (const fruit of fruits) {
     console.log(fruit);
   }
   This loop will print each element in the `fruits` array.
   //apple
   //banana
   //cherry
   ```

4. **forEach Method:**
   The `forEach` method is available for arrays and provides a clean and concise way to iterate through array elements.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   numbers.forEach(function (number) {
     console.log(number);
   });

   This loop will also print each element in the `numbers` array.
   //1
   //2
   //3
   //4
   //5

   ```
