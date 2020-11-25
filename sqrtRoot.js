// /**
//  * @param {number} x
//  * @return {number}
//  */
// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

var mySqrt = function (x) {
  let min = 0;
  let max = x;
  let mid;

  while (min < max) {
    mid = (min + max) / 2;
    squared = mid * mid;
    if (squared === x) {
      return mid;
    } else if (Math.floor(min) === Math.floor(max)) {
      return Math.floor(mid);
    } else if (squared > x) {
      max = mid;
    } else if (squared < x) {
      min = mid;
    }
  }

  return 0;
};
