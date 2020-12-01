/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
//easy
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let value = target - numbers[i],
      start = i;

    while (numbers.indexOf(value, start + 1) > -1) {
      start = numbers.indexOf(value, start + 1);
    }
    if (start > -1 && numbers[i] + numbers[start] == target) {
      return [i + 1, start + 1];
    }
  }
};
