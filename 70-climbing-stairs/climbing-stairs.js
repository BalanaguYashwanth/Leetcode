/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const obj={1:1,2:2,3:3}
    if(n>3){
    for(let i=4;i<=n;i++){
        obj[i] = obj[i-1] + obj[i-2]
    }
    }else{
        return obj[n]
    }
    return obj[n]
};