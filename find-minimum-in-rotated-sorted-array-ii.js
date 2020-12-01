/**
 * @param {number[]} nums
 * @return {number}
 */

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// The array may contain duplicates.

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
//hard

var findMin = function (nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) min = nums[i];
  }
  return min;
};
