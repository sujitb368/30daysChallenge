// Find first occurrence of key and return it's indexs

// function to find first occurrence of key in array
// function will take an array and key as parameters
const firstIndex = (arr, key) => {
  for (const index in arr) {
    if (arr[index] === key) {
      return index;
    }
  }
};

console.log(firstIndex([0, 1, 2, 3, 4, 5], 1)); //1
console.log(firstIndex([5, 4, 3, 2, 1, 0], 1)); //4
