/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    let negSum = 1
    let povSum = 1
    const povFn = () => {
        povSum = nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]
    }

    const negFn = () => {
        nums.sort((a,b)=>a-b)
        negSum = nums[0]*nums[1]*nums[nums.length-1]
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