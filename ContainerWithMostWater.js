// /**
//  * @param {number[]} height
//  * @return {number}
//  */

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.
// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    let max=0

    let start=0 ,end=height.length-1,value

    while(start<end){
        if(height[start]<height[end]){
       value=height[start]*(end-start)
         start++
        }
        else{
             value=height[end]*(end-start)
         end--
        }

        console.log(value)
        if(max<value){
           max=value
           }
    }
    
    
    console.log(max)
    return max
};