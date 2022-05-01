var firstRecurrentCharacters = (charArray) => {
  let hashMap = new Map();
  for (let i = 0; i < charArray.length; ++i) {
    let num = charArray[i];
    if (!hashMap.has(num)) {
      hashMap.set(num, 1);
    } else {
      return num;
    }
  }
  return undefined;
};

console.log(firstRecurrentCharacters([2, 5, 1, 2, 3, 5, 1, 2, 4]));
