// Rotate and array by k time
// Are = {1,2,3,4,5} to arr= {5,2,3,4,1}

const rotated = (arr, k) => {
  try {
    //extract last k number elements from array
    const kArr = arr.splice(-k);
    return [...kArr, ...arr];
  } catch (error) {
    console.log("Error", error);
  }
};
console.log(rotated([1, 2, 3, 4, 5], 1)); //[ 5, 1, 2, 3, 4 ]
console.log(rotated([5, 2, 3, 4, 1], 1)); //[ 1, 5, 2, 3, 4 ]
console.log(rotated([1, 2, 3, 4, 5], 2)); //[ 4, 5, 1, 2, 3 ]
console.log(rotated([5, 2, 3, 4, 1], 2)); //[ 4, 1, 5, 2, 3 ]
