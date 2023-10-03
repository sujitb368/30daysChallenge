// Find Maximum element of an array [1,2,3,4,5]

const findMax = (arr) => {
  try {
    let max = 0;

    for (const elm of arr) {
      if (elm > max) {
        max = elm;
      }
    }
    return max;
  } catch (error) {
    console.log(error);
  }
};

console.log(findMax([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); //5
console.log(findMax([1, 77, 3, 44, -100, 5])); //77
