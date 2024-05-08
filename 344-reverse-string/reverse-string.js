/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    const swap  = (l,r) => {
        let temp = s[r]
        s[r] = s[l]
        s[l] = temp
    }
    
    const reverseHelper = (l,r) => {
        if(l==r){
            return s
        }
        if(l>r){
            return s
        }
        swap(l,r)
        return reverseHelper(l+1, r-1)
    }

    return reverseHelper(0, s.length-1)
};