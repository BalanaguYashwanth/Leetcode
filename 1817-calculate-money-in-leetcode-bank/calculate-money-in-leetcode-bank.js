/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let totalSum = 0
    let weekCount = 7
    let k = 1
    let count = 1
    for(let i=1;i<=n;i++){
        totalSum = totalSum + count 
        count = count + 1
         if(i%weekCount==0){
            k = k+1
            count = k
        }
    }
    return totalSum
};