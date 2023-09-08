//assuming will get two arrays always
//program to merge two array
const merge = (arr1, arr2) => {
  for (let elm of arr2) {
    arr1.push(elm);
  }

  return arr1;
};

const mergedArr = merge([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]);

const sum = mergedArr.reduce((acc, curr) => acc + curr, 0); // 15

//sum of this merged array is 15
console.log(sum);
