/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {

    const combinations = (arr) => {
        const verifyDuplicatesInStr = (str) => {
            const charSet = new Set(str);
            return charSet.size == str.length
        }
        
        const operate = (index, current) => {
            if (!verifyDuplicatesInStr(current)){
                return 0
            }
            
            let max = current.length
            for(let i = index; i < arr.length; i++){
                max = Math.max(max, operate(i+1, current+arr[i]))
            }
            return max
        }
        return operate(0, '')
    }
    
    return combinations(arr)
};