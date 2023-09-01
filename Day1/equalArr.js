//function to sort arrays using loop
const sortArr = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
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

//checks if two arrays are equal
const isEqual = (arr1, arr2) => {
  const arr1Length = arr1.length;
  const arr2Length = arr2.length;
  //   if length is not equal then return -1
  if (arr1Length !== arr2Length) {
    return -1;
  }

  //sort arrays assentially
  const sorted1 = sortArr(arr1);
  const sorted2 = sortArr(arr2);

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] === sorted2[i]) {
      continue;
    } else {
      return -1;
    }
  }
  //return 1 because if here arrays are equal
  return 1;
};

console.log(isEqual([5, 2, 8, 4, 5], [3, 2, 8, 4, 5]));
