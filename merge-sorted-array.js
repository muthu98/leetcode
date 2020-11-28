// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

// https://leetcode.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    end = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    nums1[end--] = nums2[p2] >= nums1[p1] ? nums2[p2--] : nums1[p1--];
  }
  while (p2 >= 0) {
    nums1[end--] = nums2[p2--];
  }
};
