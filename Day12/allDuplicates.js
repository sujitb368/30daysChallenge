// Find all duplicate numbers in an array with multiple duplicates ✅
// Testcase 1 :
// A[] = {1,2,5,4,0}
// Testcase 2:
// A[] = {1,2,3,4,5}

const findAllDuplicate = (arr) => {
  const duplicateObj = {};

  const duplicateNumbers = [];

  for (let item of arr) {
    if (duplicateObj[item] !== undefined) {
      duplicateObj[item] += 1;
      duplicateNumbers.push(item);
    } else {
      duplicateObj[item] += 1;
    }
  }
  return duplicateNumbers;
};

console.log(
  "all duplicates ",
  findAllDuplicate([1, 1, 1, 2, 2, 6, 2, 3, 5, 5, 6])
); // [1,5]
