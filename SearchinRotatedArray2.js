// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {boolean}
//  */

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

// You are given a target value to search. If found in the array return true, otherwise return false.

// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
var search = function(nums, target) {
    
    
    for(let i=0;i<nums.length;i++){
        if(target==nums[i]) return true
    }
    return false
};