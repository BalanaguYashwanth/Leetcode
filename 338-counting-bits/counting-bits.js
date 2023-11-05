/**
 * @param {number} n
 * @return {number[]}
 */
 
var countBits = function(n) {
    const arr = [0]

    const hasExistsInArray = (num,type) => {
        const addExtraOne = type == 'odd'? 1 : 0
        if(arr[num] || arr[num]===0){
            arr.push(arr[num]+addExtraOne)
        }else{
           arr.push[num]+addExtraOne
        }
    }

    for(let i=1;i<=n;i++){
        const result = parseInt(i/2)
        const evenOrOdd = i%2 == 0 ? 'even' : 'odd'
        hasExistsInArray(result,evenOrOdd)
    }
    return arr
};