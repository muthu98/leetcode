// /**
//  * @param {string} s
//  * @return {number}
//  */

// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only

// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
  
    let value
    if(s.length==0) return 0
    value=s.split(' ')
    console.log(value)
    let limit=value.length-1
    while(limit>=0){
         if(value[limit]!="" ) return value[limit].length
        limit--
    }
    
   return 0
    
};