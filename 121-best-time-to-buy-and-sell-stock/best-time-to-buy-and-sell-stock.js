/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i = 0;
    let j = 1;
    let max = 0;

    const recursion = (i, j) => {
        while (j < prices.length) {
            if (prices[j] > prices[i]) {
                const diff = prices[j] - prices[i];
                max = Math.max(max, diff)
            } else {
                i = j
            }
            j++

        }
    }
    recursion(i, j)
    return max
};