/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let prev = 3;
    let prev2 = 2;
    let curl;
    if(n<4){
        return n
    }
    for (let i = 4; i <= n; i++) {
        console.log('before prev2--->', prev2, 'prev---', prev, 'curl--', curl)
        curl = prev + prev2;
        prev2 = prev;
        prev = curl;
        console.log('after prev2--->', prev2, 'prev---', prev, 'curl--', curl)
    }
    return curl;
};