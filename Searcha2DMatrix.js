/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//leetcode.com/problems/search-a-2d-matrix/

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
https: var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) return true;
    }
  }
  return false;
};
