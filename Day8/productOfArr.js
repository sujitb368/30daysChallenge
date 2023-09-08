//assuming will get two arrays always
//program to merge two array
const merge = (arr1, arr2) => {
  for (let elm of arr2) {
    arr1.push(elm);
  }

  return arr1;
};

const mergedArr = merge([0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0]);
const product = mergedArr.reduce((acc, curr) => acc * curr, 1); // 0
//product of above given arrays is 0
console.log(product);
