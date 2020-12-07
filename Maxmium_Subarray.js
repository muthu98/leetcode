// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let subArrSum = nums[0],
    maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    console.log("----");
    subArrSum = Math.max(nums[i], subArrSum + nums[i]);
    console.log(subArrSum);
    maxSum = Math.max(maxSum, subArrSum);
    console.log(maxSum);
  }
  return maxSum;
};
