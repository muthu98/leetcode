// Given a string s, find the length of the longest substring without repeating characters.
// @param {string} s
// @return {number}
 

// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    var stringvalue=""
    var final=""
    console.log(s.length)
    if(s.indexOf(" ")>-1 && s.length==1) return 1
    // if(s.lenght==1) return 1
    for(let i=0;i<s.length;i++){
        
        if(stringvalue.indexOf(s[i]) <0){
            stringvalue+=s[i]
        }
        else{
            let temp=stringvalue.split(s[i])
          // console.log(temp)
          final.length<stringvalue.length ?final=stringvalue:null
        
           stringvalue=temp[1]+s[i]
        }
    }
    // console.log(final)
   final.length<stringvalue.length ?final=stringvalue:null
    return final.length
};