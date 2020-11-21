// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Follow up:

// Could you solve this problem without using the library's sort function?
// Could you come up with a one-pass algorithm using only O(1) constant space?
// https://leetcode.com/problems/sort-colors/
var sortColors = function(nums) {
    
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]<nums[j]){
                let temp=nums[i]
                nums[i]=nums[j]
                nums[j]=temp
            }
        }
    }
    console.log(nums)
};

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var sortColors = function(nums) {
    
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                let temp=nums[i]
                nums[i]=nums[j]
                nums[j]=temp
            }
        }
    }
    console.log(nums)
};