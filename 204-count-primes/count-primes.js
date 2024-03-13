/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0
    let contents = {}

    for(let i=2;i<n;i++){
        contents[i] = true
    }

    for(let i=2; i*i<n;i++){
        for(let j=i*i; j<n; j+=i){
            contents[j] = false
        }
    }

    for(let i=2;i<n;i++){
        if(contents[i]===true){
            count = count + 1
        }
    }
    return count
};