const findInArr = (arr, key) => {
  let isFound = false;
  let index;

  // check if the key is exist in the array
  for (let i in arr) {
    if (arr[i] === key) {
      //if found set isFound = true and index = i finally break the loop
      isFound = true;
      index = i;
      break;
    }
  }

  //return message is found or not found
  return isFound === true
    ? `${key} found at index ${index}`
    : `${key} not found`;
};

console.log(findInArr([1, 2, 5, 4, 0], 4)); // 4 found at index 3
console.log(findInArr([11, 22, 33, 44], 33)); // 33 found at index 2
