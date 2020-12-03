/**
 * @param {string} s
 * @return {number}
 */

// Given a column title as appear in an Excel sheet, return its corresponding column number.
//easy
//leetcode.com/problems/excel-sheet-column-number/
https: var titleToNumber = function (s) {
  let len = s.length - 1,
    sum = 0,
    mult = 1;
  while (len >= 0) {
    sum = (s.charCodeAt(len) - 64) * mult + sum;

    mult *= 26;
    len--;
  }

  console.log(sum);
  return sum;
};
