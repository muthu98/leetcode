// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


var searchRange = function(nums, target) {
    
    let start=0,end=nums.length-1,final=[-1,-1],startcheck =1,endcheck=1
    
    while(start<=end){
        
        if(startcheck && nums[start]==target){
            startcheck=0
            final[0]=start
            
        }
        if(endcheck && nums[end]==target){
            endcheck=0
            final[1]=end
            
        }
        if(startcheck==0 && endcheck==0)break
        
        
        startcheck ? start++ :null
        endcheck ?end--:null
    }
    return final
};