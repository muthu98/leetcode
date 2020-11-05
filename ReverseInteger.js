// /**
//  * @param {number} x
//  * @return {number}
//  */

Given a 32-bit signed integer, reverse digits of an integer.

Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
// https://leetcode.com/problems/reverse-integer
var reverse = function(x) {
    let rev=0,rem,num=x
    x=Math.abs(x)
    
    while(x){
        rem=x%10
        x=(x-rem)/10
        
        rev=rev*10+rem
          
    }
     console.log(Math.pow(2,31)-1)
    if(rev>Math.pow(2,31)) return 0
    if(num<0) rev=-rev
    return rev
};