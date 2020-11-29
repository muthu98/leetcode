// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
// https://leetcode.com/problems/single-number-ii/

//medium
var singleNumber = function (nums) {
  for (i = 0; i < nums.length; i++) {
    if (i == 0) {
      value = nums.indexOf(nums[i], i + 1);
      if (value == -1) return nums[i];
    } else if (i == nums.length - 1) {
      value = nums.indexOf(nums[i]);
      console.log(value);
      if (value == i) return nums[i];
    } else {
      value = nums.indexOf(nums[i], i + 1);
      value1 = nums.indexOf(nums[i]);
      if (value == -1 && value1 == i) return nums[i];
    }
  }
};
