// /**
//  * @param {number} rowIndex
//  * @return {number[]}
//  */

// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.

// https://leetcode.com/problems/pascals-triangle-ii/
//easy
var getRow = function (rowIndex) {
  let n = 0,
    array = [];

  while (n <= rowIndex) {
    let temp = [];
    for (let i = 0; i <= n; i++) {
      if (i == 0 || i == n) temp.push(1);
      else {
        let value = array[n - 1][i] + array[n - 1][i - 1];
        temp.push(value);
      }
    }
    array.push(temp);
    n++;
  }

  return array[rowIndex];
};
