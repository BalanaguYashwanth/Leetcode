/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let max = 0;
    let tempArr = {}
    let i = 0;
    let j = 0;

    const recursive = () => {
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                if (!(s[j] in tempArr)) {
                    tempArr[s[j]] = 1
                } else {
                    const tempLength = Object.keys(tempArr).length;
                    if (max < tempLength) {
                        max = tempLength;
                    }
                    tempArr = {}
                    break
                }
            }
        }
        if (Object.keys(tempArr).length > max) {
            max = Object.keys(tempArr).length
        }
    }

    if (s == " ") {
        return 1
    }
    recursive()
    return max;
};