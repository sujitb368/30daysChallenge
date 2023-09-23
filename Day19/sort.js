//put  all negative no on the left side of array

const sortArr = (arr) => {
  const positiveArr = [];
  const negativeArr = [];

  arr.map((value) =>
    value >= 0 ? positiveArr.push(value) : negativeArr.push(value)
  );

  return [...negativeArr, ...positiveArr];
};

console.log(sortArr([-1, -1, 0, 3, -6, 15, -50, 0.5]));
