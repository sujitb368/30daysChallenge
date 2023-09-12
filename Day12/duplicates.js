// Find a duplicate number in an array of integers
const findDuplicate = (arr) => {
  const duplicateObj = {};

  const duplicateNumber = [];

  for (let item of arr) {
    if (duplicateObj[item] !== undefined) {
      duplicateObj[item] += 1;
      if (duplicateNumber.indexOf(item) === -1) {
        duplicateNumber.push(item);
      }
    } else {
      duplicateObj[item] += 1;
    }
  }
  return duplicateNumber;
};

console.log(findDuplicate([1, 1, 1, 2, 3, 5, 5, 6])); // [1,5]
