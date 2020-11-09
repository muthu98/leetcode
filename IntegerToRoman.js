/**
 * @param {number} num
 * @return {string}
 */

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// https://leetcode.com/problems/integer-to-roman/

var RomanControl=(number)=>{
    switch(true){
        case (number>=900):return ['M',1000]
        case (number>=400 && number<900):return (['D',500])
        case (number>=90 && number<400):return ['C',100]
        case (number>=40 && number<90):return ['L',50]
        case (number>=9 && number<40):return ['X',10]
        case (number>=4 && number<9):return ['V',5]
        case (number>=1 && number<4):return ['I',1]
        default:return ['',0]
    }
}
var intToRoman = function(num) {
    let roman="" ,val,val1,char
   
    
    while(num>0){
        val=RomanControl(num)
      
        if(num >=val[1]){
            roman += val[0]
            num-=val[1]
        }
        else{
            console.log(roman)
            char=val[1].toString()
    
            
            val1= char[0]==1 ?RomanControl(val[1]/10):RomanControl(val[1]/5)
  
             roman += val1[0]+val[0]
            num-=(val[1]-val1[1])
        }
      
    
       
    }
    return roman
};