//Find all possible array for the given

const subarr = (arr) => {
  try {
    const subArr = [];
    const len = arr.length;

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j <= len; j++) {
        //get the sliced array and pushed it to subArr
        subArr.push(arr.slice(i, j));
      }
    }

    return subArr;
  } catch (error) {
    console.log(error);
  }
};

console.log(subarr([1, 2, 3]));
//[ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]

console.log(subarr([1, 2, 3, 4, 5]));
// [ [ 1 ],[ 1, 2 ], [ 1, 2, 3 ],[ 1, 2, 3, 4 ],[ 1, 2, 3, 4, 5 ], [ 2 ], [ 2, 3 ], [ 2, 3, 4 ],[ 2, 3, 4, 5 ], [ 3 ],[ 3, 4 ],  [ 3, 4, 5 ], [ 4 ], [ 4, 5 ], [ 5 ] ]
