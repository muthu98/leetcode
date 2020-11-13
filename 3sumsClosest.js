// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */

// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// https://leetcode.com/problems/3sum-closest/
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let closest = Infinity;
    if(nums.length<3) return 0
    
    for(let i=0;i<nums.length-2;i++){
        let start=i+1,end=nums.length-1
        while(start<end){
            let sum=nums[i]+nums[start]+nums[end]
            console.log(i,start,end)
            console.log(nums[i],nums[start],nums[end] )
            console.log(sum)
             if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
            if(sum>target) end--
            else start++
            
        
        }
        
    }
    console.log(-3>1)
  
   
    return closest

};