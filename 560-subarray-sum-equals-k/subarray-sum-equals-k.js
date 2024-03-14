/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const obj = {}
    let num = 0
    let count = 0
    obj[0] = 1
    if(nums.length==1 && k==0){
        return 0
    }
    for(let i=0;i<nums.length;i++){
        num = num + nums[i]
        const diff = num - k
        if(diff in obj){
            count = count + obj[diff]
        }
        if(num in obj){
            obj[num] = obj[num]+1
        }else{
            obj[num] = 1
        }
    }
    return count
};