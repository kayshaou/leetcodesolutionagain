var rotate = function (nums, k) {
  let rotatedArray = [];
  let lastIndex = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    // calculation
    let provisionedIndex = i + k;
    if (provisionedIndex > lastIndex) {
      provisionedIndex = provisionedIndex - lastIndex - 1;
    }
    rotatedArray[provisionedIndex] = nums[i];
  }
  return rotatedArray;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
