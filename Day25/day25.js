// Find if array is sorted or not if yes then return 1 else return -1
// arr[1,2,3,4,5]
// arr[2,3,4,5,1]

const isSorted = (arr) => {
  try {
    if (arr.length <= 1) return 1;

    let asc = 1;
    let desc = 1;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        asc = -1;
      }
      if (arr[i] < arr[i + 1]) {
        desc = -1;
      }
    }

    return asc || desc;
  } catch (error) {
    console.log(error);
  }
};

console.log(isSorted([1, 2, 3, 4, 5])); // 1
console.log(isSorted([2, 3, 4, 5, 1])); // -1
