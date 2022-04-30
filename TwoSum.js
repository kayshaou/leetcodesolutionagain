const twoSum = (ary, target) => {
  let sum = 0;
  let answer = [];
  for (let i = 0; i < ary.length; i++) {
    for (let j = i + 1; j < ary.length; j++) {
      sum = ary[i] + ary[j];
      if (sum == target) {
        answer.push(i, j);
        return answer;
      }
      sum = 0;
    }
  }
  return -1;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 1, 3], 6));
