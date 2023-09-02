const findMin = (arr) => {
  const len = arr.length;
  let temp = Infinity;

  for (let i of arr) {
    temp = i < temp ? i : temp;
  }

  return temp;
};

console.log(findMin([0, 1, 2, 3, 4, 5])); //0
console.log(findMin([5, 4, 3, 2, 1, 0])); //0
