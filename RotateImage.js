// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
    
    let row,col
    for(row=0;row<matrix.length;row++){
        
        for(col=0;col<matrix[row].length;col++){
             if(row==col)break
            let temp=matrix[row][col]
            matrix[row][col]=matrix[col][row]
            matrix[col][row]=temp
           
        }
    }
    for(row=0;row<matrix.length;row++){
        
        let start=0,end=matrix[row].length-1
        while(start<end)
            {
                 let temp=matrix[row][start]
            matrix[row][start]=matrix[row][end]
            matrix[row][end] =temp 
                start++
                end--
            }
          
           
        
    }
    
    return matrix
};