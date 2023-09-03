const occurrence = (arr, element) => {
  let count = 0;
  for (const elm of arr) {
    if (element === elm) {
      count += 1;
    }
  }

  return count;
};

// key = 1
// A[] = {0,1,2,3,4,5}
// B[] = {5,4,3,2,1,0}

console.log(occurrence([0, 1, 2, 3, 4, 5], 1));
console.log(occurrence([5, 4, 3, 2, 1, 0], 1));
