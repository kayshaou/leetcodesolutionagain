const containDuplicates = (numArray) => {
  let myMap = new Map();
  for (let i = 0; i < numArray.length; ++i) {
    if (!myMap.has(numArray[i])) {
      myMap.set(1, numArray[i]);
    } else {
      return true;
    }
  }
  return false;
};
console.log(containDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containDuplicates([1, 2, 3, 4]));
