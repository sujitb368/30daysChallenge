// Rotate and array by k time
// Are = {1,2,3,4,5} to arr= {5,2,3,4,1}

const rotated = (arr, k) => {
  try {
    const len = arr.length;

    const kArr = arr.splice(-k);
    return [...kArr, ...arr];
  } catch (error) {
    console.log("Error", error);
  }
};
console.log(rotated([1, 2, 3, 4, 5], 1));
