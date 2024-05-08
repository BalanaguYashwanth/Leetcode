/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    const getReverse = (l,r) => {
        if(l==r){
            return s
        }
        if(l>r){
            return s
        }
        let temp = s[r]
        s[r] = s[l]
        s[l] = temp
        return getReverse(l+1, r-1)
    }

    return getReverse(0, s.length-1)
};