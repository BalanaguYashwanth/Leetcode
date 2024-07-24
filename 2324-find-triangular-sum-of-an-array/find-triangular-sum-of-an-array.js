/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {

    if(nums.length <=1){
        return nums;
    }

    const compress = (nums) => {
        const arr = [];
        for (let i = 0; i < nums.length - 1; i++) {
            arr.push((nums[i] + nums[i + 1])%10)
        }
        if(arr.length <=1){
            return arr
        }
        return compress(arr)
    }

    return compress(nums)
};