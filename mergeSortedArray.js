// const mergeSortedList = (list1, list2) => {
//   const ary = [];
//   ary.push([...list1].concat([...list2]));
//   return ary.sort((a, b) => a - b);

// };
// the hard way

// list1 can be longer than list 2 and vice versa
const mergeSortedListTheHardway = (list1, list2) => {
  let storage = [];
  let list1s = [...list1];
  let list2s = [...list2];

  let moreEleList = list1s.length > list2s.length ? list1s : list2s;
  let lessEleList = list1s.length > list2s.length ? list2s : list1s;
  console.log(lessEleList + " and " + moreEleList);
  let i = 0;
  while (i < moreEleList.length) {
    if (moreEleList[i] < lessEleList[i]) {
      // theres element in list2 and list1[i] < list2[i]
      storage.push(moreEleList[i]);
      storage.push(lessEleList[i]);
      console.log(storage);
    } else {
      storage.push(lessEleList[i]);
      storage.push(moreEleList[i]);
      console.log(storage);
    }
    i++;
  }
  return storage;
};

console.log(mergeSortedListTheHardway([1, 8, 4], [4, 5, 6]));
console.log(mergeSortedListTheHardway([1, 8, 4], [4, 5, 6, 10]));
