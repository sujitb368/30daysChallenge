// Find the middle element of array after merging two array  ✅
// Testcase 1 :
// A[] = {1,2,5,4,0}
// A[] = {1,2,3,4,5}

const merge = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object")
    return "Must be array";
  const result = arr1.concat(arr2);
  return result;
};

const findMiddle = (arr1, arr2) => {
  const merged = merge(arr1, arr2);
  const arrLength = merged.length;

  const mid = Math.floor(arrLength / 2);

  return { mergedArray: merged, mid: merged[mid] };
};

console.log(findMiddle([1, 3, 2, 5, 4, 0], [11, 22, 3, 4, 5, 6]));
