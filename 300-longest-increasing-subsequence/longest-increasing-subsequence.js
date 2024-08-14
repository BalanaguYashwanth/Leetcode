/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let res = 0;
    const memoizeArr = new Array(nums.length).fill(1);

    const operate = (j) => {
        for (let i = 0; i < nums.length - 1; i++) {
            if (i == j) {
                j = j + 1;
                return operate(j)
            }
            if (nums[i] < nums[j]) {
                if (memoizeArr[i] >= memoizeArr[j]) {
                    memoizeArr[j] = memoizeArr[j] + 1
                    if(res < memoizeArr[j]){
                        res = memoizeArr[j]
                    }
                }
            }
        }
    }
    operate(1);
    console.log('memoizeArr---->', memoizeArr)
    if(res == 0){
        res = memoizeArr[memoizeArr.length-1]
        return res
    }
    return res
};