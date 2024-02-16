/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let firstPosition = 0;
    let lastPosition = nums.length-1;
    while(firstPosition <= lastPosition) {
        const mid = parseInt((firstPosition + lastPosition)/2)
        if(target === nums[mid]){
            return mid
        }else if(target < nums[mid]){
            lastPosition = mid - 1
        }else if(target > nums[mid]){
            firstPosition = mid + 1
        }
    }
    return firstPosition
};