// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
//Easy
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    let left = i,
      right = prices.length - 1;

    while (left < right) {
      if (prices[left] <= prices[right]) {
        if (prices[right] - prices[left] >= profit)
          profit = prices[right] - prices[left];
      }
      right--;
    }
  }

  return profit;
};
