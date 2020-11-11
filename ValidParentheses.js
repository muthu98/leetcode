// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    
    let check=[]
    
    for(item of s){
    
        if(item=="(" || item=="{" || item=="[") {
            if(item=="(") check.push(')')
             else if(item=="{")check.push('}')
              else check.push(']')
           
        }
        else{
            
            if(check[check.length-1]==item) check.pop()
            else return false
           
        }
      
    
    }
    
    console.log(check)
    return check.length==0 ? true :false

};