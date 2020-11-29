// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// https://leetcode.com/problems/pascals-triangle/

//Easy

var generate = function (numRows) {
  let array = [],
    n = 0;

  while (n < numRows) {
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

  return array;
};
