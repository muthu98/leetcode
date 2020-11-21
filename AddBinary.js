// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */


// Given two binary strings a and b, return their sum as a binary string.

// https://leetcode.com/problems/add-binary/

var addBinary = function(a, b) {
    
    
    let len1 = a.length-1, len2=b.length-1,carry=0,sum="",total,rem

   
    console.log("hbsdchbw")
    while(len1>=0 || len2>=0){
       total= parseInt(len1>=0 ? a[len1] :0) + parseInt(len2>=0 ? b[len2] :0)+carry
        rem=total%2
        carry=(total-rem)/2
        sum+=rem
       
       len1--
        len2--
    }
    if(carry) sum+=carry
    sum=sum.split('')
    sum=sum.reverse()
    sum=sum.join('')
    return sum
};