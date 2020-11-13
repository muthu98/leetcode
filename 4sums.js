// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */

// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Notice that the solution set must not contain duplicate quadruplets.

// https://leetcode.com/problems/4sum/
var fourSum = function(nums, target) {
    
    nums=nums.sort((a,b)=>a-b)
    let numslength=nums.length,final=[]
    if(numslength<4) return final
    for(let i=0;i<numslength-3;i++){
        
        if(i>0&& nums[i]===nums[i-1]) continue
        for(let j=i+1;j<numslength-2;j++){
           if (j !== i + 1 && nums[j] === nums[j - 1]) continue
            let third=j+1,four=numslength-1
            
            while(third<four){
                
                let sum=nums[i]+nums[j]+nums[third]+nums[four]
                if(sum===target){
                    final.push([nums[i],nums[j],nums[third],nums[four]])
                    while(nums[third]==nums[third+1])third++
                     while(nums[four]==nums[four-1])four--
                    
                    third++
                    four--
                    
                }
                else if(sum>target)four--
                else third++
            }
            
        }
    }
    return final
};