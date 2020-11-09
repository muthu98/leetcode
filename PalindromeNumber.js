// /**
//  * @param {number} x
//  * @return {boolean}
//  */

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Follow up: Could you solve it without converting the integer to a string?

// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    if(x<0) return false
    let num=x,rev=0,rem
    while(num){
        rem=num%10
        num=(num-rem)/10
        rev=rev*10+rem
    }
    console.log(rev)
   return rev==x ?  true: false
};