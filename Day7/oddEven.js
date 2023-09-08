const evenOdd = (arr) => {
  const evenOdd = { even: [], odd: [] };
  for (let elm of arr) {
    elm % 2 === 0 ? evenOdd["even"].push(elm) : evenOdd["odd"].push(elm);
  }

  return evenOdd;
};

// Testcase 1 :
// A[] = {1,2,5,4,0}
// B[] = {1,2,5,4,0}
// Testcase 2:
// A[] = {1,2,3,4,5}
// B[] = {11, 22, 33 ,44}
console.log(evenOdd([1, 2, 5, 4, 0])); //{ even: [ 2, 4, 0 ], odd: [ 1, 5 ] }
console.log(evenOdd([1, 2, 5, 4, 0])); //{ even: [ 2, 4, 0 ], odd: [ 1, 5 ] }
console.log(evenOdd([1, 2, 3, 4, 5])); //{ even: [ 2, 4 ], odd: [ 1, 3, 5 ] }
console.log(evenOdd([11, 22, 33, 44])); //{ even: [ 22, 44 ], odd: [ 11, 33 ] }
