/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let arr=[]
    let stringNum = ''
    for(let i of digits){
        stringNum = stringNum+i
    }
    
    let num = BigInt(stringNum)
    num = num+BigInt(1)
    
    // num = num+1
    stringNum = (num).toString()
    console.log(stringNum)
    for(let i of stringNum){
        arr.push(parseInt(i))
    }
    return arr
};