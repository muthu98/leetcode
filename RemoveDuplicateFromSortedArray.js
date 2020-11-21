// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer, but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.

// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

var removeDuplicates = function(nums) {
    
    
    for(let i=2;i<nums.length;i++){
        
        if(nums[i]==nums[i-1] && nums[i]==nums[i-2]){
            nums.splice(i,1)
            i--
        }
    }
    
    console.log(nums)
    return nums.length
};