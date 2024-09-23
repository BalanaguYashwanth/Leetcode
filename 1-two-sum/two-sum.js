/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {}

    for(let i=0; i<nums.length; i++){
        const temp = target - nums[i]
        if(temp in (hash)){
            return [i, hash[temp]]
        }else{
            hash[nums[i]] = i
        }
    }
};