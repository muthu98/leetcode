/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// https://leetcode.com/problems/search-a-2d-matrix-ii/
// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) return true;
    }
  }
  return false;
};
