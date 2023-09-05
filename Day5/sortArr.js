// #Day 5:
// Sort an array ✅
// A[] = {0,1,2,3,4,5}
// B[] = {5,4,3,2,1,0}

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

console.log(sortArr([0, 1, 2, 3, 4, 5])); //0, 1, 2, 3, 4, 5
console.log(sortArr([5, 4, 3, 2, 1, 0])); //0, 1, 2, 3, 4, 5
