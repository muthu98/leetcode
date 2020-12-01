// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Follow-up: Could you solve the problem in linear time and in O(1) space?

//https://leetcode.com/problems/majority-element-ii/

//medium

var majorityElement = function (nums) {
  let value = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0,
      start = 0,
      flag = true;
    while (start < i) {
      if (nums[i] == nums[start]) {
        flag = false;
        break;
      }
      start++;
    }
    if (flag) {
      for (let j = i; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
          count++;
        }
      }
      if (nums.length / 3 < count) value.push(nums[i]);
    }
  }
  return value;
};
