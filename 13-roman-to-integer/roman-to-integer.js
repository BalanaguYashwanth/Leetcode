/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000, IV:4, IX:9, XL:40, XC: 90, CD: 400, CM: 900}
    const double = ['C', 'X', 'I']

    let result = 0
    let i = 0
    while(i<s.length){
        if(double.includes(s[i])){
            const multiRoman = (s[i]+s[i+1])
            if(multiRoman in roman){
                result = result + roman[multiRoman]
                console.log(roman[multiRoman],'multiRoman---',multiRoman,'result---',result)
                i = i+2
            }else{
                 console.log('s[i]---',s[i],'roman[s[i]]---',roman[s[i]],'result--',result)
                result = result + roman[s[i]]
                i = i + 1
            }
        }else{
            console.log('s[i]---',s[i],'roman[s[i]]---',roman[s[i]],'result--',result)
            result = result + roman[s[i]]
            i = i + 1
        }
    }
    return result
    // console.log('result---', result)
};