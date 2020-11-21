// /**
//  * @param {number} n
//  * @return {number}
//  */

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// https://leetcode.com/problems/climbing-stairs/
var climbStairs = function(n) {
    let first=1,second=1
    for(let i=2;i<=n;i++){
        let t=first+second
        first=second
        second=t
    }
    return second
    
};