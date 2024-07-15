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
            const diff = prices[j] - prices[i];
            if (diff > max) {
                max = diff
            }

            if (prices[i] > prices[j]) {
                i = j
            }
            j++

        }
    }
    recursion(i, j)
    return max
};