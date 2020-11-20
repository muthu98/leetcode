// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */


// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.


// https://leetcode.com/problems/jump-game/
var canJump = function(nums) {

    
    let value=nums.length-1
        for(let i=nums.length-2;i>=0;i--){
            
            if(nums[i]+i>=value)value=i
            
        }
        
       return value===0
    
};