// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function(board) {
    
    
    if(board.length!=9) return false
   for(let i=0;i<board.length;i++){
       let checkrow=[],checkcol=[],common=[]
       if(board[i].length!=9)return false
       let start=0
       while(start<9){
           // console.log(i)
                 let cm_i = (Math.floor(i / 3 ) * 3) + Math.floor(start / 3 ), 
                cm_j = ((i % 3) * 3) + (start % 3);
           if( board[i][start]!="."){
                if(checkrow[ board[i][start]]  ) return false
               if( ! (1<= board[i][start] <=9))return false
               checkrow[ board[i][start]]=1
           }
          if(board[start][i]!="." ){
                  if(checkcol[ board[start][i]] )return false
               if( !( 1<=board[start][i] <=9 ))return false
          checkcol[ board[start][i]]=1
          }
           
            if(board[cm_i][cm_j]!="." ){
                if(common[ board[cm_i][cm_j]] )return false
               if( !( 1<=board[cm_i][cm_j] <=9 ))return false
               common[ board[cm_i][cm_j]]=1
          }
           
           start++
       }
       
   }
    
    return true
    
};