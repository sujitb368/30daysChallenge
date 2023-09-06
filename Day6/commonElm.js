// function to find common elements from array
// assuming that function will take two array as argument
// then it will return the common elements

const commonElements = (arr1, arr2) => {
  const common = [];
  arr1.forEach((element) => {
    if (arr2.indexOf(element) !== -1 && common.indexOf(element) === -1) {
      common.push(element);
    }
  });

  return common;
};

console.log(
  "common elements are ",
  commonElements([0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0])
); //[ 0, 1, 2, 3, 4, 5 ]
