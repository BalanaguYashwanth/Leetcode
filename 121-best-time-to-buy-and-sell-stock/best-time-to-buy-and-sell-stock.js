/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0
    let minimum = prices[0];
    for(let i=0; i<prices.length; i++){
        if(prices[i] < minimum){
            minimum = prices[i]
        }
        if(result < (prices[i] - minimum)){
            result = (prices[i] - minimum)
        }
    }
    return result
};