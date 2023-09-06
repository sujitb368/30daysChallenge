// assuming always it will get sorted array

const onceElm = (arr) => {
  const countObj = {};
  const singleElm = [];
  for (const elm of arr) {
    if (countObj[elm]) {
      countObj[elm] += 1;
    } else {
      countObj[elm] = 1;
    }
  }

  for (const key in countObj) {
    if (countObj[key] === 1) {
      singleElm.push(key);
    }
  }

  return "Element that appears once " + singleElm;
};

console.log(onceElm([1, 1, 3, 3, 3, 0])); //0
console.log(onceElm([1, 2, 2, 2, 2, 2, 2])); //1
