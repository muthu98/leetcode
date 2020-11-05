// /**
//  * @param {string} s
//  * @return {string}
//  */

// Given a string s, return the longest palindromic substring in s.

// https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function(s) {
    let largepalin=""
    let palin=""
    let reve=s.split('').reverse().join('')

    for(let i=0;i<s.length;i++){
        let position =i-1
        if(i>s.length/2 && largepalin.length>s.length/2) break;
        while(s.indexOf(s[i],(position + 1)) >-1){
            position=s.indexOf(s[i],(position + 1))
            // console.log( s[i] +"==>"+position)
            let sliceval=s.slice(i,position+1)
     
           let revslic=sliceval.split('').reverse().join('')
           if(sliceval===revslic){
             
                 largepalin.length<sliceval.length ? largepalin=sliceval :null
               if(largepalin.length==s.length  ) break
           }
            // if(position===i) break
          
        } 
    }
    // if(largepalin.length==0)largepalin=s[0]
    return largepalin
};