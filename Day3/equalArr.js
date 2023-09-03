//function to sort array
const sortArr = (arr) => {
  let temp;
  for (let i in arr) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

const isEqual = (arr1, arr2) => {
  const len1 = arr1.length;
  const len2 = arr2.length;

  if (len1 !== len2) return -1;

  const sorted1 = sortArr(arr1);
  const sorted2 = sortArr(arr2);

  for (const key in sorted1) {
    if (sorted1[key] !== sorted2[key]) {
      return -1;
    }
  }

  return 1;
};

// Testcase 1 :
// A[] = {1,2,5,4,0}
// B[] = {1,2,5,4,0}
// Testcase 2:
// A[] = {1,2,3,4,5}
// B[] = {11, 22, 33 ,44}

console.log(isEqual([1, 2, 5, 4, 0], [1, 2, 5, 4, 0]));
console.log(isEqual([1, 2, 5, 4, 0], [11, 22, 33, 44]));
