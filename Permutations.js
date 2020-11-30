// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// https://leetcode.com/problems/permutations/
//Medium
var swap = (num, first, second) => {
  let temp = num[first];
  num[first] = num[second];
  num[second] = temp;
};

var finder = (num, start, end, array) => {
  if (start == end) {
    console.log(num);
    let temp = [];
    temp = temp.concat(num);
    array.push(temp);
    // array.push(temp.split(''))
  } else {
    for (let i = start; i <= end; i++) {
      swap(num, start, i);
      finder(num, start + 1, end, array);
      swap(num, start, i);
    }
  }
};

var permute = function (nums) {
  let array = [];
  finder(nums, 0, nums.length - 1, array);

  return array;
};
