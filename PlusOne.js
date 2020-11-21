// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.


// https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
    
    let carry=0,temp,rem,start=1
    for(let i=digits.length-1;i>=0;i--){
        temp=digits[i]+start+carry
        rem=temp%10
        digits[i]=rem
        carry=(temp-rem)/10
        start=0
    }
    
    console.log(digits)
    if(carry) digits.unshift(carry)
    return digits
};