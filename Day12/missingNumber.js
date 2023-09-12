// assuming every element will be distinct
// max length of array will be 100
// minimum value is 1 and max value is 100
// number are in sequence and only one value is missing

//helper function to sort array
const sortArray = (arr) => {
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
const missingElm = (arr) => {
  const arrLength = arr.length;
  const sorted = sortArray(arr);
  const minValue = sorted[0];
  const maxValue = sorted[arrLength - 1];

  const temp = Array.from({ length: arrLength });

  temp.forEach((_, index) => {
    if (index === 0) {
      temp[index] = minValue;
    } else {
      temp[index] = minValue + index;
    }
  });

  const missingNumber = [];
  temp.forEach((item, index) => {
    if (arr.indexOf(item) === -1) {
      missingNumber.push(item);
    }
  });

  return missingNumber.length > 0
    ? "Missing numbers => " + missingNumber
    : "No missing number";
};

console.log(missingElm([5, 6, 7, 8, 10])); //
