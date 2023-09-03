const duplicate = (arr) => {
  const obj = {};
  for (const elm of arr) {
    if (obj[elm] > 0) {
      obj[elm] += 1;
    } else {
      obj[elm] = 1;
    }
  }

  const duplicateElements = [];

  for (const key in obj) {
    if (obj[key] > 1) {
      duplicateElements.push(key);
    }
  }

  return duplicateElements.length > 0
    ? "duplicate elements are " + duplicateElements
    : "no duplicate";
};

// Duplicate in array ✅
// A[] = {0,1,2,3,4,5}
// B[] = {5,4,3,2,1,0}

console.log(duplicate([0, 1, 2, 3, 4, 5])); //no duplicate
console.log(duplicate([5, 4, 3, 2, 1, 0])); //no duplicate
console.log(duplicate([5, 4, 3, 2, 1, 0, 5, 4, 3])); //duplicate elements are 3,4,5
