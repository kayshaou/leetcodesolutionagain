const maximumSubArray = (arry) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arry.length; i++) {
    let currMaxEach = Number.MIN_SAFE_INTEGER;
    let tmp = arry[i];
    for (let j = i + 1; j < arry.length; j++) {
      tmp = tmp + arry[j];
      if (tmp > currMaxEach) {
        currMaxEach = tmp;
      }
    }

    if (currMaxEach > max) {
      max = currMaxEach;
    }
    currMaxEach = 0;
  }
  return max;
};

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
