// /**
//  * @param {number} n
//  * @return {number}
//  */

// Given an integer n, return the number of trailing zeroes in n!.
// https://leetcode.com/problems/factorial-trailing-zeroes/
//easy
var trailingZeroes = function (n) {
  let i = 5,
    count = 0;
  while (n / i >= 1) {
    count += (n - (n % i)) / i;
    i *= 5;
  }
  return count;
};
