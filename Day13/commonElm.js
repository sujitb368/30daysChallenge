// Find Common element in 2 array  ✅
// A[] = {0,1,2,3,4,5}
// B[] = {5,4,3,2,1,0}

const findCommon = (array1, array2) => {
  const common = array1.filter((el) => array2.indexOf(el) !== -1);

  return common;
};

console.log(findCommon([3, 4, 5], [5, 4, 3, 2, 1, 0])); //[ 3, 4, 5 ]
console.log(findCommon([0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0])); //[ 0, 1, 2, 3, 4, 5 ]
