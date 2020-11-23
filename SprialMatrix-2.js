/**
 * @param {number} n
 * @return {number[][]}
 */

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// https://leetcode.com/problems/spiral-matrix-ii/

var generateMatrix = function(n) {
     
    let top=0,bottom=n-1,left=0,right=n-1,row=0,col=0
    let final=  new Array(n),value=1
    for (var i = 0; i <n; i++) { 
    final[i] = new Array(n); 
} 
    while(top<=bottom){
        //topplace
        while(col<=right &&top<=bottom){
            console.log('top')
      
            final[row][col]=value
            value++
            col++
        }
      
        col--
        row++
        top++
        //right
        while( row<=bottom && left<=right){
              console.log('right')
             
            final[row][col]=value
            value++
            row++
        }
        row--
        col--
        right--
        
        //bottom
        while(col>=left  && top<=bottom ){
             console.log('bottom')

          final[row][col]=value
            value++
            col--
        }
        col++
        row--
         bottom--
        
        
        //left
        while(row>=top && left<=right){
             console.log('left')
            
          final[row][col]=value
            value++
            row--
        }
        col++
        row++
        
        
        
        left++
       
       console.log("=====")
    
    }
    console.log(final)
    return final
};