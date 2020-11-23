/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// Given an m x n matrix, return all elements of the matrix in spiral order.


// https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function (matrix) {


    
    let top=0,bottom=matrix.length-1,left=0,right=matrix[0].length-1,row=0,col=0
    let final=[]
    
    while(top<=bottom){
        //topplace
        while(col<=right &&top<=bottom){
            console.log('top')
            console.log(matrix[row][col])
            final.push(matrix[row][col])
            col++
        }
        col--
        row++
        top++
        //right
        while( row<=bottom && left<=right){
              console.log('right')
              console.log(matrix[row][col])
            final.push(matrix[row][col])
            row++
        }
        row--
        col--
        right--
        
        //bottom
        while(col>=left  && top<=bottom ){
             console.log('bottom')
              console.log(matrix[row][col])
          final.push(matrix[row][col])
            col--
        }
        col++
        row--
         bottom--
        
        
        //left
        while(row>=top && left<=right){
             console.log('left')
              console.log(matrix[row][col])
          final.push(matrix[row][col])
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