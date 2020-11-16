// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// https://leetcode.com/problems/search-insert-position/
var searchInsert = function(nums, target) {
    let i
    
    for( i=0;i<nums.length;i++){
        if(nums[i]==target) return i
        else{
            if( i>0 ) {
                if(nums[i] >target && nums[i-1]<target)return i
            } 
            else{
                 if(nums[i] >target)return i
            }
          
        }
            
    }
    return i
};