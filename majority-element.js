// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.
// https://leetcode.com/problems/majority-element/
//Easy
var majorityElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }
    if (nums.length / 2 < count) return nums[i];
  }
};
