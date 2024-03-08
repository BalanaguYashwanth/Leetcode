/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let initial = 0
    let end = nums.length-1
    let i = 0

    const swap = (leftIndex, rightIndex) => {
        const temp = nums[leftIndex]
        nums[leftIndex] = nums[rightIndex]
        nums[rightIndex] = temp
    }

    while(i<=end){
        if(nums[i]==0){
            swap(initial, i)
            initial = initial+1
            i = i+1
        }
        else if(nums[i]==1){
            i = i+1
        }
        else{
            swap(i,end)
            end = end-1
        }
    }
};