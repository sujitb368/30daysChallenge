//function to find prime numbers from arr

const getPrime = (arr) => {
  try {
    const prime = [];
    for (const elm of arr) {
      if (elm === 1 || elm < 1) continue;
      if (elm === 2) {
        prime.push(elm);
        continue;
      }
      let isPrime = true;
      for (let divide = 2; divide <= elm / 2; divide++) {
        if (elm % divide === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime && elm > 1) {
        prime.push(elm);
      }
    }
    return prime;
  } catch (error) {
    console.log(error);
  }
};
console.log(getPrime([1, 2, 5, 7, 13, 17, 20, 21, 4, 3]));
