// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// https://leetcode.com/problems/permutations-ii/
//medium
var swap = (num, first, second) => {
  let temp = num[first];
  num[first] = num[second];
  num[second] = temp;
};
var SwapCheck = (num, first, second) => {
  for (i = first; i < second; i++) if (num[i] == num[second]) return 0;
  return 1;
};
var finder = (num, start, end, array) => {
  if (start == end) {
    console.log(num);
    let temp = [];
    temp = temp.concat(num);
    array.push(temp);
  } else {
    for (let i = start; i <= end; i++) {
      if (SwapCheck(num, start, i)) {
        swap(num, start, i);
        finder(num, start + 1, end, array);
        swap(num, start, i);
      }
    }
  }
};

var permuteUnique = function (nums) {
  let array = [];
  finder(nums, 0, nums.length - 1, array);

  return array;
};
