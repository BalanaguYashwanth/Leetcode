/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const result = []
    const checkEqual = (arr) => {
        arr.sort((a,b)=>a-b)
        console.log(arr)
        let diff = null
        let flag = 0
        for(let k=0;k<arr.length-1;k++){
            console.log('diff==>',diff,'diff==>',arr[k+1]-arr[k],'k+1==>',arr[k+1],'k==>',arr[k])
            if(diff == null){
                diff = arr[k+1] - arr[k]
            }else{
                if(diff != (arr[k+1]-arr[k])){
                    flag = flag + 1
                    result.push(false)
                    break
                }
            }
        }
        if(flag ==0){
            result.push(true)
        }
       
    }

    const slicingArray = (lValue,rValue) => {
        const result = nums.slice(lValue,rValue+1)
        checkEqual(result)
    }

    for(let i=0;i<l.length;i++){
        slicingArray(l[i],r[i])
    }
    return result
};