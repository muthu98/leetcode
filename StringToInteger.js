// /**
//  * @param {string} s
//  * @return {number}
//  */

// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered a whitespace character.
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

// https://leetcode.com/problems/string-to-integer-atoi/
var myAtoi = function(s) {
    var minus=false,plus=false,start=false

    let num=0
  for(let i=0;i<s.length;i++){
      
      if(isNaN(parseInt(s[i]))){
          if(start){break;}
          if(s[i]==" "||s[i]=="-" || s[i]=="+"){
              if(s[i]=="-"){minus=true; start=true}
              if(s[i]=="+"){plus=true; start=true}
          }
          else{
              break
          }
      }
      else{
        console.log( parseInt(s[i]))
          start=true
            num=num*10+ parseInt(s[i])
      }

  }
    if(minus && plus)return 0
    if(minus) num=-num
    if(Math.pow(2,31)-1<num) return Math.pow(2,31)-1
    if (Math.pow(-2,31)>num)return Math.pow(-2,31)
    return num
};