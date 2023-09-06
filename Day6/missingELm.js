// function to find missing elements from array
// assuming that function will take two array as argument
// then it will return the non common elements

const missingElements = (arr1, arr2) => {
  const missing = [];
  const itaratorArr = arr1.length > arr2.length ? arr1 : arr2;
  const checkArr = arr1.length < arr2.length ? arr1 : arr2;
  itaratorArr.forEach((element) => {
    if (checkArr.indexOf(element) === -1 && missing.indexOf(element) === -1) {
      missing.push(element);
    }
  });

  return missing.length > 0
    ? "missing elements are " + missing
    : "No such element";
};

console.log(missingElements([0, 1, 2, 6, 4, 5], [5, 4, 3, 2, 9, 0])); //No such element
