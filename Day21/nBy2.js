// Find out the element which has n/2 occurrence [1,2,2,2,1] n = 5

const findOccurrences = (arr) => {
  try {
    //find n which half of length of array
    const n = Math.floor(arr.length / 2);

    const occurrence = {};

    for (let elm of arr) {
      if (occurrence[elm]) {
        occurrence[elm] += 1;
      } else {
        occurrence[elm] = 1;
      }
    }
    const result = [];
    for (const key in occurrence) {
      if (occurrence[key] === n) {
        result.push(key);
      }
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

console.log(findOccurrences([2, 3, 3, 3, 3, 2, 2, 2, 5])); // [ '2', '3' ]
