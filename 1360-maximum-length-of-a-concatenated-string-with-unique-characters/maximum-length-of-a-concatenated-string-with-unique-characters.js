/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const checkUnique = (str) => {
        const charSet = new Set(str);
        return charSet.size === str.length;
    }

    const dfs = (index, current) => {
        if (!checkUnique(current)) return 0;
        let maxLength = current.length;
        for (let i = index; i < arr.length; i++) {
            maxLength = Math.max(maxLength, dfs(i + 1, current + arr[i]));
        }
        return maxLength;
    }

    return dfs(0, '');
};

// Example usage
// console.log(maxLength(["ab","cd","cde","cdef","efg","fgh","abxyz"])); // Output: 11
