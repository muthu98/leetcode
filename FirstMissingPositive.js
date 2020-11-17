// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// Given an unsorted integer array nums, find the smallest missing positive integer.

// Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?

// https://leetcode.com/problems/first-missing-positive/
var firstMissingPositive = function(nums) {
    nums.sort((a,b)=>a-b)
    let i
    if( nums.indexOf(1)<0 ) return 1
    for( i=1;i<nums.length;i++){
    
        if(nums[i]-1!=nums[i-1] && nums[i]!==nums[i-1] ){
                if(nums[i-1]+1>0) return nums[i-1]+1      
        } 
    }
 
    return nums[i-1]+1
};