
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// https://leetcode.com/problems/two-sum/




var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
     
        let remaining=target-nums[i]
        let indexOfRemaining=nums.indexOf(remaining)
        if(indexOfRemaining!=i && indexOfRemaining>-1){
            return [i,indexOfRemaining]
        }
       
    }
};

console.log(twoSum([1,3,5,6,7,4],6))