/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
    let res = 0
    const pow = new Array(nums.length).fill(1)
    const operation = (left, right) => {
        if ((left <= nums.length && right <= nums.length) && (left <= right)) {
            if (nums[left] + nums[right] <= target) {
                res =  (res + pow[right - left]) % mod;
                return operation(left + 1, right)
            } else {
                return operation(left, right - 1)
            }
        }
    }

    const mod = 1e9 + 7;
    const left = 0;
    const right = nums.length;
    nums.sort(function (a, b) {
        return parseInt(a) - parseInt(b)
    })
    for (let i = 1; i <= nums.length; i++) {
        pow[i] = (pow[i - 1] * 2) % mod;
    }
    operation(left, right)
    return res;
};