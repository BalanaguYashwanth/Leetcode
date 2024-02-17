/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res="";
    let inc=0;
    let neg = false
    if(x<0){
        neg = true
        x = -x
    }
    while(x>0){
        output = x%10;
        res = res + ''+(output)
        x = parseInt(x/10);
    }
    if(neg){
        res = -parseInt(res)
        if(res < -2147483648){
            return 0
        }
    }
    if(parseInt(res)>2147483648){
        return 0
    }
    return res
};