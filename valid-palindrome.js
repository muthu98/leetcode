// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// https://leetcode.com/problems/valid-palindrome/
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  if (s.length == 0 || s == " ") return true;

  while (left <= right) {
    while (
      !(s[left] >= "a" && s[left] <= "z") &&
      !(s[left] >= "A" && s[left] <= "Z") &&
      !(s[left] >= "0" && s[left] <= "9") &&
      left < right
    ) {
      left++;
    }

    while (
      !(s[right] >= "a" && s[right] <= "z") &&
      !(s[right] >= "A" && s[right] <= "Z") &&
      !(s[right] >= "0" && s[right] <= "9") &&
      left < right
    ) {
      right--;
    }

    // if(left <= right)break
    // console.log()
    if (s[left].toUpperCase() != s[right].toUpperCase()) return false;
    left++;
    right--;
  }
  return true;
};
