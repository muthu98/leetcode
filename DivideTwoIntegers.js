// /**
//  * @param {number} dividend
//  * @param {number} divisor
//  * @return {number}
//  */

// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
// https://leetcode.com/problems/divide-two-integers/

var divide = function(dividend, divisor) {
    let num=0,minusFirst=false ,minusSecond=false
    if(dividend<0){
         dividend=Math.abs(dividend)
        minusFirst=true
    }
      if(divisor<0){
         divisor=Math.abs(divisor)
        minusSecond=true
    }
    
    while(dividend>=divisor && divisor!=1){
         num++
        dividend-=divisor 
    }
    if(divisor===1){
        num=dividend
    }
    console.log(num)
    console.log(  Math.pow(2, 31)-1)
  
    if( (minusFirst==false && minusSecond==false)||(minusFirst && minusSecond) ) {
          if(num> Math.pow(2, 31)-1)num =Math.pow(2, 31)-1
          return num
    }
    else{
          if(num> Math.pow(2, 31))num =Math.pow(2, 31)-1 
        return -num
    }
   
};