/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const arr = {
        '2':['a','b','c'], 
        '3':['d','e','f'], 
        '4': ['g','h','i'],
        '5': ['j', 'k', 'l'],
        '6':['m', 'n', 'o'],
        '7':['p', 'q', 'r', 's'],
        '8':['t', 'u', 'v'],
        '9':['w','x','y','z']
        }
    const result = []

    const addElements = (element, totalArr, next) => {
        for(let i of totalArr[next]){
            const temp = element + i
            result.push(temp)
        }
    }

    const subIterate = (element, totalArr, next) => {
        if(next == totalArr.length-1){
            return addElements(element, totalArr, next)
        }

        if(next < totalArr.length){
            for(let k in totalArr[next]){
                const temp = element + totalArr[next][k];
                subIterate(temp, totalArr, next+1)
            }
        }
    }

    const iterate = (totalArr, i) => {
        for(let k in totalArr[i]){
            subIterate(totalArr[i][k], totalArr, i+1);
        }
    }
    
    const operate = (digits) => {
        const totalArr = []
        for(let i of digits){
            totalArr.push(arr[i])
        }
        if(totalArr.length == 0){
            return ""
        }
        if(totalArr.length == 1){
            return result.push(...totalArr[0])
        }
        return iterate(totalArr, 0)
    }
    operate(digits);
    return result
};