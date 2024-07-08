/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phoneNumbers = {
        '2': 'abc', 
        '3': 'def', 
        '4': 'ghi', 
        '5': 'jkl',
        '6': 'mno', 
        '7': 'pqrs', 
        '8': 'tuv', 
        '9': 'wxyz'
    }
    const resCombinations = []
    const getCombinations = (totalArr, index, letter) => {
        if(index === totalArr.length){
            resCombinations.push(letter)
            return
        }
        for(let i of totalArr[index]){
            getCombinations(totalArr, index+1, letter+i)
        }
    }

    const getArr = (digits) => {
        const totalArr = []
        const letter = ''
        const index = 0
        const phoneNumberArr = Array.from(digits)
        for(let i of phoneNumberArr){
            totalArr.push(Array.from(phoneNumbers[i]))
        }
        if(totalArr.length){
            return getCombinations(totalArr, index, letter)
        }
        
    }
    getArr(digits)
    return resCombinations
};