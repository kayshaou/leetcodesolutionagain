var moveZeroes = (numAry) => {
  let sortedAry = numAry.sort((a, b) => a - b);
  let ary = [];
  let zeroCnt = 0;
  for (let i = 0; i < sortedAry.length; ++i) {
    if (sortedAry[i] !== 0) {
      ary.push(sortedAry[i]);
    } else {
      zeroCnt++;
    }
  }
  for (let i = 0; i < zeroCnt; i++) {
    ary.push(0);
  }
  return ary;
};
console.log(moveZeroes([1, 0, 2, 3, 0, 12]));
console.log(moveZeroes([0]));
