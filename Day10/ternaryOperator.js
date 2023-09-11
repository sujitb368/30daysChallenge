// syntax for trenary operator
//The ternary operator (? :) is a concise conditional operator in JavaScript that allows to write conditional expressions with a shorter syntax compared to traditional if-else statements. It's a useful tool for making quick decisions in your code.
// condition ? exprIfTrue : exprIfFalse

const age = 26;
const isTeen = age >= 18 ? "You are Adult" : "Under age";
console.log(isTeen); // You are Adult

const isMale = true;
const message = `User is ${isMale ? "Male" : "Female"} ${
  age >= 18 ? "and Adult" : "but Under age"
}.`;
console.log(message); //User is Male and Adult.

//replacement of if-else lader
const temperature = 20;
const weatherConditionTernary =
  temperature > 30 ? "Hot" : temperature >= 20 ? "Moderate" : "Cold";

console.log(weatherConditionTernary); //Moderate
