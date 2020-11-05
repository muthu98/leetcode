// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// https://leetcode.com/problems/zigzag-conversion/
var convert = function(s, numRows) {
    if(s.length==1 || numRows==1) return s
    let array=Array( numRows).fill(null).map(()=>Array(numRows+10).fill(null))
    // let array=[]
      let row=0,col=0
      let check="down"
   
    for(let i=0;i<s.length;i++){
      console.log( "top==>"+ row  +" ==> "+col +"==>"+s[i])
                 array[row][col]=s[i]
        if(check==="down"){
            if(row==(numRows-1)) {
                 
                check="up"
                i++
                col++
                row--
                console.log( "down ==>"+row  +" ==> "+col +"==>"+s[i])
                array[row][col]=s[i]
                // col++
                row==0?col++:null
                row==0? row++:row--
             }
            else{
               
                 row++
                row==(numRows-1)?col++:null
            }
            
         
              
        }
        else {    
        
            if(row==0) {
            check="down"
            i++
            col++
            row++
              console.log("up===>"+row  +" ==> "+col +"==>"+s[i])
            array[row][col]=s[i]
            // col++
              row==(numRows-1)?row--:row++
             }
            else{
             
                row-- 
                row==0?col++:null
            }
            
        }
    }
        
  
    let stringval=""
      for(let i=0;i<array.length;i++){
          for(let j=0;j<array[i].length;j++){
              if(array[i][j]) stringval+=array[i][j]
          }
      }
    
    return stringval
};