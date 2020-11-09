// /**
//  * @param {string[]} strs
//  * @return {string}
//  */

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    
    let i,finalstr=""
    if(strs.length==1) return finalstr+=strs[0]
    for(i=0;i<strs[0]?.length;i++){
        let move=1,flag=false
        
        while(move<strs.length){
            strs[move][i]==strs[0][i] ? flag=true :flag=false
            if(!flag) break
            move++
        }
        
        if(flag)  finalstr+=strs[0][i] 
        else break
    }
    
    return finalstr
    
};