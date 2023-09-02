const findMax = (arr) => {
  const len = arr.length;
  let temp = 0;

  for (let i of arr) {
    temp = i > temp ? i : temp;
  }

  return temp;
};

console.log(findMax([0, 1, 2, 3, 4, 5])); //5
console.log(findMax([5, 4, 3, 2, 1, 0])); //5
