/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    const lookupStr = new Set()
    const res = new Set()
    const store = {}
    for (let i = 0; i < s.length; i++) {
        const temp = s.slice(i, i + 10)
        if (lookupStr.has(temp)) {
            res.add(temp)
        }
        lookupStr.add(temp)
    }
    return [...res];
};