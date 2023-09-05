// Write a program to find even and odd no in a array

const evenOdd = (arr) => {
  const odd = [];
  const even = [];
  for (let elm of arr) {
    elm % 2 === 0 ? even.push(elm) : odd.push(elm);
  }

  // after odd and even calculations return an object with odd and even array
  return { odd, even };
};

console.log(evenOdd([1, 2, 5, 4, 0]));

// Testcase 1 :
// A[] = {1,2,5,4,0}
// B[] = {1,2,5,4,0}
// Testcase 2:
// A[] = {1,2,3,4,5}
// B[] = {11, 22, 33 ,44}
