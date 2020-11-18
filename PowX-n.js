/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// Implement pow(x, n), which calculates x raised to the power n (i.e. xn).
// https://leetcode.com/problems/powx-n//


var myPow = function(x, n) {
    let value=1,powercheck=false,numcheck=false

    if(n<0){
        n=-n
       powercheck=true 
    } 
  
    while(n>0 && x!=1 && x!=-1){
        value*=x
        n--
    }
    if(x==1)value=x
    if(x==-1) {
        if(n%2==0) value=-x
        else value=x
    }
    if(powercheck)value=1/value
    console.log(value.toFixed(5))
    // if(numcheck) return -value.toFixed(5) 
    return value.toFixed(5)
};