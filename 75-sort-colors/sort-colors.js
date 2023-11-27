/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l = 0
    let r = nums.length-1
    let i = 0

    const swap = (start,end) => {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
    }
    const other = nums.includes(0) ? 0 : 1 
    while(i<=r){
        if(nums[i]==2){
            swap(i,r)
            r = r-1
        }
        if(nums[i]==1){
            i = i+1
        }
        if(nums[i]==(0)){
            if(i==l){
                i = i+1
                l = l+1
            }else{
                swap(l,i)
                i = i+1
                l = l+1
            }
        }
    }
    return nums
};