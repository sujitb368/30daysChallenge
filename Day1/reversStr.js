const reversStr = (Str) => {
  let newStr = "";
  for (let i = Str.length - 1; i >= 0; i--) {
    newStr += Str[i];
  }
  return newStr;
};

console.log(reversStr("abc"));
