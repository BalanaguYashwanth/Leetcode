/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const removedDuplicates = new Set(nums)
    if(removedDuplicates.size!=nums.length){
        return true
    }else{
        return false
    }
};