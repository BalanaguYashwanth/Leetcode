/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort()
    const obj={}
    for(let i=0;i<nums.length;i++){
        if(nums[i] in obj){
            return true
        }else{
            obj[nums[i]] = 1
        }
    }
    return false
};