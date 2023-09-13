// Find sum of two array is equal or not and return the array with bigger sum ✅
// A[] = {0,1,2,3,4,5}
// B[] = {5,4,3,2,1,0}

let arr;

const calculateSum = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum;
};

const checkSum = (arr1, arr2) => {
  const sum1 = calculateSum(arr1);
  const sum2 = calculateSum(arr2);

  if (sum1 === sum2) {
    return "sum of both arrays are equal";
  } else if (sum1 > sum2) {
    return `Sum of first array is greater ${arr1} = ${sum1}`;
  } else {
    return `Sum of second array is greater ${arr2} = ${sum2}`;
  }
};

console.log(checkSum([0, 1, 2, 3, 4, 5], [0, 1, 2])); // Sum of first array is greater 0,1,2,3,4,5 = 15
console.log(checkSum([0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5])); //sum of both arrays are equal
console.log(checkSum([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])); // Sum of second array is greater 1,2,3,4,5,6 = 21
