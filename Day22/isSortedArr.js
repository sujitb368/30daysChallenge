// Find out if an array is sorted or not  [1,2,3,4,3,5] , [3,4,5,6,9]
// return true if array is sorted or return false if not

const isSorted = (arr) => {
  try {
    if (arr.length <= 1) return true;

    let asc = true,
      desc = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        asc = false;
      }
      if (arr[i] < arr[i + 1]) {
        desc = false;
      }
    }

    return asc || desc;
  } catch (error) {
    console.log(error);
  }
};

console.log(isSorted([1, 2, 3, 4, 3, 5])); // false
console.log(isSorted([3, 4, 5, 6, 9])); // true
