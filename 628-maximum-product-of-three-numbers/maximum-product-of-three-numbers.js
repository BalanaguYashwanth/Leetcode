/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    let negSum = 1
    let povSum = 1
    const povFn = () => {
        nums.sort((a,b)=>b-a)
        negSum = negSum * nums[0]
        for(let i=0; i<nums.length; i++){
            povSum = povSum * nums[i]
            if(i==2){
                break
            }
        }
    }

    const negFn = () => {
        nums.sort((a,b)=>a-b)
        for(let i=0; i<nums.length; i++){
            if(i==2){
                break
            }
            if(nums[i]>0){
                negSum = 1
                break
            }
            negSum = negSum * nums[i]
        }
    }

    if(nums.length==3){
        povFn()
        return povSum
    }
    negFn()
    povFn()

    if(negSum>povSum){
        return negSum
    }else{
        return povSum
    }
    
};