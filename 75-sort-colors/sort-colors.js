/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let end = nums.length-1
    let initial = 0
    if(nums.length<=1){
        return;
    }
    let i = 0
    while(i<nums.length){
        if(nums[i] === 2){
           
            if(i===nums.length-1){
                return;
            }
            if(nums[end] === 2){
                end = end - 1
                continue
            }
           
            if(i>end){
                return;
            }
            const temp = nums[i]
            nums[i] = nums[end]
            nums[end] = temp
            end = end - 1
            console.log('end---',end,'i---',i,'nums---', nums)
        }
        if(nums[i]==0){
            if((nums[initial] != nums[i]) && (initial!=i)){
                const temp = nums[initial]
                nums[initial] = nums[i]
                nums[i] = temp
            }
            initial = initial+1
        }
        i = i+1
        // if(i>=end){
        //     break
        // }
    }
};