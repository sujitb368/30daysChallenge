// Find the 2nd max element of an array without using any predefined question [1,2,3,4,5] , [1,2,4,4,5] , [1,2,4,3,5]

const findSecondMax = (arr) => {
  try {
    let max = arr[0];
    let secondMax = -Infinity;

    if (arr.length < 2)
      return "At least two elements should be exist to compare";

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] != max) {
        secondMax = arr[i];
      }
    }
    return secondMax === -Infinity ? "No second max found" : secondMax;
  } catch (error) {
    console.log(error);
  }
};

console.log(findSecondMax([4])); //At least two elements should be exist to compare
console.log(findSecondMax([4, 4])); //No second max found
console.log(findSecondMax([1, 2, 4, 3, 5])); //4
