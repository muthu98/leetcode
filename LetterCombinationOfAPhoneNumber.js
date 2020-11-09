// /**
//  * @param {string} digits
//  * @return {string[]}
//  */

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function(digits) {
    
    let array=[],rem,start,check
    digits=digits.split('')
    digits=digits.reverse()
    digits=digits.join('')
    
    while(digits){
        rem=digits%10
        digits=(digits-rem)/10
        start=97+(rem-2)*3
        if(rem>=8) start++
 
      
         check= rem==7 || rem==9 ? start+4 :  start+3
    
        if(array.length>0){
            let temp=[]
            while(start<(check)){
                
                for(let i=0;i<array.length;i++){
                        temp.push(array[i]+String.fromCharCode(start))
                }
             start++
              }
            array=temp

        }
        else{
            while(start<(check)){
                    
             console.log(String.fromCharCode(start))
            array.push(String.fromCharCode(start))
                 start++
              }
        }
        
    }
    return array
};