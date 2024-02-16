/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const firstPosition = 0;
    let temp
    const lastPosition = nums.length-1;
    const recall = (firstPosition, lastPosition) => {

        if(firstPosition > lastPosition){
            return firstPosition
        }

        console.log('firstPosition, lastPosition--->',firstPosition, lastPosition)
        const medianIndex = parseInt((lastPosition + firstPosition)/2)
        if(target === nums[medianIndex]){
            return medianIndex
        }else if(target < nums[medianIndex]){
            temp = medianIndex
            if(!(nums[medianIndex-1])){
                return medianIndex
            }
            return recall(medianIndex-1, medianIndex-1)
        }else if(target > nums[medianIndex]){
            if(temp === nums[medianIndex]){
                return medianIndex+1
            }
            return recall(medianIndex+1, lastPosition)
        }
        
    }

    return recall(firstPosition, lastPosition)
    
};