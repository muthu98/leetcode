// /**
//  * @param {number} n
//  * @return {number}
//  */
// https://leetcode.com/problems/count-primes/
// Count the number of prime numbers less than a non-negative number, n.
//easy
var countPrimes = function (n) {
  if (n <= 1) return 0;

  var isPrime = [],
    count = 0;

  for (var i = 2; i < n; i++) {
    if (isPrime[i] == undefined) {
      isPrime[i] = true;
      count++;
      for (var j = 2; j * i < n; j++) {
        // mark the prime's multiples as nonprime
        isPrime[i * j] = false;
      }
    }
  }

  return count;
};
