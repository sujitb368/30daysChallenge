// Find if elements that can make key = 10
// arr[1,2,3,4,5]

const sumToKey = (arr, key) => {
  try {
    const len = arr.length;
    const result = [];
    for (let i = 0; i < len; i++) {
      let sum = arr[i];
      for (let j = i + 1; j < len; j++) {
        sum += arr[j];
        if (sum === key) {
          result.push(arr.slice(i, j + 1));
        }
      }
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

console.log(sumToKey([1, 2, 3, 4, 5], 9)); //[ [ 2, 3, 4 ], [ 4, 5 ] ]
