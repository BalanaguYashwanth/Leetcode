/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let name = ''
    for(let char of s){
        if(char!=" " && char!="`"){
            if((char.toLowerCase().charCodeAt(0) > 95 && char.toLowerCase().charCodeAt(0) < 123) || (char >= 0 && char <= 9)){
                // console.log('--went inside--','char--->', char ,'s--->',s)
                name = name + char.toLowerCase()
            }
        }
    }
    if(name.length === 0){
        return true
    }
    console.log('name--->', name)
    const checkPalindrome = (l, r) => {
        if((name[l].charCodeAt(0) > 95 && name[l].charCodeAt(0) < 123) || (name[l]>=0 && name[l]<=9)) {
            if((name[r].charCodeAt(0) > 95 && name[r].charCodeAt(0) < 123) || (name[r]>=0 && name[r]<=9) ){
                // console.log(name[l],'---',name[r])
                if(name[l] === name[r]){
                    if(l==r){
                        return true
                    }
                    if(l>r){
                        return false
                    }
                    if(l+1 == r){
                        return true
                    }
                    return checkPalindrome(l+1, r-1)
                }else{
                    return false
                }
            }else{
                return checkPalindrome(l, r-1)
            }
        }else{
            return checkPalindrome(l+1, r)
        }
    }
    return checkPalindrome(0, name.length-1)
};