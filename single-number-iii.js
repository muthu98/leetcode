/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// Follow up: Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

// https://leetcode.com/problems/single-number-iii/
//medium
var singleNumber = function (nums) {
  let array = [];
  for (i = 0; i < nums.length; i++) {
    if (i == 0) {
      value = nums.indexOf(nums[i], i + 1);
      if (value == -1) array.push(nums[i]);
    } else if (i == nums.length - 1) {
      value = nums.indexOf(nums[i]);
      console.log(value);
      if (value == i) array.push(nums[i]);
    } else {
      value = nums.indexOf(nums[i], i + 1);
      value1 = nums.indexOf(nums[i]);
      if (value == -1 && value1 == i) array.push(nums[i]);
    }
  }
  return array;
};
