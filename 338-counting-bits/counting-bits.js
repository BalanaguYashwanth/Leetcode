/**
 * @param {number} n
 * @return {number[]}
 */
 
var countBits = function(n) {
    const arr = [0]

    const hasExistsInArray = (num) => {
        if(arr[num] || arr[num]===0){
            return true
        }else{
            return false
        }
    }


    for(let i=1;i<=n;i++){
        if(i%2 == 0){
            const result = parseInt(i/2)
            if(hasExistsInArray(result)){
                arr.push(arr[result])
            }else{
                arr.push[result]
            }
        }else{
            const result = parseInt(i/2) 
            console.log('ar0---->',result,hasExistsInArray(result))
            if(hasExistsInArray(result)){
                arr.push(arr[result]+1)
               
            }else{
                arr.push[result+1]
            }
           
        }
    }
    return arr
};