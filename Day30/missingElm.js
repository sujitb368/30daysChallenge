// Find the missing no in the array [1,2,3,5,6]
// [1,2,3,4,5,6,8]

const findMissingNumber = (arr) => {
  try {
    const max = arr.reduce((acc, current) => {
      return current > acc ? current : acc;
    }, arr[0]);
    const min = arr.reduce((acc, current) => {
      return current < acc ? current : acc;
    }, arr[0]);

    const len = arr.length;
    const custom_arr = Array.from({ length: len });
    custom_arr.map((_, index) => {
      if (index === 0) {
        return (custom_arr[index] = min);
      }
      return (custom_arr[index] = custom_arr[index - 1] + 1);
    });

    let missing;
    custom_arr.map((val) => {
      if (arr.indexOf(val) === -1) missing = val;
    });

    return missing ? missing : "no missing number";
  } catch (error) {
    console.log(error);
  }
};

console.log(findMissingNumber([1, 2, 3, 5, 6])); // 4
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8])); // 7
console.log(findMissingNumber([1, 2, 3, 5, 4])); // no missing number
