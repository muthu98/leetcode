// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// https://leetcode.com/problems/trapping-rain-water/
var trap = function(height) {
    let value=0
    for(let i=0;i<height.length;){
        
        let start=i,end=height.length-1,position=i
        while(start<end){
            if(height[start]<=height[end]){
                
                if(i>0 && height[i-1]>=height[end] && height[position] <height[end]){
                      position=end  
                }
                else if( height[i-1]<height[end] ) position=end 
            
            }
            end--
        }
        
        if(i<position ){
             console.log( i +"==>"+ position)
               let check,checkstart=i,checkend=position
            if(height[position]<=height[i-1]) {
                check=height[position]*(position-i)
            }
            else if(height[position]>height[i-1] && height[i]<height[i-1]) check=height[i-1]*(position-i)
        else check=height[i]*(position-i)
           console.log( check)
            while(checkstart<checkend){
                check-=height[checkstart]
                checkstart++
            }
             console.log( check)
            value+=check
            i=position
        }
        else i++
        
    }
    console.log(value)
    return value
};