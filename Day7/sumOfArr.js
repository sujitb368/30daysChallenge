//sum of array elements
const sum = (arr) => {
  //using reduce array function
  return arr.reduce((acc, cur) => acc + cur, 0);
};

console.log(sum([0, 1, 2, 3, 4, 5])); //15
console.log(sum([5, 4, 3, 2, 1, 0])); //15
