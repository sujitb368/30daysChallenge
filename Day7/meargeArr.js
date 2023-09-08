//program to merge two array
//Write a program to merge 2 Array
const merge = (arr1, arr2) => {
  for (let elm of arr2) {
    arr1.push(elm);
  }

  return arr1;
};

// A[] = {0,1,2,3,4,5}
// B[] = {5,4,3,2,1,0}
console.log(merge([0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0])); //[0, 1, 2, 3, 4, 5, 5, 4, 3, 2,1, 0]
